// FloatingParticles.jsx - Reusable floating particles for any section
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FloatingParticles = ({ 
  particleCount = 100, 
  color = '#d4af37', 
  opacity = 0.6,
  speed = 0.5,
  size = 1.5,
  containerClass = 'floating-particles-container'
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef({
    scene: null,
    camera: null,
    renderer: null,
    particles: null,
    animationId: null
  });

  useEffect(() => {
    const init = () => {
      const container = containerRef.current;
      if (!container) return;

      const { current: refs } = sceneRef;
      const rect = container.getBoundingClientRect();

      // Scene
      refs.scene = new THREE.Scene();

      // Camera
      refs.camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
      refs.camera.position.z = 50;

      // Renderer
      refs.renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      });
      refs.renderer.setSize(rect.width, rect.height);
      refs.renderer.setClearColor(0x000000, 0);

      // Create floating particles
      createParticles();
      animate();
    };

    const createParticles = () => {
      const { current: refs } = sceneRef;
      
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);
      const sizes = new Float32Array(particleCount);

      const particleColor = new THREE.Color(color);

      for (let i = 0; i < particleCount; i++) {
        // Random positions in a sphere
        const radius = Math.random() * 40 + 10;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);

        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);

        colors[i * 3] = particleColor.r;
        colors[i * 3 + 1] = particleColor.g;
        colors[i * 3 + 2] = particleColor.b;

        sizes[i] = Math.random() * size + 0.5;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          opacity: { value: opacity }
        },
        vertexShader: `
          attribute float size;
          attribute vec3 color;
          varying vec3 vColor;
          uniform float time;
          
          void main() {
            vColor = color;
            vec3 pos = position;
            
            // Gentle floating motion
            pos.y += sin(time * 0.5 + pos.x * 0.01) * 2.0;
            pos.x += cos(time * 0.3 + pos.z * 0.01) * 1.0;
            
            vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
            gl_PointSize = size * (50.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,
        fragmentShader: `
          varying vec3 vColor;
          uniform float opacity;
          
          void main() {
            float dist = length(gl_PointCoord - vec2(0.5));
            if (dist > 0.5) discard;
            
            float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
            alpha *= opacity;
            gl_FragColor = vec4(vColor, alpha);
          }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });

      refs.particles = new THREE.Points(geometry, material);
      refs.scene.add(refs.particles);
    };

    const animate = () => {
      const { current: refs } = sceneRef;
      refs.animationId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001 * speed;

      if (refs.particles) {
        refs.particles.material.uniforms.time.value = time;
        refs.particles.rotation.y = time * 0.1;
      }

      if (refs.renderer && refs.scene && refs.camera) {
        refs.renderer.render(refs.scene, refs.camera);
      }
    };

    const handleResize = () => {
      const container = containerRef.current;
      if (!container) return;

      const { current: refs } = sceneRef;
      const rect = container.getBoundingClientRect();

      if (refs.camera && refs.renderer) {
        refs.camera.aspect = rect.width / rect.height;
        refs.camera.updateProjectionMatrix();
        refs.renderer.setSize(rect.width, rect.height);
      }
    };

    init();
    window.addEventListener('resize', handleResize);

    return () => {
      const { current: refs } = sceneRef;
      
      if (refs.animationId) {
        cancelAnimationFrame(refs.animationId);
      }

      window.removeEventListener('resize', handleResize);

      if (refs.particles) {
        refs.particles.geometry.dispose();
        refs.particles.material.dispose();
      }

      if (refs.renderer) {
        refs.renderer.dispose();
      }
    };
  }, [particleCount, color, opacity, speed, size]);

  return (
    <div ref={containerRef} className={containerClass}>
      <canvas ref={canvasRef} style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }} />
    </div>
  );
};