import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function Player() {
  const playerRef = useRef();
  const leftArmRef = useRef();
  const rightArmRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef();
  const [keys, setKeys] = useState({});
  const [isWalking, setIsWalking] = useState(false);
  const speed = 0.1;
  const rotationSpeed = 0.1;

  // 키보드 이벤트 처리
  useEffect(() => {
    const handleKeyDown = (event) => {
      setKeys(prev => ({ ...prev, [event.code]: true }));
    };

    const handleKeyUp = (event) => {
      setKeys(prev => ({ ...prev, [event.code]: false }));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useFrame((state) => {
    if (playerRef.current) {
      const player = playerRef.current;
      const leftArm = leftArmRef.current;
      const rightArm = rightArmRef.current;
      const leftLeg = leftLegRef.current;
      const rightLeg = rightLegRef.current;
      
      // 방향키에 따른 이동
      if (keys['ArrowUp'] || keys['KeyW']) {
        player.position.z -= speed;
      }
      if (keys['ArrowDown'] || keys['KeyS']) {
        player.position.z += speed;
      }
      if (keys['ArrowLeft'] || keys['KeyA']) {
        player.position.x -= speed;
      }
      if (keys['ArrowRight'] || keys['KeyD']) {
        player.position.x += speed;
      }

      // 걷는 상태 확인
      const walking = keys['ArrowUp'] || keys['KeyW'] || keys['ArrowDown'] || keys['KeyS'] || 
                     keys['ArrowLeft'] || keys['KeyA'] || keys['ArrowRight'] || keys['KeyD'];
      
      setIsWalking(walking);

      // 이동 방향에 따른 회전
      if (keys['ArrowUp'] || keys['KeyW']) {
        player.rotation.y = 0;
      }
      if (keys['ArrowDown'] || keys['KeyS']) {
        player.rotation.y = Math.PI;
      }
      if (keys['ArrowLeft'] || keys['KeyA']) {
        player.rotation.y = Math.PI / 2;
      }
      if (keys['ArrowRight'] || keys['KeyD']) {
        player.rotation.y = -Math.PI / 2;
      }

      // 대각선 이동 처리
      if ((keys['ArrowUp'] || keys['KeyW']) && (keys['ArrowLeft'] || keys['KeyA'])) {
        player.rotation.y = Math.PI / 4;
      }
      if ((keys['ArrowUp'] || keys['KeyW']) && (keys['ArrowRight'] || keys['KeyD'])) {
        player.rotation.y = -Math.PI / 4;
      }
      if ((keys['ArrowDown'] || keys['KeyS']) && (keys['ArrowLeft'] || keys['KeyA'])) {
        player.rotation.y = 3 * Math.PI / 4;
      }
      if ((keys['ArrowDown'] || keys['KeyS']) && (keys['ArrowRight'] || keys['KeyD'])) {
        player.rotation.y = -3 * Math.PI / 4;
      }

      // 걷는 애니메이션
      if (isWalking && leftArm && rightArm && leftLeg && rightLeg) {
        const time = state.clock.elapsedTime;
        const walkSpeed = 8;
        
        // 팔 움직임 (반대 방향으로)
        leftArm.rotation.x = Math.sin(time * walkSpeed) * 0.5;
        rightArm.rotation.x = Math.sin(time * walkSpeed + Math.PI) * 0.5;
        
        // 다리 움직임 (반대 방향으로)
        leftLeg.rotation.x = Math.sin(time * walkSpeed + Math.PI) * 0.3;
        rightLeg.rotation.x = Math.sin(time * walkSpeed) * 0.3;
      } else if (leftArm && rightArm && leftLeg && rightLeg) {
        // 멈춰있을 때는 팔과 다리를 원래 위치로
        leftArm.rotation.x = 0;
        rightArm.rotation.x = 0;
        leftLeg.rotation.x = 0;
        rightLeg.rotation.x = 0;
      }
    }
  });

  return (
    <group ref={playerRef} position={[3, 0, 0]}>
      {/* 사람 몸체 */}
      <mesh position={[0, 1.2, 0]}>
        <cylinderGeometry args={[0.3, 0.25, 1.2, 8]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      
      {/* 사람 머리 */}
      <mesh position={[0, 2.1, 0]}>
        <sphereGeometry args={[0.25, 12, 8]} />
        <meshStandardMaterial color="#FFE4B5" />
      </mesh>
      
      {/* 사람 눈 */}
      <mesh position={[0.08, 2.15, 0.2]}>
        <sphereGeometry args={[0.02, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[-0.08, 2.15, 0.2]}>
        <sphereGeometry args={[0.02, 8, 6]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      {/* 사람 코 */}
      <mesh position={[0, 2.05, 0.22]}>
        <sphereGeometry args={[0.015, 6, 4]} />
        <meshStandardMaterial color="#FFB6C1" />
      </mesh>
      
      {/* 사람 입 */}
      <mesh position={[0, 1.95, 0.23]}>
        <sphereGeometry args={[0.01, 6, 4]} />
        <meshStandardMaterial color="red" />
      </mesh>
      
      {/* 사람 머리카락 */}
      <mesh position={[0, 2.25, 0]}>
        <sphereGeometry args={[0.28, 12, 8]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>
      
      {/* 사람 팔 (움직이는 애니메이션용) */}
      <group ref={leftArmRef} position={[0.4, 1.5, 0]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
          <meshStandardMaterial color="#FFE4B5" />
        </mesh>
      </group>
      
      <group ref={rightArmRef} position={[-0.4, 1.5, 0]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
          <meshStandardMaterial color="#FFE4B5" />
        </mesh>
      </group>
      
      {/* 사람 다리 (움직이는 애니메이션용) */}
      <group ref={leftLegRef} position={[0.15, 0.6, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 1.2, 8]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
      </group>
      
      <group ref={rightLegRef} position={[-0.15, 0.6, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 1.2, 8]} />
          <meshStandardMaterial color="#4169E1" />
        </mesh>
      </group>
      
      {/* 사람 신발 */}
      <mesh position={[0.15, 0.05, 0.1]}>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshStandardMaterial color="black" />
      </mesh>
      
      <mesh position={[-0.15, 0.05, 0.1]}>
        <boxGeometry args={[0.2, 0.1, 0.3]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
} 