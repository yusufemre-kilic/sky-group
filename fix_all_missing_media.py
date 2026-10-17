import os
import glob
import re

BASE_DIR = '/home/emre/Desktop/sky-group-new'

def fix_srcset(match):
    full = match.group(0)
    attr = match.group(1) # srcset=
    quote = match.group(2) # " or '
    val = match.group(3)
    
    parts = val.split(',')
    new_parts = []
    for part in parts:
        stripped = part.strip()
        if not stripped:
            continue
        tokens = stripped.split()
        url = tokens[0]
        desc = " " + " ".join(tokens[1:]) if len(tokens) > 1 else ""
        if url.startswith('/sm/'):
            url = '.' + url
        elif url.startswith('/_bpc/'):
            url = '.' + url
        elif url.startswith('/bpc/'):
            url = '.' + url
        elif url.startswith('/assets/'):
            url = '.' + url
        new_parts.append(f"{url}{desc}")
    
    return f'{attr}{quote}{", ".join(new_parts)}{quote}'

def fix_html_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content

    # Fix srcset
    content = re.sub(r'(srcset=)([\"\'])(.*?)\2', fix_srcset, content, flags=re.DOTALL)

    # Fix any remaining src="/sm/..." or src="/_bpc/..."
    content = re.sub(r'src=([\"\'])/sm/', r'src=\1./sm/', content)
    content = re.sub(r'src=([\"\'])/_bpc/', r'src=\1./_bpc/', content)
    content = re.sub(r'src=([\"\'])/bpc/', r'src=\1./bpc/', content)
    content = re.sub(r'src=([\"\'])/assets/', r'src=\1./assets/', content)

    # Fix poster="/sm/..." or poster="/_bpc/..."
    content = re.sub(r'poster=([\"\'])/sm/', r'poster=\1./sm/', content)
    content = re.sub(r'poster=([\"\'])/_bpc/', r'poster=\1./_bpc/', content)
    content = re.sub(r'poster=([\"\'])/assets/', r'poster=\1./assets/', content)

    # Fix data-src and data-image
    content = re.sub(r'data-src=([\"\'])/sm/', r'data-src=\1./sm/', content)
    content = re.sub(r'data-src=([\"\'])/_bpc/', r'data-src=\1./_bpc/', content)
    content = re.sub(r'data-image=([\"\'])/sm/', r'data-image=\1./sm/', content)
    content = re.sub(r'data-image=([\"\'])/_bpc/', r'data-image=\1./_bpc/', content)

    # Specifically for index.html: fix fact video
    if os.path.basename(file_path) == 'index.html':
        # Replace data-stream-uid empty video with working local video + poster
        fact_video_pattern = r'<video class="bcc-fact-video" data-bcc-fact-video[^>]*>.*?</video>'
        fact_video_replacement = (
            '<video class="bcc-fact-video" data-bcc-fact-video '
            'src="./_bpc/assets/base-core-concept/sky-factory-manufacturing-flow.mp4" '
            'poster="./_bpc/assets/base-core-concept/sky-factory-manufacturing-poster.jpg" '
            'autoplay muted loop playsinline preload="auto" '
            'style="opacity: 1 !important; visibility: visible !important; object-fit: cover; width: 100%; height: 100%;">'
            '<source src="./_bpc/assets/base-core-concept/sky-factory-manufacturing-flow.mp4" type="video/mp4">'
            '</video>'
        )
        content = re.sub(fact_video_pattern, fact_video_replacement, content, flags=re.DOTALL)

    if content != original:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed relative media paths in: {file_path}")

def fix_css_files():
    css_files = glob.glob(os.path.join(BASE_DIR, '_bpc/assets/*.css')) + \
                glob.glob(os.path.join(BASE_DIR, 'bpc/assets/*.css')) + \
                glob.glob(os.path.join(BASE_DIR, 'public/_bpc/assets/*.css')) + \
                glob.glob(os.path.join(BASE_DIR, 'dist/_bpc/assets/*.css'))
    
    for fpath in set(css_files):
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        # CSS font urls are in _bpc/assets, so ./font.woff2 points directly inside _bpc/assets
        content = content.replace('url(/_bpc/assets/', 'url(./')
        content = content.replace("url('/_bpc/assets/", "url('./")
        content = content.replace('url("/_bpc/assets/', 'url("./')
        content = content.replace('url(/bpc/assets/', 'url(./')
        content = content.replace("url('/bpc/assets/", "url('./")
        content = content.replace('url("/bpc/assets/', 'url("./')

        if content != original:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed font URLs in CSS: {fpath}")

def fix_js_files():
    js_files = glob.glob(os.path.join(BASE_DIR, '_bpc/assets/*.js')) + \
               glob.glob(os.path.join(BASE_DIR, 'bpc/assets/*.js')) + \
               glob.glob(os.path.join(BASE_DIR, 'public/_bpc/assets/*.js')) + \
               glob.glob(os.path.join(BASE_DIR, 'dist/_bpc/assets/*.js'))

    for fpath in set(js_files):
        if not os.path.exists(fpath):
            continue
        with open(fpath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        content = content.replace('"url(/_bpc/', '"url(./_bpc/')
        content = content.replace('"url(/bpc/', '"url(./bpc/')
        content = content.replace('"/_bpc/', '"./_bpc/')
        content = content.replace('"/bpc/', '"./bpc/')

        if content != original:
            with open(fpath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"Fixed relative paths in JS: {fpath}")

if __name__ == '__main__':
    all_html = glob.glob(os.path.join(BASE_DIR, '*.html')) + \
               glob.glob(os.path.join(BASE_DIR, 'dist/*.html'))
    for h in all_html:
        fix_html_file(h)
    
    fix_css_files()
    fix_js_files()
    print("Done fixing all missing media and relative URLs!")
