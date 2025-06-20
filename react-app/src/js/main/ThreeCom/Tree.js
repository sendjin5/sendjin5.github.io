import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Tree({ position = [0, 0, 0], scale = 1 }) {
  const treeRef = useRef();

  // 나무가 바람에 살짝 흔들리는 효과
  useFrame((state) => {
    if (treeRef.current) {
      treeRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <group ref={treeRef} position={position} scale={scale}>
      {/* 나무 줄기 */}
      <mesh position={[0, 1, 0]}>
        <cylinderGeometry args={[0.1, 0.15, 2, 8]} />
        <meshStandardMaterial color="#8B4513" roughness={0.8} />
      </mesh>
      
      {/* 나무 잎사귀 (여러 개의 구체로 구성) */}
      <mesh position={[0, 2.5, 0]}>
        <sphereGeometry args={[0.8, 8, 6]} />
        <meshStandardMaterial color="#228B22" roughness={0.7} />
      </mesh>
      
      <mesh position={[0.3, 2.3, 0.2]}>
        <sphereGeometry args={[0.6, 8, 6]} />
        <meshStandardMaterial color="#32CD32" roughness={0.7} />
      </mesh>
      
      <mesh position={[-0.2, 2.4, -0.1]}>
        <sphereGeometry args={[0.7, 8, 6]} />
        <meshStandardMaterial color="#228B22" roughness={0.7} />
      </mesh>
    </group>
  );
} 