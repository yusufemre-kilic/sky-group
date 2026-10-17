#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Migrates all paths to relative (./) for 100% universal compatibility:
  - Works on GitHub Pages with subpath (https://yusufemre-kilic.github.io/sky-group/)
  - Works on local Vite dev server (http://localhost:5173/)
  - Works on custom domain (https://skymekanik.com/)
  - Works on direct static file viewing
"""

import os
import re
import shutil

BASE_DIR = '/home/emre/Desktop/sky-group-new'

def update_index_html():
    file_path = os.path.join(BASE_DIR, 'index.html')
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Asset paths
    content = content.replace('href="./_bpc/', 'href="./_bpc/')
    content = content.replace('src="./_bpc/', 'src="./_bpc/')
    content = content.replace('href="./assets/', 'href="./assets/')
    content = content.replace('src="./assets/', 'src="./assets/')
    content = content.replace('href="./sm/', 'href="./sm/')
    content = content.replace('src="./sm/', 'src="./sm/')
    content = content.replace('href="./favicon', 'href="./favicon')
    content = content.replace('href="./apple-touch-icon', 'href="./apple-touch-icon')

    # Page links in navbar, footer, and buttons
    content = content.replace('href="./urunlerimiz.html"', 'href="./urunlerimiz.html"')
    content = content.replace('href="./cozumlerimiz.html"', 'href="./cozumlerimiz.html"')
    content = content.replace('href="./hizmetlerimiz.html"', 'href="./hizmetlerimiz.html"')
    content = content.replace('href="./kurumsal.html"', 'href="./kurumsal.html"')
    content = content.replace('href="./referanslar.html"', 'href="./referanslar.html"')
    
    # Root links to index.html
    content = re.sub(r'href="./index.html"(?=\s|>|aria-label)', 'href="./index.html"', content)

    # In case of remaining leading slashes on internal pages
    content = re.sub(r'href="/(proje-[^"]+\.html)"', r'href="./\1"', content)
    content = re.sub(r'href="/(urun-[^"]+\.html)"', r'href="./\1"', content)
    content = re.sub(r'href="/(cozum-[^"]+\.html)"', r'href="./\1"', content)
    content = re.sub(r'href="/(hizmet-[^"]+\.html)"', r'href="./\1"', content)
    content = re.sub(r'href="/(kurumsal-[^"]+\.html)"', r'href="./\1"', content)

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("index.html converted to relative paths.")

def update_build_pages_core():
    file_path = os.path.join(BASE_DIR, 'build_pages_core.py')
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # CSS links
    content = content.replace('href="./_bpc/assets/BaseCoreSpecs.DESLp_Zg.css"', 'href="./_bpc/assets/BaseCoreSpecs.DESLp_Zg.css"')
    content = content.replace('href="./_bpc/assets/core.KFUJ36fi.css"', 'href="./_bpc/assets/core.KFUJ36fi.css"')
    content = content.replace('href="./_bpc/assets/MarketingLayout.CLOcHXtv.css"', 'href="./_bpc/assets/MarketingLayout.CLOcHXtv.css"')
    content = content.replace('href="./favicon', 'href="./favicon')
    content = content.replace('href="./apple-touch-icon', 'href="./apple-touch-icon')

    # Card links
    content = content.replace('href="/{slug}.html"', 'href="./{slug}.html"')
    content = content.replace('src="{c[\'image\']}"', 'src="{img_src}"')
    
    # Ensure img_src is relative
    if 'img_src = c[\'image\']' not in content:
        content = content.replace(
            "slug = c.get('slug') or slugify(c['title'], nav_prefix)",
            "slug = c.get('slug') or slugify(c['title'], nav_prefix)\n        raw_img = c.get('image', '')\n        img_src = '.' + raw_img if raw_img.startswith('/') else raw_img"
        )

    # Logo grid image source
    if 'logo_src = ' not in content:
        content = content.replace(
            'src="{l[\'logo\']}"',
            'src="{\'.\' + l[\'logo\'] if l[\'logo\'].startswith(\'/\') else l[\'logo\']}"'
        )

    # Modal logo
    content = content.replace('src="./assets/sky-group-logo-s.png"', 'src="./assets/sky-group-logo-s.png"')

    # Topnav replacement strings
    content = content.replace('href="./urunlerimiz.html"', 'href="./urunlerimiz.html"')
    content = content.replace('href="./cozumlerimiz.html"', 'href="./cozumlerimiz.html"')
    content = content.replace('href="./hizmetlerimiz.html"', 'href="./hizmetlerimiz.html"')
    content = content.replace('href="./kurumsal.html"', 'href="./kurumsal.html"')
    content = content.replace('href="./referanslar.html"', 'href="./referanslar.html"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("build_pages_core.py converted to relative paths.")

def update_build_referanslar():
    file_path = os.path.join(BASE_DIR, 'build_referanslar.py')
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # CSS links
    content = content.replace('href="./_bpc/assets/BaseCoreSpecs.DESLp_Zg.css"', 'href="./_bpc/assets/BaseCoreSpecs.DESLp_Zg.css"')
    content = content.replace('href="./_bpc/assets/core.KFUJ36fi.css"', 'href="./_bpc/assets/core.KFUJ36fi.css"')
    content = content.replace('href="./_bpc/assets/MarketingLayout.CLOcHXtv.css"', 'href="./_bpc/assets/MarketingLayout.CLOcHXtv.css"')
    content = content.replace('href="./favicon', 'href="./favicon')
    content = content.replace('href="./apple-touch-icon', 'href="./apple-touch-icon')

    # Card links
    content = content.replace('href="/{slug}.html"', 'href="./{slug}.html"')
    content = content.replace('src="{p[\'image\']}"', 'src="{img_src}"')

    # Ensure img_src is relative
    if 'img_src = p[\'image\']' not in content:
        content = content.replace(
            "slug = p.get('slug') or slugify(p['title'], 'proje')",
            "slug = p.get('slug') or slugify(p['title'], 'proje')\n        raw_img = p.get('image', '')\n        img_src = '.' + raw_img if raw_img.startswith('/') else raw_img"
        )

    # Logo grid image source
    if 'logo_src = ' not in content:
        content = content.replace(
            'src="{l[\'logo\']}"',
            'src="{\'.\' + l[\'logo\'] if l[\'logo\'].startswith(\'/\') else l[\'logo\']}"'
        )

    # Topnav replacement strings
    content = content.replace('href="./urunlerimiz.html"', 'href="./urunlerimiz.html"')
    content = content.replace('href="./cozumlerimiz.html"', 'href="./cozumlerimiz.html"')
    content = content.replace('href="./hizmetlerimiz.html"', 'href="./hizmetlerimiz.html"')
    content = content.replace('href="./kurumsal.html"', 'href="./kurumsal.html"')
    content = content.replace('href="./referanslar.html"', 'href="./referanslar.html"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("build_referanslar.py converted to relative paths.")

def update_build_vlog_detail_pages():
    file_path = os.path.join(BASE_DIR, 'build_vlog_detail_pages.py')
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # CSS links
    content = content.replace('href="./_bpc/assets/BaseCoreSpecs.DESLp_Zg.css"', 'href="./_bpc/assets/BaseCoreSpecs.DESLp_Zg.css"')
    content = content.replace('href="./_bpc/assets/core.KFUJ36fi.css"', 'href="./_bpc/assets/core.KFUJ36fi.css"')
    content = content.replace('href="./_bpc/assets/MarketingLayout.CLOcHXtv.css"', 'href="./_bpc/assets/MarketingLayout.CLOcHXtv.css"')
    content = content.replace('href="./favicon', 'href="./favicon')
    content = content.replace('href="./apple-touch-icon', 'href="./apple-touch-icon')

    # Breadcrumb back link relative
    content = content.replace('href="{back_url}"', 'href="{\'.\' + back_url if back_url.startswith(\'/\') else back_url}"')

    # Hero image relative
    content = content.replace('src="{image}"', 'src="{\'.\' + image if image.startswith(\'/\') else image}"')

    # Gallery image relative
    content = content.replace('src="{img}"', 'src="{\'.\' + img if img.startswith(\'/\') else img}"')

    # Related card relative link & image
    content = content.replace('href="/{rel_slug}.html"', 'href="./{rel_slug}.html"')
    content = content.replace('src="{rel[\'image\']}"', 'src="{\'.\' + rel[\'image\'] if rel[\'image\'].startswith(\'/\') else rel[\'image\']}"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("build_vlog_detail_pages.py converted to relative paths.")

def update_build_complete_vlog_system():
    file_path = os.path.join(BASE_DIR, 'build_complete_vlog_system.py')
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    content = content.replace('back_url="./referanslar.html"', 'back_url="./referanslar.html"')
    content = content.replace('back_url="./urunlerimiz.html"', 'back_url="./urunlerimiz.html"')
    content = content.replace('back_url="./cozumlerimiz.html"', 'back_url="./cozumlerimiz.html"')
    content = content.replace('back_url="./hizmetlerimiz.html"', 'back_url="./hizmetlerimiz.html"')
    content = content.replace('back_url="./kurumsal.html"', 'back_url="./kurumsal.html"')

    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("build_complete_vlog_system.py converted to relative paths.")

if __name__ == '__main__':
    update_index_html()
    update_build_pages_core()
    update_build_referanslar()
    update_build_vlog_detail_pages()
    update_build_complete_vlog_system()
    print("All python generators and index.html successfully converted to relative paths!")
