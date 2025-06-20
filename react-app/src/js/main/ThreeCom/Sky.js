import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Sky() {
  const skyRef = useRef();

  // 구름이 천천히 움직이는 효과
  useFrame((state) => {
    if (skyRef.current) {
      skyRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    }
  });

  return (
    <group>
      {/* 360도 하늘 구체 */}
      <mesh>
        <sphereGeometry args={[80, 32, 32]} />
        <meshBasicMaterial color="#87CEEB" side={2} />
      </mesh>
      
      {/* 구름들 */}
      <group ref={skyRef}>
        <mesh position={[-10, 15, -20]}>
          <sphereGeometry args={[3, 8, 6]} />
          <meshStandardMaterial color="white" transparent opacity={0.8} />
        </mesh>
        
        <mesh position={[15, 12, -25]}>
          <sphereGeometry args={[2.5, 8, 6]} />
          <meshStandardMaterial color="white" transparent opacity={0.7} />
        </mesh>
        
        <mesh position={[-5, 18, -30]}>
          <sphereGeometry args={[2, 8, 6]} />
          <meshStandardMaterial color="white" transparent opacity={0.6} />
        </mesh>
        
        <mesh position={[20, 14, -35]}>
          <sphereGeometry args={[3.5, 8, 6]} />
          <meshStandardMaterial color="white" transparent opacity={0.8} />
        </mesh>
        
        <mesh position={[-25, 10, -15]}>
          <sphereGeometry args={[2.8, 8, 6]} />
          <meshStandardMaterial color="white" transparent opacity={0.7} />
        </mesh>
        
        <mesh position={[30, 16, -40]}>
          <sphereGeometry args={[3.2, 8, 6]} />
          <meshStandardMaterial color="white" transparent opacity={0.6} />
        </mesh>
      </group>
    </group>
  );
} 