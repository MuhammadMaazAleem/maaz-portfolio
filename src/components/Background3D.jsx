import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  // Reduced from 5000 to 2000 particles for better performance
  const sphere = useMemo(() => random.inSphere(new Float32Array(2000), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00d4ff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();

  useFrame((state) => {
    // Smoother, less intensive animations
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      {/* Reduced geometry complexity for better performance */}
      <torusKnotGeometry args={[0.4, 0.15, 64, 12]} />
      <meshStandardMaterial
        color="#b847ff"
        emissive="#b847ff"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function Background3D() {
  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      width: '100%', 
      height: '100%', 
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      <Canvas 
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // Limit pixel ratio for better performance
        performance={{ min: 0.5 }} // Performance optimization
        gl={{ 
          antialias: false, // Disable antialiasing for performance
          powerPreference: 'high-performance' 
        }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}

export default Background3D;
