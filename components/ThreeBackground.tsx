"use client";

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function DustParticles({ count = 1500 }) {
  const points = useRef<THREE.Points>(null);

  // Generate random positions for the particles
  const [positions, scales] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread them out in a large area
      positions[i * 3] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z

      scales[i] = Math.random();
    }

    return [positions, scales];
  }, [count]);

  useFrame((state, delta) => {
    if (points.current) {
      // Slow, monumental rotation
      points.current.rotation.y -= delta * 0.05;
      points.current.rotation.x -= delta * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3} args={[positions, 3]} />
        <bufferAttribute
          attach="attributes-scale"
          count={scales.length}
          array={scales}
          itemSize={1} args={[scales, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#d4d0c8" /* Travertine stone color */
        transparent
        opacity={0.5}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function ThreeBackground({ opacity = 0.8 }: { opacity?: number }) {
  return (
    <div className="absolute left-0 top-0 z-0 h-full w-full pointer-events-none" style={{ opacity }}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#0a0a0c', 5, 30]} />
        <DustParticles count={2000} />
      </Canvas>
      {/* Subtle overlay gradient to blend edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c] opacity-80 z-10"></div>
    </div>
  );
}
