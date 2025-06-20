import React from "react";
import { Tree } from "./Tree";

export function Forest() {
  // 숲에 배치할 나무들의 위치와 크기 (더 많이, 더 크게)
  const trees = [
    // 중앙 지역
    { position: [-8, 0, -5], scale: 1.5 },
    { position: [6, 0, -8], scale: 1.3 },
    { position: [-3, 0, -12], scale: 1.6 },
    { position: [10, 0, -3], scale: 1.8 },
    { position: [-12, 0, 2], scale: 1.2 },
    { position: [4, 0, -15], scale: 1.4 },
    { position: [-6, 0, -18], scale: 1.7 },
    { position: [12, 0, -10], scale: 1.1 },
    { position: [-15, 0, -8], scale: 1.5 },
    { position: [8, 0, -20], scale: 1.3 },
    
    // 더 넓은 지역으로 확장
    { position: [-10, 0, -25], scale: 1.6 },
    { position: [15, 0, -15], scale: 1.4 },
    { position: [-18, 0, -12], scale: 1.8 },
    { position: [5, 0, -30], scale: 1.9 },
    { position: [-20, 0, -18], scale: 1.3 },
    { position: [18, 0, -25], scale: 1.5 },
    { position: [-25, 0, -22], scale: 1.2 },
    { position: [12, 0, -35], scale: 1.7 },
    { position: [-30, 0, -28], scale: 1.4 },
    { position: [22, 0, -32], scale: 1.6 },
    
    // 추가 나무들 - 더 넓은 지역
    { position: [-35, 0, -15], scale: 1.8 },
    { position: [25, 0, -18], scale: 1.5 },
    { position: [-28, 0, -35], scale: 1.3 },
    { position: [30, 0, -28], scale: 1.7 },
    { position: [-22, 0, -40], scale: 1.6 },
    { position: [35, 0, -22], scale: 1.4 },
    { position: [-40, 0, -25], scale: 1.9 },
    { position: [28, 0, -38], scale: 1.2 },
    { position: [-32, 0, -42], scale: 1.5 },
    { position: [38, 0, -32], scale: 1.8 },
    { position: [-38, 0, -18], scale: 1.3 },
    { position: [32, 0, -15], scale: 1.6 },
    { position: [-25, 0, -8], scale: 1.4 },
    { position: [20, 0, -8], scale: 1.7 },
    { position: [-18, 0, 5], scale: 1.5 },
    { position: [15, 0, 3], scale: 1.2 },
    { position: [-12, 0, 8], scale: 1.6 },
    { position: [10, 0, 10], scale: 1.3 },
    { position: [-8, 0, 12], scale: 1.8 },
    { position: [8, 0, 15], scale: 1.4 },
    { position: [-5, 0, 18], scale: 1.7 },
    { position: [5, 0, 20], scale: 1.5 },
    { position: [-3, 0, 25], scale: 1.2 },
    { position: [3, 0, 28], scale: 1.6 },
    { position: [-1, 0, 32], scale: 1.3 },
    { position: [1, 0, 35], scale: 1.8 },
    
    // 대각선 방향으로도 확장
    { position: [-40, 0, -40], scale: 1.7 },
    { position: [40, 0, -40], scale: 1.4 },
    { position: [-40, 0, 40], scale: 1.6 },
    { position: [40, 0, 40], scale: 1.5 },
    { position: [-35, 0, 35], scale: 1.8 },
    { position: [35, 0, 35], scale: 1.3 },
    { position: [-30, 0, 30], scale: 1.7 },
    { position: [30, 0, 30], scale: 1.4 },
    { position: [-25, 0, 25], scale: 1.6 },
    { position: [25, 0, 25], scale: 1.5 },
    { position: [-20, 0, 20], scale: 1.9 },
    { position: [20, 0, 20], scale: 1.2 },
    { position: [-15, 0, 15], scale: 1.8 },
    { position: [15, 0, 15], scale: 1.3 },
    { position: [-10, 0, 10], scale: 1.7 },
    { position: [10, 0, 10], scale: 1.4 },
  ];

  return (
    <group>
      {trees.map((tree, index) => (
        <Tree 
          key={index} 
          position={tree.position} 
          scale={tree.scale} 
        />
      ))}
    </group>
  );
} 