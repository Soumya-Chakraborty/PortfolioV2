import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const BackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const particles = useRef<THREE.Points | null>(null);
  const scene = useRef<THREE.Scene | null>(null);
  const camera = useRef<THREE.PerspectiveCamera | null>(null);
  const renderer = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    scene.current = new THREE.Scene();
    camera.current = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    renderer.current = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });

    // Set renderer size and pixel ratio
    renderer.current.setSize(window.innerWidth, window.innerHeight);
    renderer.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Camera position
    camera.current.position.z = 5;

    // Create particles
    const particleCount = 2000;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Position
      positions[i] = (Math.random() - 0.5) * 10;
      positions[i + 1] = (Math.random() - 0.5) * 10;
      positions[i + 2] = (Math.random() - 0.5) * 10;

      // Color
      colors[i] = Math.random() * 0.2 + 0.1; // R
      colors[i + 1] = Math.random() * 0.2 + 0.1; // G
      colors[i + 2] = Math.random() * 0.2 + 0.1; // B
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    particles.current = new THREE.Points(geometry, material);
    scene.current.add(particles.current);

    // Mouse movement handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    // Resize handler
    const handleResize = () => {
      if (!camera.current || !renderer.current) return;
      
      camera.current.aspect = window.innerWidth / window.innerHeight;
      camera.current.updateProjectionMatrix();
      renderer.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (particles.current && scene.current && camera.current && renderer.current) {
        // Rotate particles
        particles.current.rotation.x += 0.0005;
        particles.current.rotation.y += 0.0005;

        // Move particles based on mouse position
        const positions = particles.current.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          const x = positions[i];
          const y = positions[i + 1];
          const z = positions[i + 2];

          const distance = Math.sqrt(x * x + y * y + z * z);
          const force = 0.1 / (distance * distance);

          positions[i] += (mousePosition.current.x * force);
          positions[i + 1] += (mousePosition.current.y * force);
        }

        particles.current.geometry.attributes.position.needsUpdate = true;

        renderer.current.render(scene.current, camera.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (scene.current) {
        scene.current.clear();
      }
      if (renderer.current) {
        renderer.current.dispose();
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 w-full h-full -z-10"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
    </motion.div>
  );
};

export default BackgroundCanvas; 