import React from "react";
import { Canvas } from "@react-three/fiber"; // Three.js를 React에서 쉽게 사용하기 위한 라이브러리
import { OrbitControls } from "@react-three/drei"; // 마우스로 뷰를 조작할 수 있도록 해주는 유틸
import { Box } from "./ThreeCom/Box"; // 별도의 컴포넌트로 분리한 박스
import { Land } from "./ThreeCom/Land"; // 별도의 컴포넌트로 분리한 박스
import { LandTop } from "./ThreeCom/LandTop"; // 별도의 컴포넌트로 분리한 박스

const ThreeDimension = () => {
  return (
    <Canvas camera={{ position: [5, 1, 4] }}>
      {/* 3D 공간을 렌더링하는 기본 캔버스, 카메라 초기 위치 설정 */}
      <ambientLight intensity={1} />
      {/* 전체적인 환경광 (빛) 추가 */}
      <directionalLight position={[5, 0, 5]} intensity={3} />
      {/* 특정 방향에서 비추는 빛 추가 */}
      <LandTop />
      <Box />
      <Land />
      {/* 박스 컴포넌트 추가 */}
      <OrbitControls />
      {/* 마우스로 3D 모델을 회전할 수 있도록 해줌 */}
    </Canvas>
  );
};

export default ThreeDimension;
