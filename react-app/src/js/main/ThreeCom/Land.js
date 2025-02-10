import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Land() {
  const meshRef = useRef(); // Three.js의 mesh를 직접 조작하기 위한 ref 생성

  // 애니메이션 효과 추가 (매 프레임마다 실행됨)
  useFrame(() => {
    meshRef.current.rotation.x = 0.01; // X축 회전
    meshRef.current.rotation.y = 0.01; // Y축 회전
  });

  return (
    <mesh ref={meshRef} scale={1}>
      {/* 박스(메쉬) 생성, ref를 연결하여 조작 가능하도록 함 */}
      <boxGeometry args={[2, 0, 2]} />
      {/* 박스의 크기 (가로, 세로, 높이) */}
      <meshStandardMaterial color="white" />
      {/* 박스의 색상을 설정 */}
    </mesh>
  );
}
