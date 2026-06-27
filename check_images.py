import os
import struct

def get_image_size(file_path):
    with open(file_path, 'rb') as f:
        head = f.read(24)
        if len(head) != 24:
            return None
        if head.startswith(b'\x89PNG\r\n\x1a\n'):
            check = struct.unpack('>i', head[4:8])[0]
            if check != 0x0d0a1a0a:
                pass
            width, height = struct.unpack('>ii', head[16:24])
            return width, height
        elif head[:6] in (b'GIF87a', b'GIF89a'):
            width, height = struct.unpack('<HH', head[6:10])
            return width, height
        elif head.startswith(b'\xff\xd8'):
            f.seek(0)
            size = 2
            ftype = 0
            while not 0xc0 <= ftype <= 0xcf:
                f.seek(size, 1)
                byte = f.read(1)
                while ord(byte) == 0xff:
                    byte = f.read(1)
                ftype = ord(byte)
                size = struct.unpack('>H', f.read(2))[0] - 2
            f.seek(1, 1)
            height, width = struct.unpack('>HH', f.read(4))
            return width, height
    return None

images = ['assets/images/residence_1_concept.png', 'assets/images/residence_2_plans.png', 'assets/images/residence_3_elevations.png']

for img in images:
    if os.path.exists(img):
        size = os.path.getsize(img)
        dims = get_image_size(img)
        print(f"{img}: {size / 1024:.2f} KB, Dimensions: {dims}")
    else:
        print(f"{img} not found.")
