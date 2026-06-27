document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return; // Only run if canvas exists on page

    // 1. Setup Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    
    // We don't want a solid black background, we want it transparent so it blends with the site's theme
    scene.fog = new THREE.FogExp2(0x000000, 0.0005); // Subtle fog for depth

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    // Position camera far back to see the whole sphere initially
    camera.position.z = 1000;

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true, // Transparent background to show CSS underneath
        antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize performance
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2. Create the Particle Sphere
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000; // Adjust for density vs performance
    
    const posArray = new Float32Array(particlesCount * 3);
    const targetPosArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    // The theme color is #A79277 (RGB: 167, 146, 119)
    const colorTheme = new THREE.Color('#A79277');
    const colorSecondary = new THREE.Color('#D1C4B2'); // Lighter accent

    for (let i = 0; i < particlesCount * 3; i+=3) {
        // Generate random spherical coordinates for the final sphere shape
        const r = 600; // Radius of the sphere
        const theta = Math.random() * 2 * Math.PI; // azimuthal angle
        const phi = Math.acos((Math.random() * 2) - 1); // polar angle

        // Final target positions
        targetPosArray[i] = r * Math.sin(phi) * Math.cos(theta);
        targetPosArray[i+1] = r * Math.sin(phi) * Math.sin(theta);
        targetPosArray[i+2] = r * Math.cos(phi);

        // Scattered random starting positions
        posArray[i] = (Math.random() - 0.5) * 6000;
        posArray[i+1] = (Math.random() - 0.5) * 6000;
        posArray[i+2] = (Math.random() - 0.5) * 6000 + 1000; // Start a bit closer to camera

        // Mix between primary and secondary accent colors for depth
        const mixedColor = colorTheme.clone().lerp(colorSecondary, Math.random());
        colorsArray[i] = mixedColor.r;
        colorsArray[i+1] = mixedColor.g;
        colorsArray[i+2] = mixedColor.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorsArray, 3));

    // Custom material for glowing dot effect
    const particlesMaterial = new THREE.PointsMaterial({
        size: 3.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending // gives it a glow effect when they overlap
    });

    const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleMesh);

    // 3. Animation and Scroll Logic
    let scrollY = window.scrollY;
    let targetCameraZ = 1000;
    
    // Slow continuous rotation
    const clock = new THREE.Clock();
    let introComplete = false;

    function animate() {
        requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Rotate the entire sphere slowly
        particleMesh.rotation.y = elapsedTime * 0.05;
        particleMesh.rotation.x = elapsedTime * 0.02;

        // Intro animation: Merge particles into the sphere
        if (!introComplete) {
            let stillMoving = false;
            const positions = particleMesh.geometry.attributes.position.array;
            
            for (let i = 0; i < particlesCount * 3; i++) {
                const diff = targetPosArray[i] - positions[i];
                if (Math.abs(diff) > 0.5) {
                    positions[i] += diff * 0.035; // The ease speed
                    stillMoving = true;
                } else {
                    positions[i] = targetPosArray[i];
                }
            }
            
            particleMesh.geometry.attributes.position.needsUpdate = true;
            if (!stillMoving) introComplete = true;
        }

        // Smooth camera movement towards target Z based on scroll
        // Lerp (linear interpolation) for buttery smooth transition
        camera.position.z += (targetCameraZ - camera.position.z) * 0.05;
        
        // As we get closer to the center, slightly rotate the camera for dynamic effect
        camera.rotation.z = (1000 - camera.position.z) * 0.0002;

        renderer.render(scene, camera);
    }
    animate();

    // Scroll event listener
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // Calculate max scroll height
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollFraction = scrollY / maxScroll;
        
        // Map scroll fraction (0 to 1) to Camera Z position (1000 to -200)
        // -200 means we actually fly slightly past the center of the sphere!
        targetCameraZ = 1000 - (scrollFraction * 1200);
    });

    // Resize handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
});
