import React, { useState } from 'react';
import { Box, Cylinder, Sphere } from '@react-three/drei';

// 빌딩 컴포넌트
export const Building = ({ position = [0, 0, 0], height = 10, width = 5, depth = 5, color = "#34495e" }) => {
  const [hovered, setHovered] = useState(false);
  
  return (
    <group position={position}>
      {/* 빌딩 본체 */}
      <Box args={[width, height, depth]} position={[0, height / 2, 0]}>
        <meshStandardMaterial color={hovered ? "#e74c3c" : color} />
      </Box>
      
      {/* 빌딩 창문들 */}
      {Array.from({ length: Math.min(Math.floor(height / 3), 8) }, (_, floor) => (
        Array.from({ length: Math.min(Math.floor(width / 2), 4) }, (_, window) => (
          <Box 
            key={`${floor}-${window}`}
            args={[0.6, 0.6, 0.1]} 
            position={[
              (window - Math.floor(width / 4)) * 1.8, 
              floor * 3 + 2, 
              depth / 2 + 0.1
            ]}
          >
            <meshStandardMaterial color="#f39c12" transparent opacity={0.8} />
          </Box>
        ))
      ))}
      
      {/* 빌딩 입구 */}
      <Box args={[1.5, 2, 0.5]} position={[0, 1, depth / 2 + 0.25]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
      
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
};

// 도로 컴포넌트
export const Road = ({ position = [0, 0, 0], length = 50, width = 8 }) => {
  return (
    <group position={position}>
      {/* 도로 본체 */}
      <Box args={[width, 0.05, length]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#2c3e50" />
      </Box>
      
      {/* 도로 중앙선 */}
      <Box args={[0.2, 0.06, length]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#f1c40f" />
      </Box>
      
      {/* 도로 차선들 */}
      {Array.from({ length: Math.floor(length / 5) }, (_, i) => (
        <Box 
          key={i}
          args={[0.1, 0.06, 2]} 
          position={[0, 0, i * 5 - length / 2]}
        >
          <meshStandardMaterial color="#f1c40f" />
        </Box>
      ))}
    </group>
  );
};

// 가로등 컴포넌트
export const StreetLight = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* 가로등 기둥 */}
      <Cylinder args={[0.2, 0.2, 6]} position={[0, 3, 0]}>
        <meshStandardMaterial color="#7f8c8d" />
      </Cylinder>
      
      {/* 가로등 팔 */}
      <Box args={[2, 0.1, 0.1]} position={[1, 5.5, 0]}>
        <meshStandardMaterial color="#7f8c8d" />
      </Box>
      
      {/* 가로등 조명 */}
      <Sphere args={[0.3]} position={[1, 5.3, 0]}>
        <meshStandardMaterial color="#f1c40f" emissive="#f1c40f" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* 조명 효과 */}
      <pointLight position={[1, 5.3, 0]} intensity={1} distance={10} color="#f1c40f" />
    </group>
  );
};

// 도시 전체 컴포넌트
export const City = () => {
  return (
    <group>
      {/* 도로들 */}
      <Road position={[0, 0, 0]} length={100} width={8} />
      <Road position={[0, 0, 0]} length={8} width={100} rotation={[0, Math.PI / 2, 0]} />
      
      {/* 가로등들 */}
      {Array.from({ length: 10 }, (_, i) => (
        <StreetLight key={i} position={[i * 10 - 45, 0, 0]} />
      ))}
      {Array.from({ length: 10 }, (_, i) => (
        <StreetLight key={`z-${i}`} position={[0, 0, i * 10 - 45]} />
      ))}
      
      {/* 빌딩들 - 도로에서 벗어나게 배치 */}
      <Building position={[-20, 0, -20]} height={15} width={8} depth={8} color="#34495e" />
      <Building position={[20, 0, -20]} height={20} width={10} depth={10} color="#2c3e50" />
      <Building position={[-20, 0, 20]} height={12} width={6} depth={6} color="#34495e" />
      <Building position={[20, 0, 20]} height={18} width={9} depth={9} color="#2c3e50" />
      <Building position={[0, 0, -35]} height={25} width={12} depth={12} color="#34495e" />
      <Building position={[0, 0, 35]} height={22} width={11} depth={11} color="#2c3e50" />
      <Building position={[-35, 0, 0]} height={16} width={7} depth={7} color="#34495e" />
      <Building position={[35, 0, 0]} height={19} width={8} depth={8} color="#2c3e50" />
      
      {/* 중앙 공원 - 도로에서 벗어나게 배치 */}
      <Box args={[10, 0.05, 10]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#27ae60" />
      </Box>
      
      {/* 공원 나무들 */}
      {Array.from({ length: 5 }, (_, i) => (
        <Cylinder 
          key={i}
          args={[0.5, 1, 3]} 
          position={[i * 2 - 4, 1.5, 0]}
        >
          <meshStandardMaterial color="#8b4513" />
        </Cylinder>
      ))}
      
      {/* 공원 벤치 */}
      <Box args={[2, 0.5, 1]} position={[0, 0.25, 4]}>
        <meshStandardMaterial color="#8b4513" />
      </Box>
      <Box args={[2, 0.5, 1]} position={[0, 0.25, -4]}>
        <meshStandardMaterial color="#8b4513" />
      </Box>
    </group>
  );
}; 