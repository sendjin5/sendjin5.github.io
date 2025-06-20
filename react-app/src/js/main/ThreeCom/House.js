import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function House() {
  const smokeRef = useRef();

  // 연기가 계속 나는 애니메이션
  useFrame((state) => {
    if (smokeRef.current) {
      // 연기가 위로 올라가는 효과
      smokeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2 + 3.5;
      // 연기가 살짝 흔들리는 효과
      smokeRef.current.position.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      smokeRef.current.position.z = Math.cos(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* 집 바닥 */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[4, 4]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 집 벽 (앞) */}
      <mesh position={[0, 1.5, 2]}>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      
      {/* 집 벽 (뒤) */}
      <mesh position={[0, 1.5, -2]}>
        <boxGeometry args={[4, 3, 0.2]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      
      {/* 집 벽 (왼쪽) */}
      <mesh position={[-2, 1.5, 0]}>
        <boxGeometry args={[0.2, 3, 4]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      
      {/* 집 벽 (오른쪽) */}
      <mesh position={[2, 1.5, 0]}>
        <boxGeometry args={[0.2, 3, 4]} />
        <meshStandardMaterial color="#DEB887" />
      </mesh>
      
      {/* 지붕 */}
      <mesh position={[0, 3.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[3, 2, 4]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 문 */}
      <mesh position={[0, 0.75, 2.1]}>
        <boxGeometry args={[0.8, 1.5, 0.1]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* 문 손잡이 */}
      <mesh position={[0.3, 0.75, 2.15]}>
        <sphereGeometry args={[0.05, 8, 6]} />
        <meshStandardMaterial color="gold" />
      </mesh>
      
      {/* 창문 (왼쪽) */}
      <mesh position={[-2.1, 1.5, 0.5]}>
        <boxGeometry args={[0.1, 0.8, 0.8]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      
      {/* 창문 (오른쪽) */}
      <mesh position={[2.1, 1.5, -0.5]}>
        <boxGeometry args={[0.1, 0.8, 0.8]} />
        <meshStandardMaterial color="#87CEEB" />
      </mesh>
      
      {/* 굴뚝 */}
      <mesh position={[0.5, 4.5, 0]}>
        <cylinderGeometry args={[0.3, 0.3, 1, 8]} />
        <meshStandardMaterial color="#696969" />
      </mesh>
      
      {/* 연기 (움직이는 애니메이션) */}
      <group ref={smokeRef} position={[0.5, 3.5, 0]}>
        <mesh>
          <sphereGeometry args={[0.4, 8, 6]} />
          <meshStandardMaterial color="gray" transparent opacity={0.6} />
        </mesh>
        <mesh position={[0.1, 0.3, 0.1]}>
          <sphereGeometry args={[0.3, 8, 6]} />
          <meshStandardMaterial color="gray" transparent opacity={0.5} />
        </mesh>
        <mesh position={[-0.1, 0.5, -0.1]}>
          <sphereGeometry args={[0.35, 8, 6]} />
          <meshStandardMaterial color="gray" transparent opacity={0.4} />
        </mesh>
      </group>
      
      {/* 집 주변 잔디 */}
      <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[6, 6]} />
        <meshStandardMaterial color="#90EE90" />
      </mesh>
      
      {/* 집 주변 꽃들 */}
      <mesh position={[1.5, 0.1, 1.5]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      <mesh position={[-1.5, 0.1, 1.5]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color="yellow" />
      </mesh>
      
      <mesh position={[1.5, 0.1, -1.5]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color="pink" />
      </mesh>
      
      <mesh position={[-1.5, 0.1, -1.5]}>
        <sphereGeometry args={[0.1, 8, 6]} />
        <meshStandardMaterial color="purple" />
      </mesh>
    </group>
  );
} 