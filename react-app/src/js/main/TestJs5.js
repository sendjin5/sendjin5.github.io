import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Forest } from "./ThreeCom/Forest";
import { NaturalGround } from "./ThreeCom/NaturalGround";
import { Sky } from "./ThreeCom/Sky";
import { Rocks } from "./ThreeCom/Rocks";
import { Animals } from "./ThreeCom/Animals";
import { Player } from "./ThreeCom/Player";
import { House } from "./ThreeCom/House";
import { SubwaySystem } from "./ThreeCom/Subway";
import { City } from "./ThreeCom/City";

const ExtendedMap = () => {
  const [currentView, setCurrentView] = useState("forest"); // forest, city, subway

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {/* 뷰 전환 버튼들 */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        gap: '10px'
      }}>
        <button 
          onClick={() => setCurrentView("forest")}
          style={{
            padding: '10px 20px',
            backgroundColor: currentView === "forest" ? '#27ae60' : '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🌲 숲
        </button>
        <button 
          onClick={() => setCurrentView("city")}
          style={{
            padding: '10px 20px',
            backgroundColor: currentView === "city" ? '#27ae60' : '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🏙️ 도시
        </button>
        <button 
          onClick={() => setCurrentView("subway")}
          style={{
            padding: '10px 20px',
            backgroundColor: currentView === "subway" ? '#27ae60' : '#95a5a6',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          🚇 지하철
        </button>
      </div>

      <Canvas camera={{ position: [8, 3, 8], fov: 60 }}>
        {/* 기본 조명 설정 */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} castShadow />
        <directionalLight position={[-5, 5, -5]} intensity={0.5} />
        
        {/* 하늘은 항상 표시 */}
        <Sky />
        
        {/* 뷰에 따라 다른 환경 표시 */}
        {currentView === "forest" && (
          <>
            <NaturalGround />
            <Forest />
            <Rocks />
            <Animals />
            <House />
            <Player />
          </>
        )}
        
        {currentView === "city" && (
          <>
            <City />
            {/* 도시와 숲의 경계에 작은 숲 추가 */}
            <group position={[60, 0, 0]}>
              <Forest />
            </group>
            <group position={[-60, 0, 0]}>
              <Forest />
            </group>
          </>
        )}
        
        {currentView === "subway" && (
          <>
            {/* 지하철 시스템 */}
            <SubwaySystem />
            
            {/* 지상에는 도시 일부 표시 - 지하철과 겹치지 않도록 조정 */}
            <group position={[0, 0, 0]}>
              <City />
            </group>
          </>
        )}
        
        {/* 카메라 컨트롤 */}
        <OrbitControls 
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          maxPolarAngle={Math.PI / 2}
          minDistance={2}
          maxDistance={100}
        />
      </Canvas>
      
      {/* 정보 패널 */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        backgroundColor: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '15px',
        borderRadius: '10px',
        maxWidth: '300px'
      }}>
        <h3>🗺️ 확장된 맵 가이드</h3>
        {currentView === "forest" && (
          <p>🌲 자연의 숲 환경입니다. 나무, 동물, 바위들이 있는 평화로운 공간입니다.</p>
        )}
        {currentView === "city" && (
          <p>🏙️ 현대적인 도시입니다. 빌딩, 도로, 가로등이 있는 도시 풍경입니다.</p>
        )}
        {currentView === "subway" && (
          <p>🚇 지하철 시스템입니다. 터널, 역, 움직이는 열차를 확인할 수 있습니다.</p>
        )}
        <p style={{ fontSize: '12px', marginTop: '10px' }}>
          💡 마우스로 드래그하여 시점을 변경하고, 휠로 확대 / 축소할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default ExtendedMap; 