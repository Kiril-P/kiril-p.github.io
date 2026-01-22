import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef<THREE.Group>(null);
  const particlesRef = useRef<THREE.Points>(null);

  // Generate globe particles
  const particles = useMemo(() => {
    const positions = [];
    const particleCount = 1000;
    const radius = 2;

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      positions.push(x, y, z);
    }

    return new Float32Array(positions);
  }, []);

  // Generate connection lines
  const lines = useMemo(() => {
    const lineGeometries = [];
    const connectionCount = 50;
    const radius = 2;

    for (let i = 0; i < connectionCount; i++) {
      const theta1 = Math.random() * Math.PI * 2;
      const phi1 = Math.acos(Math.random() * 2 - 1);
      const theta2 = Math.random() * Math.PI * 2;
      const phi2 = Math.acos(Math.random() * 2 - 1);

      const x1 = radius * Math.sin(phi1) * Math.cos(theta1);
      const y1 = radius * Math.sin(phi1) * Math.sin(theta1);
      const z1 = radius * Math.cos(phi1);

      const x2 = radius * Math.sin(phi2) * Math.cos(theta2);
      const y2 = radius * Math.sin(phi2) * Math.sin(theta2);
      const z2 = radius * Math.cos(phi2);

      const points = [
        new THREE.Vector3(x1, y1, z1),
        new THREE.Vector3(x2, y2, z2),
      ];

      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      lineGeometries.push(geometry);
    }

    return lineGeometries;
  }, []);

  // Rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particles.length / 3}
            array={particles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#3b82f6"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Connection lines */}
      {lines.map((geometry, index) => (
        <line key={index} geometry={geometry}>
          <lineBasicMaterial
            color="#8b5cf6"
            transparent
            opacity={0.15}
            linewidth={1}
          />
        </line>
      ))}

      {/* Removed pulsing nodes - they didn't fit the aesthetic */}

      {/* Wireframe sphere */}
      <mesh>
        <sphereGeometry args={[2, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.05}
        />
      </mesh>
    </group>
  );
}

export default function NetworkGlobe() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Fade in after a short delay to ensure Three.js is ready
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`network-globe-container absolute -right-20 top-1/2 -translate-y-1/2 w-[550px] h-[550px] pointer-events-none hidden lg:block transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ background: 'transparent' }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <Globe />
      </Canvas>
    </div>
  );
}
