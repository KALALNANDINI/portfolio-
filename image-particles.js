document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('image-particle-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Set internal resolution higher for crispness
    const size = 320;
    canvas.width = size * window.devicePixelRatio;
    canvas.height = size * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    const particles = [];
    const numParticles = 2500;
    const centerX = size / 2;
    const centerY = size / 2;
    const maxRadius = size / 2;
    
    // Primary and Secondary Theme colors
    const colorTheme = {r: 167, g: 146, b: 119}; // #A79277
    const colorSecondary = {r: 209, g: 196, b: 178}; // #D1C4B2
    
    for (let i = 0; i < numParticles; i++) {
        // Target position: anywhere inside the circle
        const angle = Math.random() * Math.PI * 2;
        const r = Math.sqrt(Math.random()) * maxRadius; // Uniform distribution in circle
        const targetX = centerX + Math.cos(angle) * r;
        const targetY = centerY + Math.sin(angle) * r;
        
        // Start position: completely scattered far away
        const startX = (Math.random() - 0.5) * 2000 + centerX;
        const startY = (Math.random() - 0.5) * 2000 + centerY;
        
        // Randomly blend colors
        const mix = Math.random();
        const rColor = Math.round(colorTheme.r * mix + colorSecondary.r * (1 - mix));
        const gColor = Math.round(colorTheme.g * mix + colorSecondary.g * (1 - mix));
        const bColor = Math.round(colorTheme.b * mix + colorSecondary.b * (1 - mix));
        
        particles.push({
            x: startX,
            y: startY,
            targetX: targetX,
            targetY: targetY,
            color: `rgba(${rColor}, ${gColor}, ${bColor}, 0.8)`,
            size: Math.random() * 1.5 + 0.5, // Smaller, more elegant dots
            speed: Math.random() * 0.15 + 0.1 // Much faster easing (0.1 to 0.25)
        });
    }
    
    let animationActive = true;
    
    function animate() {
        if (!animationActive) return;
        
        ctx.clearRect(0, 0, size, size);
        
        let stillMoving = false;
        
        particles.forEach(p => {
            const dx = p.targetX - p.x;
            const dy = p.targetY - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            
            if (dist > 0.5) {
                p.x += dx * p.speed;
                p.y += dy * p.speed;
                stillMoving = true;
            } else {
                p.x = p.targetX;
                p.y = p.targetY;
            }
            
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        
        if (stillMoving) {
            requestAnimationFrame(animate);
        } else {
            // Remove canvas once fully stopped
            canvas.remove();
        }
    }
    
    // Trigger the image fade-in very early (e.g., after 300ms) so the photo doesn't load late
    setTimeout(() => {
        const imgs = document.querySelectorAll('.is-loading');
        imgs.forEach(img => img.classList.remove('is-loading'));
        canvas.style.opacity = '0'; // Canvas starts fading out while image fades in
    }, 300); // 300ms delay ensures particles fly in rapidly, then instantly reveal the photo
    
    // Start animation loop
    animate();
});
