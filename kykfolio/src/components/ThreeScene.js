// src/components/ThreeScene.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { TEST } from '../TEST';
import '../css/Menu.css'

function ThreeScene() {
  return (
    <Canvas style={{ height: '100%', }}>
      <ambientLight intensity={1.8} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Float>
        <TEST />
      </Float>
    </Canvas>
  );
}

export default ThreeScene;
