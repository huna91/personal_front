import React, { useState, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import {
  Contents_wrap,
  Flight_frame,
  Flight_title,
  ResevBtn,
} from "./styledComponents";
import Seat from "./seat/Seat";

function Plane(props) {
  const Ref = useRef();
  const { nodes, materials } = useGLTF("/3dmodel/plane_main.gltf");

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    Ref.current.rotation.z = -0.1 - (1 + Math.sin(t / 0.8)) / 3;
    Ref.current.rotation.x = Math.cos(t / 1.5) / 8;
    Ref.current.rotation.y = Math.sin(t / 1.5) / 8;
    Ref.current.position.y = (1 + Math.sin(t / 0.8)) / 5;
  });

  return (
    <group ref={Ref} {...props} dispose={null}>
      <mesh
        geometry={nodes.engine001_Cylinder013.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.aileron001_Cube013.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.box_1001_Cube012.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.wheel003_Cylinder012.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.hydraolic003_Cube011.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.box_2003_Plane004.geometry}
        material={materials.None}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.gear_1003_Cylinder011.geometry}
        material={materials.None}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.fuselage001_Cube010.geometry}
        material={materials["texture_texture.png"]}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.antenna001_Cube009.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.wheel_001001_Cylinder010.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.gear_1_001001_Cylinder009.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.hydraolic001_Cube008.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.box_2002_Plane003.geometry}
        material={materials.None}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.wheel002_Cylinder008.geometry}
        material={materials.texture}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
      <mesh
        geometry={nodes.gear_1002_Cylinder007.geometry}
        material={materials.None}
        rotation={[Math.PI / 1.8, 0, 0.8]}
      />
    </group>
  );
}

const Reservation = (props) => {
  const [active, setActive] = useState(false);
  const [conName, setConName] = useState("");
  function reserv_active(country) {
    setConName(country);
    setActive(!active);
  }
  return (
    <div className="reservation">
      {active ? (
        <Seat conName={conName} setActive={setActive} />
      ) : (
        <Contents_wrap>
          <Flight_frame>
            <Flight_title>미국행 비행기</Flight_title>
            <Canvas>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <spotLight intensity={0.8} position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Plane position={[0, 0, 0]} />
              </Suspense>
            </Canvas>
            <ResevBtn
              onClick={() => {
                reserv_active("미국행비행기");
              }}
            >
              예약하기
            </ResevBtn>
          </Flight_frame>
          <Flight_frame>
            <Flight_title>그리스행 비행기</Flight_title>
            <Canvas>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <spotLight intensity={0.8} position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Plane position={[0, 0, 0]} />
              </Suspense>
            </Canvas>
            <ResevBtn
              onClick={() => {
                reserv_active("그리스행 비행기");
              }}
            >
              예약하기
            </ResevBtn>
          </Flight_frame>
          <Flight_frame>
            <Flight_title>멕시코행 비행기</Flight_title>
            <Canvas camera={[5, 5, 5]}>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <spotLight intensity={0.8} position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Plane position={[0, 0, 0]} />
              </Suspense>
            </Canvas>
            <ResevBtn
              onClick={() => {
                reserv_active("멕시코행 비행기");
              }}
            >
              예약하기
            </ResevBtn>
          </Flight_frame>
          <Flight_frame>
            <Flight_title>필리핀행 비행기</Flight_title>
            <Canvas camera={[5, 5, 5]}>
              <OrbitControls />
              <ambientLight intensity={0.5} />
              <spotLight intensity={0.8} position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <Plane position={[0, 0, 0]} />
              </Suspense>
            </Canvas>
            <ResevBtn
              onClick={() => {
                reserv_active("필리핀행 비행기");
              }}
            >
              예약하기
            </ResevBtn>
          </Flight_frame>
        </Contents_wrap>
      )}
    </div>
  );
};
export default Reservation;
