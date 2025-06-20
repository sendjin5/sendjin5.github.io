import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function NaturalGround() {
  const groundRef = useRef();

  return (
    <group>
      {/* 메인 지형 */}
      <mesh ref={groundRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
        {/* 넓은 평면으로 지형 생성 */}
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial 
          color="#90EE90" 
          roughness={0.8}
          metalness={0.1}
        />
      </mesh>
      
      {/* 작은 언덕들 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-5, 0.2, -10]}>
        <planeGeometry args={[8, 8]} />
        <meshStandardMaterial 
          color="#98FB98" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[8, 0.3, -20]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial 
          color="#98FB98" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
      
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-12, 0.1, -15]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial 
          color="#98FB98" 
          roughness={0.7}
          metalness={0.1}
        />
      </mesh>
    </group>
  );
} 