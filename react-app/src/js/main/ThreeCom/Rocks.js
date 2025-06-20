import React from "react";

export function Rocks() {
  const rocks = [
    // 중앙 지역 바위들
    { position: [2, 0, -3], scale: [0.5, 0.3, 0.4] },
    { position: [-4, 0, -7], scale: [0.8, 0.5, 0.6] },
    { position: [7, 0, -12], scale: [0.3, 0.2, 0.3] },
    { position: [-8, 0, -15], scale: [1.0, 0.6, 0.8] },
    { position: [12, 0, -8], scale: [0.4, 0.3, 0.5] },
    { position: [-12, 0, -5], scale: [0.6, 0.4, 0.7] },
    
    // 더 넓은 지역으로 확장
    { position: [15, 0, -20], scale: [0.7, 0.4, 0.6] },
    { position: [-18, 0, -25], scale: [0.9, 0.5, 0.7] },
    { position: [22, 0, -15], scale: [0.5, 0.3, 0.4] },
    { position: [-25, 0, -10], scale: [0.8, 0.4, 0.6] },
    { position: [18, 0, -30], scale: [0.6, 0.3, 0.5] },
    { position: [-30, 0, -20], scale: [1.1, 0.6, 0.8] },
    { position: [25, 0, -25], scale: [0.4, 0.2, 0.3] },
    { position: [-35, 0, -15], scale: [0.7, 0.4, 0.6] },
    { position: [30, 0, -18], scale: [0.9, 0.5, 0.7] },
    { position: [-28, 0, -30], scale: [0.5, 0.3, 0.4] },
    { position: [32, 0, -22], scale: [0.8, 0.4, 0.6] },
    { position: [-22, 0, -35], scale: [0.6, 0.3, 0.5] },
    { position: [35, 0, -28], scale: [1.0, 0.6, 0.8] },
    { position: [-20, 0, -40], scale: [0.7, 0.4, 0.6] },
    
    // 양쪽 방향으로 확장
    { position: [5, 0, 5], scale: [0.6, 0.3, 0.5] },
    { position: [-5, 0, 8], scale: [0.8, 0.4, 0.6] },
    { position: [10, 0, 12], scale: [0.4, 0.2, 0.3] },
    { position: [-10, 0, 15], scale: [0.9, 0.5, 0.7] },
    { position: [15, 0, 18], scale: [0.7, 0.3, 0.5] },
    { position: [-15, 0, 22], scale: [0.5, 0.3, 0.4] },
    { position: [20, 0, 25], scale: [1.1, 0.6, 0.8] },
    { position: [-20, 0, 28], scale: [0.6, 0.3, 0.5] },
    { position: [25, 0, 32], scale: [0.8, 0.4, 0.6] },
    { position: [-25, 0, 35], scale: [0.4, 0.2, 0.3] },
    { position: [30, 0, 38], scale: [0.9, 0.5, 0.7] },
    { position: [-30, 0, 40], scale: [0.7, 0.3, 0.5] },
    { position: [35, 0, 42], scale: [0.5, 0.3, 0.4] },
    { position: [-35, 0, 45], scale: [1.0, 0.6, 0.8] },
    
    // 대각선 방향으로도 확장
    { position: [40, 0, -35], scale: [0.6, 0.3, 0.5] },
    { position: [-40, 0, -30], scale: [0.8, 0.4, 0.6] },
    { position: [38, 0, -40], scale: [0.4, 0.2, 0.3] },
    { position: [-38, 0, -38], scale: [0.9, 0.5, 0.7] },
    { position: [42, 0, -42], scale: [0.7, 0.3, 0.5] },
    { position: [-42, 0, -42], scale: [0.5, 0.3, 0.4] },
    { position: [45, 0, -45], scale: [1.1, 0.6, 0.8] },
    { position: [-45, 0, -45], scale: [0.6, 0.3, 0.5] },
    
    // 양쪽 끝 지역
    { position: [40, 0, 35], scale: [0.8, 0.4, 0.6] },
    { position: [-40, 0, 30], scale: [0.4, 0.2, 0.3] },
    { position: [38, 0, 40], scale: [0.9, 0.5, 0.7] },
    { position: [-38, 0, 38], scale: [0.7, 0.3, 0.5] },
    { position: [42, 0, 42], scale: [0.5, 0.3, 0.4] },
    { position: [-42, 0, 42], scale: [1.0, 0.6, 0.8] },
    { position: [45, 0, 45], scale: [0.6, 0.3, 0.5] },
    { position: [-45, 0, 45], scale: [0.8, 0.4, 0.6] },
    
    // 중간 지역 추가 바위들
    { position: [3, 0, -25], scale: [0.7, 0.4, 0.6] },
    { position: [-3, 0, -28], scale: [0.5, 0.3, 0.4] },
    { position: [8, 0, -32], scale: [0.9, 0.5, 0.7] },
    { position: [-8, 0, -35], scale: [0.6, 0.3, 0.5] },
    { position: [13, 0, -38], scale: [0.8, 0.4, 0.6] },
    { position: [-13, 0, -42], scale: [0.4, 0.2, 0.3] },
    { position: [17, 0, -45], scale: [1.1, 0.6, 0.8] },
    { position: [-17, 0, -48], scale: [0.7, 0.3, 0.5] },
  ];

  return (
    <group>
      {rocks.map((rock, index) => (
        <mesh key={index} position={rock.position} scale={rock.scale}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial 
            color="#696969" 
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
} 