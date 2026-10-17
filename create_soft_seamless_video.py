import os
import sys
import subprocess

def build_soft_video(images, out_mp4, poster_path, clip_duration=4.0, fade_duration=2.0):
    os.makedirs(os.path.dirname(out_mp4), exist_ok=True)
    os.makedirs(os.path.dirname(poster_path), exist_ok=True)

    # To make it a seamless loop, append the first image to the end:
    seq = list(images) + [images[0]]
    n = len(seq)
    
    # Calculate xfade offsets
    # clip length is clip_duration
    # offset for clip i is: i * (clip_duration - fade_duration)
    step = clip_duration - fade_duration
    
    inputs = []
    for img in seq:
        inputs.extend(['-loop', '1', '-t', str(clip_duration), '-i', img])
    
    # Build filter_complex
    filters = []
    for i in range(n):
        filters.append(f'[{i}:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=60[v{i}]')
    
    last_v = 'v0'
    for i in range(1, n):
        offset = round(i * step, 2)
        out_v = f'x{i}' if i < n - 1 else 'v'
        filters.append(f'[{last_v}][v{i}]xfade=transition=fade:duration={fade_duration}:offset={offset}[{out_v}]')
        last_v = out_v

    filter_complex = ';'.join(filters)

    cmd = [
        'ffmpeg', '-y',
        *inputs,
        '-filter_complex', filter_complex,
        '-map', '[v]',
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '18', '-preset', 'medium',
        '-movflags', '+faststart',
        out_mp4
    ]

    print(f"Generating soft seamless video with {len(images)} matching states, {fade_duration}s fade, 60fps...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("FFmpeg error:", res.stderr)
        return False
    
    print(f"Successfully generated soft video: {out_mp4}")

    # Generate poster image at t=1.0s
    poster_cmd = [
        'ffmpeg', '-y',
        '-ss', '00:00:01.000',
        '-i', out_mp4,
        '-vframes', '1',
        '-q:v', '2',
        poster_path
    ]
    subprocess.run(poster_cmd, capture_output=True)
    print(f"Successfully generated poster: {poster_path}")
    return True

if __name__ == '__main__':
    images = sys.argv[1:-2]
    out_video = sys.argv[-2]
    out_poster = sys.argv[-1]
    build_soft_video(images, out_video, out_poster)
