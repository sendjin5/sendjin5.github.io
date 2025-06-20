import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

// 토끼 컴포넌트
function Rabbit({ position = [0, 0, 0] }) {
  const rabbitRef = useRef();
  const speed = 0.02;
  const direction = useRef({ x: 1, z: 1 });
  const bounds = { min: -20, max: 20 };

  useFrame((state) => {
    if (rabbitRef.current) {
      // 토끼가 뛰어다니는 애니메이션
      rabbitRef.current.position.x += direction.current.x * speed;
      rabbitRef.current.position.z += direction.current.z * speed;
      
      // 경계에 도달하면 방향 전환
      if (rabbitRef.current.position.x > bounds.max || rabbitRef.current.position.x < bounds.min) {
        direction.current.x *= -1;
      }
      if (rabbitRef.current.position.z > bounds.max || rabbitRef.current.position.z < bounds.min) {
        direction.current.z *= -1;
      }
      
      // 뛰는 모션 (위아래로 살짝 움직임)
      rabbitRef.current.position.y = Math.sin(state.clock.elapsedTime * 8) * 0.1;
      
      // 방향에 따라 회전
      rabbitRef.current.rotation.y = Math.atan2(direction.current.x, direction.current.z);
    }
  });

  return (
    <group ref={rabbitRef} position={position}>
      {/* 토끼 몸체 (타원형) */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.4, 12, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* 토끼 머리 */}
      <mesh position={[0, 0.7, 0.3]}>
        <sphereGeometry args={[0.25, 12, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* 토끼 귀 (길고 뾰족하게) */}
      <mesh position={[0.08, 1.1, 0.3]} rotation={[0.1, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.02, 0.4, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      <mesh position={[-0.08, 1.1, 0.3]} rotation={[-0.1, 0, 0]}>
        <cylinderGeometry args={[0.03, 0.02, 0.4, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* 토끼 눈 */}
      <mesh position={[0.08, 0.75, 0.45]}>
        <sphereGeometry args={[0.02, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[-0.08, 0.75, 0.45]}>
        <sphereGeometry args={[0.02, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 토끼 코 */}
      <mesh position={[0, 0.65, 0.5]}>
        <sphereGeometry args={[0.015, 8, 6]} />
        <meshStandardMaterial color="pink" />
      </mesh>
      
      {/* 토끼 입 */}
      <mesh position={[0, 0.6, 0.48]}>
        <sphereGeometry args={[0.008, 6, 4]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 토끼 앞다리 */}
      <mesh position={[0.15, 0.2, 0.2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.4, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      <mesh position={[-0.15, 0.2, 0.2]}>
        <cylinderGeometry args={[0.06, 0.06, 0.4, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* 토끼 뒷다리 (더 크고 강하게) */}
      <mesh position={[0.2, 0.15, -0.1]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      <mesh position={[-0.2, 0.15, -0.1]}>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 8]} />
        <meshStandardMaterial color="#F5F5DC" />
      </mesh>
      
      {/* 토끼 꼬리 (둥글고 작게) */}
      <mesh position={[0, 0.4, -0.4]}>
        <sphereGeometry args={[0.08, 8, 6]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      {/* 토끼 수염 (작은 실선들) */}
      <mesh position={[0.12, 0.65, 0.4]} rotation={[0, 0, 0.3]}>
        <cylinderGeometry args={[0.005, 0.005, 0.15, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      <mesh position={[-0.12, 0.65, 0.4]} rotation={[0, 0, -0.3]}>
        <cylinderGeometry args={[0.005, 0.005, 0.15, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      <mesh position={[0.15, 0.6, 0.4]} rotation={[0, 0, 0.1]}>
        <cylinderGeometry args={[0.005, 0.005, 0.12, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
      
      <mesh position={[-0.15, 0.6, 0.4]} rotation={[0, 0, -0.1]}>
        <cylinderGeometry args={[0.005, 0.005, 0.12, 4]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
}

// 곰 컴포넌트
function Bear({ position = [0, 0, 0] }) {
  const bearRef = useRef();
  const speed = 0.008;
  const direction = useRef({ x: 1, z: 1 });
  const bounds = { min: -30, max: 30 };

  useFrame((state) => {
    if (bearRef.current) {
      // 곰이 천천히 걸어다니는 애니메이션
      bearRef.current.position.x += direction.current.x * speed;
      bearRef.current.position.z += direction.current.z * speed;
      
      // 경계에 도달하면 방향 전환
      if (bearRef.current.position.x > bounds.max || bearRef.current.position.x < bounds.min) {
        direction.current.x *= -1;
      }
      if (bearRef.current.position.z > bounds.max || bearRef.current.position.z < bounds.min) {
        direction.current.z *= -1;
      }
      
      // 걷는 모션 (위아래로 살짝 움직임)
      bearRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.03;
      
      // 방향에 따라 회전
      bearRef.current.rotation.y = Math.atan2(direction.current.x, direction.current.z);
    }
  });

  return (
    <group ref={bearRef} position={position}>
      {/* 곰 몸체 (크고 둥글게) */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.8, 12, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 곰 머리 */}
      <mesh position={[0, 2.3, 0.6]}>
        <sphereGeometry args={[0.5, 12, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 곰 귀 */}
      <mesh position={[0.2, 2.6, 0.6]}>
        <sphereGeometry args={[0.08, 8, 6]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      <mesh position={[-0.2, 2.6, 0.6]}>
        <sphereGeometry args={[0.08, 8, 6]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
      
      {/* 곰 눈 */}
      <mesh position={[0.15, 2.4, 0.9]}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[-0.15, 2.4, 0.9]}>
        <sphereGeometry args={[0.04, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 곰 코 */}
      <mesh position={[0, 2.2, 1.0]}>
        <sphereGeometry args={[0.06, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 곰 입 */}
      <mesh position={[0, 2.1, 1.02]}>
        <sphereGeometry args={[0.02, 6, 4]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 곰 앞다리 */}
      <mesh position={[0.4, 1.2, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1.0, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      <mesh position={[-0.4, 1.2, 0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1.0, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 곰 뒷다리 */}
      <mesh position={[0.4, 1.2, -0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1.0, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      <mesh position={[-0.4, 1.2, -0.3]}>
        <cylinderGeometry args={[0.15, 0.15, 1.0, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 곰 발바닥 */}
      <mesh position={[0.4, 0.7, 0.3]}>
        <sphereGeometry args={[0.12, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[-0.4, 0.7, 0.3]}>
        <sphereGeometry args={[0.12, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[0.4, 0.7, -0.3]}>
        <sphereGeometry args={[0.12, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[-0.4, 0.7, -0.3]}>
        <sphereGeometry args={[0.12, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 곰 꼬리 */}
      <mesh position={[0, 1.5, -0.8]}>
        <sphereGeometry args={[0.2, 8, 6]} />
        <meshStandardMaterial color="#654321" />
      </mesh>
    </group>
  );
}

export function Animals() {
  const animals = [
    // 토끼들 (더 많이)
    { type: 'rabbit', position: [5, 0, -5] },
    { type: 'rabbit', position: [-8, 0, -12] },
    { type: 'rabbit', position: [12, 0, -18] },
    { type: 'rabbit', position: [-22, 0, -20] },
    { type: 'rabbit', position: [18, 0, -25] },
    { type: 'rabbit', position: [-15, 0, -8] },
    { type: 'rabbit', position: [25, 0, -15] },
    { type: 'rabbit', position: [-25, 0, -30] },
    { type: 'rabbit', position: [30, 0, -20] },
    { type: 'rabbit', position: [-30, 0, -25] },
    { type: 'rabbit', position: [35, 0, -30] },
    { type: 'rabbit', position: [-35, 0, -15] },
    { type: 'rabbit', position: [20, 0, -35] },
    { type: 'rabbit', position: [-20, 0, -35] },
    { type: 'rabbit', position: [15, 0, -40] },
    { type: 'rabbit', position: [-15, 0, -40] },
    { type: 'rabbit', position: [10, 0, -45] },
    { type: 'rabbit', position: [-10, 0, -45] },
    { type: 'rabbit', position: [5, 0, 5] },
    { type: 'rabbit', position: [-5, 0, 8] },
    { type: 'rabbit', position: [10, 0, 12] },
    { type: 'rabbit', position: [-10, 0, 15] },
    { type: 'rabbit', position: [15, 0, 18] },
    { type: 'rabbit', position: [-15, 0, 22] },
    { type: 'rabbit', position: [20, 0, 25] },
    { type: 'rabbit', position: [-20, 0, 28] },
    { type: 'rabbit', position: [25, 0, 32] },
    { type: 'rabbit', position: [-25, 0, 35] },
    { type: 'rabbit', position: [30, 0, 38] },
    { type: 'rabbit', position: [-30, 0, 40] },
    { type: 'rabbit', position: [35, 0, 42] },
    { type: 'rabbit', position: [-35, 0, 45] },
    
    // 곰들 (사슴 대신)
    { type: 'bear', position: [-15, 0, -8] },
    { type: 'bear', position: [18, 0, -25] },
    { type: 'bear', position: [-25, 0, -15] },
    { type: 'bear', position: [28, 0, -30] },
    { type: 'bear', position: [-32, 0, -20] },
    { type: 'bear', position: [22, 0, -40] },
    { type: 'bear', position: [-18, 0, 5] },
    { type: 'bear', position: [15, 0, 3] },
    { type: 'bear', position: [-12, 0, 8] },
    { type: 'bear', position: [10, 0, 10] },
  ];

  return (
    <group>
      {animals.map((animal, index) => (
        <group key={index}>
          {animal.type === 'rabbit' && <Rabbit position={animal.position} />}
          {animal.type === 'bear' && <Bear position={animal.position} />}
        </group>
      ))}
    </group>
  );
} 