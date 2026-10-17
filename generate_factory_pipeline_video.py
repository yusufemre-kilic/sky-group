import os
import sys
import subprocess

def create_factory_video(img1, img2, img3, img4, out_mp4, poster_path):
    os.makedirs(os.path.dirname(out_mp4), exist_ok=True)
    os.makedirs(os.path.dirname(poster_path), exist_ok=True)

    # 4 scenes: img1 -> img2 -> img3 -> img4 -> img1 (seamless loop)
    # Each scene: 3.6s, crossfade 1.2s
    # Offset 0: 0s -> 2.4s crossfade to 1
    # Offset 1: 2.4s + 2.4s = 4.8s crossfade to 2
    # Offset 2: 4.8s + 2.4s = 7.2s crossfade to 3
    # Offset 3: 7.2s + 2.4s = 9.6s crossfade to 0 (img1)
    # Total duration: 9.6s + 3.6s = 13.2s
    cmd = [
        'ffmpeg', '-y',
        '-loop', '1', '-t', '3.6', '-i', img1,
        '-loop', '1', '-t', '3.6', '-i', img2,
        '-loop', '1', '-t', '3.6', '-i', img3,
        '-loop', '1', '-t', '3.6', '-i', img4,
        '-loop', '1', '-t', '3.6', '-i', img1,
        '-filter_complex',
        '[0:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30[v0];'
        '[1:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30[v1];'
        '[2:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30[v2];'
        '[3:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30[v3];'
        '[4:v]scale=1920:1080:force_original_aspect_ratio=increase,crop=1920:1080,setsar=1,fps=30[v4];'
        '[v0][v1]xfade=transition=fade:duration=1.2:offset=2.4[x1];'
        '[x1][v2]xfade=transition=fade:duration=1.2:offset=4.8[x2];'
        '[x2][v3]xfade=transition=fade:duration=1.2:offset=7.2[x3];'
        '[x3][v4]xfade=transition=fade:duration=1.2:offset=9.6[v]',
        '-map', '[v]',
        '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '19', '-preset', 'medium',
        '-movflags', '+faststart',
        out_mp4
    ]

    print("Running ffmpeg command to create seamless factory transition video...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        print("FFmpeg error:", res.stderr)
        return False
    
    print(f"Successfully generated video: {out_mp4}")

    # Generate poster image from 1st second of the video
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
    if len(sys.argv) < 5:
        print("Usage: python3 generate_factory_pipeline_video.py <img1> <img2> <img3> <img4>")
        sys.exit(1)
    
    img1, img2, img3, img4 = sys.argv[1:5]
    out_video = '/home/emre/Desktop/sky-group-new/_bpc/assets/base-core-concept/sky-factory-manufacturing-flow.mp4'
    out_poster = '/home/emre/Desktop/sky-group-new/_bpc/assets/base-core-concept/sky-factory-manufacturing-poster.jpg'
    create_factory_video(img1, img2, img3, img4, out_video, out_poster)
