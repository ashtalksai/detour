#!/usr/bin/env python3
"""
Generate pitch deck images for Detour project
Brand: Teal (#0F766E) and Coral (#F97316)
"""

from PIL import Image, ImageDraw, ImageFont
import math

# Brand colors
TEAL = (15, 118, 110)
CORAL = (249, 115, 22)
WHITE = (255, 255, 255)
DARK = (17, 24, 39)
LIGHT_TEAL = (45, 212, 191)
LIGHT_CORAL = (254, 215, 170)

def create_gradient_mesh(width=1920, height=1080):
    """Create abstract 3D gradient mesh for hero slide"""
    img = Image.new('RGB', (width, height), TEAL)
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Create layered gradient circles
    for i in range(8):
        x = width * (0.3 + i * 0.1)
        y = height * (0.2 + (i % 3) * 0.25)
        radius = 200 + i * 40
        
        # Alternate between teal and coral
        color = LIGHT_TEAL if i % 2 == 0 else LIGHT_CORAL
        alpha = 60 - i * 5
        
        # Draw gradient circle
        for r in range(radius, 0, -10):
            current_alpha = max(0, alpha - (radius - r) // 5)
            draw.ellipse(
                [x - r, y - r, x + r, y + r],
                fill=(*color, current_alpha)
            )
    
    # Add mesh lines
    for i in range(0, width, 100):
        draw.line([(i, 0), (i + 200, height)], fill=(*WHITE, 30), width=2)
    
    return img

def create_burnout_image(width=1920, height=1080):
    """Create frustrated professional at desk - burnout theme"""
    img = Image.new('RGB', (width, height), (30, 41, 59))  # Dark slate
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Desk (dark)
    draw.rectangle([0, height * 0.6, width, height], fill=(20, 30, 48))
    
    # Laptop (closed, dim)
    laptop_x = width * 0.4
    laptop_y = height * 0.55
    draw.rectangle(
        [laptop_x, laptop_y, laptop_x + 300, laptop_y + 20],
        fill=(60, 70, 90)
    )
    
    # Coffee cup (spilled)
    cup_x = width * 0.6
    cup_y = height * 0.6
    draw.ellipse([cup_x, cup_y, cup_x + 60, cup_y + 80], fill=(139, 92, 46))
    draw.polygon(
        [(cup_x + 70, cup_y + 30), (cup_x + 120, cup_y + 40), (cup_x + 90, cup_y + 45)],
        fill=(101, 67, 33, 150)
    )
    
    # Scattered papers (chaos)
    for i in range(10):
        px = width * (0.2 + i * 0.08)
        py = height * (0.5 + (i % 3) * 0.1)
        rotation_angle = (i * 25) % 90 - 45
        
        paper = Image.new('RGBA', (120, 150), (255, 255, 255, 200))
        paper = paper.rotate(rotation_angle, expand=True)
        img.paste(paper, (int(px), int(py)), paper)
    
    # Dark clouds/stress symbols
    for i in range(5):
        cx = width * (0.3 + i * 0.15)
        cy = height * 0.2
        draw.ellipse([cx, cy, cx + 150, cy + 80], fill=(*CORAL, 80))
    
    # Add red alert indicators
    for i in range(3):
        ax = width * (0.7 + i * 0.08)
        ay = height * 0.3
        draw.rectangle([ax, ay, ax + 40, ay + 40], fill=CORAL)
    
    return img

def create_solution_image(width=1920, height=1080):
    """Create clean, organized workspace - calm feeling"""
    img = Image.new('RGB', (width, height), (248, 250, 252))  # Light background
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Desk (clean, organized)
    draw.rectangle([0, height * 0.5, width, height], fill=(241, 245, 249))
    
    # Laptop (open, glowing)
    laptop_x = width * 0.35
    laptop_y = height * 0.4
    # Screen
    draw.rectangle(
        [laptop_x, laptop_y, laptop_x + 400, laptop_y + 280],
        fill=TEAL
    )
    # Inner screen glow
    draw.rectangle(
        [laptop_x + 20, laptop_y + 20, laptop_x + 380, laptop_y + 260],
        fill=LIGHT_TEAL
    )
    # Base
    draw.polygon(
        [(laptop_x - 50, laptop_y + 280), (laptop_x + 450, laptop_y + 280), (laptop_x + 400, laptop_y + 300), (laptop_x, laptop_y + 300)],
        fill=(148, 163, 184)
    )
    
    # Organized items
    # Plant (calm, growth)
    plant_x = width * 0.7
    plant_y = height * 0.5
    draw.ellipse([plant_x, plant_y + 80, plant_x + 80, plant_y + 120], fill=(120, 113, 108))
    for i in range(5):
        leaf_offset = i * 15 - 30
        draw.ellipse(
            [plant_x + 30 + leaf_offset, plant_y + 20, plant_x + 60 + leaf_offset, plant_y + 70],
            fill=(34, 197, 94)
        )
    
    # Coffee cup (calm, upright)
    cup_x = width * 0.15
    cup_y = height * 0.55
    draw.ellipse([cup_x, cup_y, cup_x + 70, cup_y + 90], fill=(255, 237, 213))
    draw.rectangle([cup_x + 5, cup_y + 20, cup_x + 65, cup_y + 80], fill=(255, 237, 213))
    
    # Notebook (organized)
    note_x = width * 0.25
    note_y = height * 0.6
    draw.rectangle([note_x, note_y, note_x + 150, note_y + 200], fill=WHITE)
    draw.rectangle([note_x + 5, note_y + 5, note_x + 145, note_y + 195], fill=(249, 250, 251))
    # Lines
    for i in range(8):
        ly = note_y + 30 + i * 20
        draw.line([(note_x + 20, ly), (note_x + 130, ly)], fill=(203, 213, 225), width=2)
    
    # Calm ambient circles (zen)
    for i in range(4):
        cx = width * (0.1 + i * 0.25)
        cy = height * 0.15
        for r in range(100, 0, -20):
            alpha = 40 - (100 - r) // 5
            draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(*TEAL, alpha), width=3)
    
    return img

def create_vision_image(width=1920, height=1080):
    """Create futuristic workspace - optimistic mood"""
    img = Image.new('RGB', (width, height), (15, 23, 42))  # Deep blue-gray
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Futuristic grid floor
    for i in range(0, width, 80):
        draw.line([(i, height * 0.6), (i, height)], fill=(*TEAL, 60), width=1)
    for i in range(int(height * 0.6), height, 80):
        draw.line([(0, i), (width, i)], fill=(*TEAL, 60), width=1)
    
    # Holographic displays
    for i in range(3):
        panel_x = width * (0.15 + i * 0.3)
        panel_y = height * 0.25
        
        # Panel frame
        draw.rectangle(
            [panel_x, panel_y, panel_x + 250, panel_y + 350],
            outline=LIGHT_TEAL,
            width=3
        )
        
        # Inner glow
        for offset in range(10):
            alpha = 80 - offset * 8
            draw.rectangle(
                [panel_x + offset, panel_y + offset, panel_x + 250 - offset, panel_y + 350 - offset],
                outline=(*LIGHT_TEAL, alpha),
                width=1
            )
        
        # Data visualization lines
        for j in range(6):
            ly = panel_y + 50 + j * 45
            draw.line(
                [(panel_x + 20, ly), (panel_x + 230, ly)],
                fill=CORAL if j % 2 == 0 else LIGHT_TEAL,
                width=2
            )
    
    # Floating elements (future tech)
    for i in range(8):
        fx = width * (0.1 + i * 0.12)
        fy = height * (0.15 + (i % 2) * 0.1)
        size = 30 + i * 5
        
        # Rotating hexagons
        points = []
        for angle in range(0, 360, 60):
            rad = math.radians(angle)
            px = fx + size * math.cos(rad)
            py = fy + size * math.sin(rad)
            points.append((px, py))
        
        draw.polygon(points, outline=CORAL, width=2)
        
        # Inner glow
        for r in range(size, 0, -5):
            alpha = 60 - (size - r) * 2
            inner_points = []
            for angle in range(0, 360, 60):
                rad = math.radians(angle)
                px = fx + r * math.cos(rad)
                py = fy + r * math.sin(rad)
                inner_points.append((px, py))
            draw.polygon(inner_points, fill=(*LIGHT_CORAL, alpha))
    
    # Light beams (optimism)
    for i in range(5):
        beam_x = width * (0.2 + i * 0.15)
        draw.polygon(
            [(beam_x, 0), (beam_x + 80, 0), (beam_x + 40, height * 0.5)],
            fill=(*TEAL, 40)
        )
    
    return img

def create_og_image(width=1200, height=630):
    """Create OG/social sharing image"""
    img = Image.new('RGB', (width, height), TEAL)
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Background gradient
    for y in range(height):
        alpha = int(255 * (1 - y / height))
        draw.line([(0, y), (width, y)], fill=(*CORAL, alpha // 3))
    
    # Large circle accent
    draw.ellipse([width * 0.6, -100, width * 1.2, height * 0.6], fill=(*LIGHT_CORAL, 100))
    
    # Title area (would add text with proper font)
    draw.rectangle([50, height * 0.3, width - 50, height * 0.7], fill=(*WHITE, 220))
    
    return img

def create_twitter_card(width=1200, height=675):
    """Create Twitter card image (16:9)"""
    img = Image.new('RGB', (width, height), WHITE)
    draw = ImageDraw.Draw(img, 'RGBA')
    
    # Split design
    draw.rectangle([0, 0, width // 2, height], fill=TEAL)
    
    # Coral accent
    draw.ellipse([width * 0.3, height * 0.2, width * 0.7, height * 0.8], fill=CORAL)
    
    # White overlay for text
    draw.ellipse([width * 0.35, height * 0.25, width * 0.65, height * 0.75], fill=WHITE)
    
    return img

# Generate all images
print("Generating pitch deck images...")

slide_01 = create_gradient_mesh()
slide_01.save('/Users/ash/clawd/projects/detour/public/pitch/slide-01-hero.png', 'PNG', quality=95)
print("✓ slide-01-hero.png")

slide_02 = create_burnout_image()
slide_02.save('/Users/ash/clawd/projects/detour/public/pitch/slide-02-problem.png', 'PNG', quality=95)
print("✓ slide-02-problem.png")

slide_03 = create_solution_image()
slide_03.save('/Users/ash/clawd/projects/detour/public/pitch/slide-03-solution.png', 'PNG', quality=95)
print("✓ slide-03-solution.png")

slide_12 = create_vision_image()
slide_12.save('/Users/ash/clawd/projects/detour/public/pitch/slide-12-vision.png', 'PNG', quality=95)
print("✓ slide-12-vision.png")

og_image = create_og_image()
og_image.save('/Users/ash/clawd/projects/detour/public/pitch/og-image.png', 'PNG', quality=95)
print("✓ og-image.png (1200x630)")

twitter_card = create_twitter_card()
twitter_card.save('/Users/ash/clawd/projects/detour/public/pitch/twitter-card.png', 'PNG', quality=95)
print("✓ twitter-card.png (1200x675)")

print("\nAll images generated successfully!")
