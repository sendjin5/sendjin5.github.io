import React from "react";
import { Canvas } from "@react-three/fiber"; // Three.js를 React에서 쉽게 사용하기 위한 라이브러리
import { OrbitControls } from "@react-three/drei"; // 마우스로 뷰를 조작할 수 있도록 해주는 유틸
import { Forest } from "./ThreeCom/Forest"; // 숲 컴포넌트
import { NaturalGround } from "./ThreeCom/NaturalGround"; // 자연스러운 지형
import { Sky } from "./ThreeCom/Sky"; // 하늘과 구름
import { Rocks } from "./ThreeCom/Rocks"; // 바위들
import { Animals } from "./ThreeCom/Animals"; // 동물들
import { Player } from "./ThreeCom/Player"; // 플레이어 캐릭터
import { House } from "./ThreeCom/House"; // 집

const ThreeDimension = () => {
  return (
    <Canvas camera={{ position: [8, 3, 8], fov: 60 }}>
      {/* 3D 공간을 렌더링하는 기본 캔버스, 카메라 초기 위치 설정 */}
      
      {/* 자연스러운 조명 설정 */}
      <ambientLight intensity={0.6} />
      {/* 전체적인 환경광 (빛) 추가 */}
      <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
      {/* 태양빛 같은 방향성 조명 */}
      <directionalLight position={[-5, 5, -5]} intensity={0.5} />
      {/* 보조 조명으로 그림자 부드럽게 */}
      
      {/* 숲 환경 구성 */}
      <Sky />
      <NaturalGround />
      <Forest />
      <Rocks />
      <Animals />
      <House />
      <Player />
      
      {/* 마우스로 3D 모델을 회전할 수 있도록 해줌 */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minDistance={2}
        maxDistance={50}
      />
    </Canvas>
  );
};

export default ThreeDimension;