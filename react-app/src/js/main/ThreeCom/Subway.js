import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Cylinder, Sphere } from '@react-three/drei';

// 지하철 터널 컴포넌트
export const SubwayTunnel = ({ position = [0, -2, 0], length = 50 }) => {
  return (
    <group position={position}>
      {/* 메인 터널 */}
      <Cylinder 
        args={[2, 2, length, 16]} 
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial color="#2c3e50" transparent opacity={0.3} />
      </Cylinder>
      
      {/* 터널 내부 조명 */}
      {Array.from({ length: Math.floor(length / 5) }, (_, i) => (
        <pointLight
          key={i}
          position={[0, 1.5, i * 5 - length / 2]}
          intensity={0.5}
          distance={10}
          color="#f39c12"
        />
      ))}
    </group>
  );
};

// 지하철 역 컴포넌트
export const SubwayStation = ({ position = [0, -1, 0], name = "역" }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      {/* 역 건물 */}
      <Box args={[8, 3, 6]} position={[0, 1.5, 0]}>
        <meshStandardMaterial color={hovered ? "#e74c3c" : "#34495e"} />
      </Box>
      
      {/* 역 입구 */}
      <Box args={[4, 2, 1]} position={[0, 1, 3]}>
        <meshStandardMaterial color="#95a5a6" />
      </Box>
      
      {/* 역명 표시 */}
      <Box args={[6, 0.5, 0.1]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#ecf0f1" />
      </Box>
      
      {/* 조명 */}
      <pointLight position={[0, 2.5, 0]} intensity={1} distance={15} color="#f1c40f" />
      
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[8, 3, 6]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
};

// 지하철 열차 컴포넌트
export const SubwayTrain = ({ position = [0, -1.5, 0], speed = 0.05 }) => {
  const trainRef = useRef();
  const [direction, setDirection] = useState(1);
  
  useFrame(() => {
    if (trainRef.current) {
      trainRef.current.position.z += speed * direction;
      
      // 열차가 터널 끝에 도달하면 방향 전환
      if (trainRef.current.position.z > 25) {
        setDirection(-1);
      } else if (trainRef.current.position.z < -25) {
        setDirection(1);
      }
    }
  });
  
  return (
    <group ref={trainRef} position={position}>
      {/* 열차 본체 */}
      <Box args={[3, 2, 8]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#e74c3c" />
      </Box>
      
      {/* 열차 창문들 */}
      {Array.from({ length: 4 }, (_, i) => (
        <Box 
          key={i}
          args={[2.5, 1, 0.1]} 
          position={[0, 0.5, i * 1.5 - 2.25]}
        >
          <meshStandardMaterial color="#3498db" transparent opacity={0.7} />
        </Box>
      ))}
      
      {/* 열차 문 */}
      <Box args={[0.1, 1.5, 1]} position={[1.5, 0, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
      <Box args={[0.1, 1.5, 1]} position={[-1.5, 0, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
      
      {/* 열차 조명 */}
      <pointLight position={[0, 1, 0]} intensity={0.8} distance={5} color="#f39c12" />
    </group>
  );
};

// 지하철 시스템 전체 컴포넌트
export const SubwaySystem = () => {
  return (
    <group>
      {/* 지하철 터널 */}
      <SubwayTunnel position={[0, -5, 0]} length={50} />
      
      {/* 지하철 역들 */}
      <SubwayStation position={[0, -4, -20]} name="시작역" />
      <SubwayStation position={[0, -4, 0]} name="중앙역" />
      <SubwayStation position={[0, -4, 20]} name="종점역" />
      
      {/* 지하철 열차 */}
      <SubwayTrain position={[0, -4.5, 0]} speed={0.03} />
      
      {/* 지상 출구들 */}
      <Box args={[2, 4, 2]} position={[0, 0, -20]}>
        <meshStandardMaterial color="#95a5a6" />
      </Box>
      <Box args={[2, 4, 2]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#95a5a6" />
      </Box>
      <Box args={[2, 4, 2]} position={[0, 0, 20]}>
        <meshStandardMaterial color="#95a5a6" />
      </Box>
    </group>
  );
}; 