import React, { useEffect, useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, ContactShadows } from "@react-three/drei";
import { proxy, useSnapshot } from "valtio";
import {
  Piker_title_1,
  Piker_title_2,
  Piker_point,
  Piker_contents,
  Model_contents,
  SaveBtn,
} from "./styledComponents";
import { HexColorPicker } from "react-colorful";
import { useSelector, useDispatch } from "react-redux";
import { shoes_func } from "../../redux/middleware";

// function Plane(props) {
//   const ref = useRef();
//   const { nodes, materials } = useGLTF("/3dmodel/plane_main.gltf");
//   const [hovered, setHovered] = useState(false);
//   const [clicked, setClicked] = useState(false);

//   return (
//     <group {...props} dispose={null}>
//       <mesh
//         geometry={nodes.engine001_Cylinder013.geometry}
//         material={materials.texture}
//         rotation={[Math.PI / 2, 0, 0]}
//         onClick={(e) => setClicked(!clicked)}
//         onPointerOver={(event) => setHovered(true)}
//         onPointerOut={(event) => setHovered(false)}
//       />
//       <mesh
//         geometry={nodes.aileron001_Cube013.geometry}
//         material={materials.texture}
//         rotation={[Math.PI / 2, 0, 0]}
//         onClick={(e) => setClicked(!clicked)}
//         onPointerOver={(event) => setHovered(true)}
//         onPointerOut={(event) => setHovered(false)}
//       />
//       <mesh
//         geometry={nodes.fuselage001_Cube010.geometry}
//         material={materials["texture_texture.png"]}
//         rotation={[Math.PI / 2, 0, 0]}
//         onClick={(e) => setClicked(!clicked)}
//         onPointerOver={(event) => setHovered(true)}
//         onPointerOut={(event) => setHovered(false)}
//       />
//     </group>
//   );
// }

// function Carrier(props) {
//   const group = useRef();
//   // gltf 불러옴
//   const { nodes, materials } = useGLTF("carrier.gltf");

//   // 이벤트 컨트롤
//   const [hovered, setHovered] = useState(false);
//   const [clicked, setClicked] = useState(false);

//   const snap = useSnapshot(state);

//   // useEffect(() => {}, [hovered]);
//   return (
//     <group
//       {...props}
//       ref={group}
//       dispose={null}
//       scale={[0.03, 0.03, 0.03]}
//       onPointerOver={(e) => {
//         e.stopPropagation();
//         setHovered(e.object.material.name);
//         console.log(e.object.material);
//       }}
//       onPointerOut={(e) => {
//         e.intersections.length === 0 && setHovered(null);
//       }}
//       onPointerDown={(e) => {
//         e.stopPropagation();
//         state.current = e.object.material.name;
//       }}
//       onPointerMissed={(e) => {
//         state.current = null;
//       }}
//     >
//       <mesh
//         geometry={nodes.suitcase_v1.geometry}
//         material-color={snap.items.middle}
//         material={materials.middle}
//       />
//       <mesh
//         geometry={nodes.suitcase_v1001.geometry}
//         material-color={snap.items.back}
//         material={materials.back}
//       />
//       <mesh
//         geometry={nodes.suitcase_v1002.geometry}
//         material-color={snap.items.side}
//         material={materials.side}
//       />
//       <mesh
//         geometry={nodes.suitcase_v1003.geometry}
//         material-color={snap.items.front}
//         material={materials.front}
//       />
//       <mesh
//         geometry={nodes.suitcase_v1004.geometry}
//         material-color={snap.items.handdle}
//         material={materials.handdle}
//       />
//     </group>
//   );
// }

function Shoes(props) {
  const Group = useRef();
  const { nodes, materials } = useGLTF("/3dmodel/shoe.gltf");

  // 이벤트 컨트롤
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  console.log("dfsdfsdfsdgsef");
  const snap = useSnapshot(props.state);
  console.log(snap);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    Group.current.rotation.z = -0.1 - (1 + Math.sin(t / 1.5)) / 20;
    Group.current.rotation.x = Math.cos(t / 4) / 8;
    Group.current.rotation.y = Math.sin(t / 4) / 8;
    Group.current.position.y = (1 + Math.sin(t / 1.2)) / 5;
  });

  return (
    <group
      ref={Group}
      {...props}
      dispose={null}
      scale={[1.5, 1.5, 1.5]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(e.object.material.name);
      }}
      onPointerOut={(e) => {
        e.intersections.length === 0 && setHovered(null);
      }}
      onPointerDown={(e) => {
        e.stopPropagation();
        props.state.current = e.object.material.name;
      }}
      onPointerMissed={(e) => {
        props.state.current = null;
      }}
    >
      <mesh
        material-color={snap.items.laces}
        geometry={nodes.shoe.geometry}
        material={materials.laces}
      />
      <mesh
        material-color={snap.items.mesh}
        geometry={nodes.shoe_1.geometry}
        material={materials.mesh}
      />
      <mesh
        material-color={snap.items.caps}
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
      />
      <mesh
        material-color={snap.items.inner}
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
      />
      <mesh
        material-color={snap.items.sole}
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
      />
      <mesh
        material-color={snap.items.stripes}
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
      />
      <mesh
        material-color={snap.items.band}
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
      />
      <mesh
        material-color={snap.items.patch}
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
      />
    </group>
  );
}

function Picker({ state }) {
  const snap = useSnapshot(state);
  return (
    <>
      <Piker_title_1>
        여행갈때 <Piker_point>운동화</Piker_point>는 필수지~
      </Piker_title_1>
      <Piker_title_2>"나만의 운동화를 챙겨 가자 "</Piker_title_2>
      <Piker_contents>
        <HexColorPicker
          color={snap.items[snap.current]}
          onChange={(color) => (state.items[snap.current] = color)}
        />
        <h1 style={{ margin: "none" }}>변경 : {snap.current}</h1>
      </Piker_contents>
    </>
  );
}

const Main = () => {
  const loginInfo = useSelector((state) => state.login_reducer);
  const shoes_saved = useSelector((state) => state.shoes_reducer);
  console.log(shoes_saved);
  useEffect(() => {}, [Shoes, Picker]);
  const dispatch = useDispatch();

  const state = proxy({
    current: null,
    items: {},
  });

  setTimeout(() => {
    state.items = {
      laces: loginInfo.isLogin ? shoes_saved.laces : "#C0C0C0",
      mesh: loginInfo.isLogin ? shoes_saved.mesh : "#C0C0C0",
      caps: loginInfo.isLogin ? shoes_saved.caps : "#C0C0C0",
      inner: loginInfo.isLogin ? shoes_saved.inner : "#C0C0C0",
      sole: loginInfo.isLogin ? shoes_saved.sole : "#C0C0C0",
      stripes: loginInfo.isLogin ? shoes_saved.stripes : "#C0C0C0",
      band: loginInfo.isLogin ? shoes_saved.band : "#C0C0C0",
      patch: loginInfo.isLogin ? shoes_saved.patch : "#C0C0C0",
    };
  }, 1000);

  function saveShoesData() {
    loginInfo.user_id
      ? dispatch(shoes_func.shoesData(state.items, loginInfo.user_id))
      : alert("로그인을 해주세요.");
    loginInfo.user_id ? alert("저장완료") : <></>;
  }
  return (
    <div className="main">
      <Picker state={state} />
      <Model_contents>
        <Canvas
          // concurrent
          // pixelRatio={[1, 1.5]}
          camera={{ position: [0, 1, 2.5] }}
        >
          <OrbitControls
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
          />
          <ambientLight intensity={0.6} />
          <spotLight
            intensity={0.8}
            angle={0.1}
            penumbra={1}
            position={[5, 25, 20]}
          />
          <spotLight
            intensity={0.8}
            angle={0.1}
            penumbra={1}
            position={[5, 25, -20]}
          />
          <spotLight
            intensity={0.8}
            angle={0.1}
            penumbra={1}
            position={[-20, 25, -20]}
          />
          <Suspense fallback={null}>
            <Shoes state={state} />
            <ContactShadows
              rotation-x={Math.PI / 2}
              position={[0, -0.8, 0]}
              opacity={0.25}
              width={10}
              height={10}
              blur={2}
              far={1}
            />
          </Suspense>
        </Canvas>
      </Model_contents>
      <SaveBtn onClick={saveShoesData}>저~장</SaveBtn>
      {loginInfo.isLogin ? <></> : <></>}
    </div>
  );
};

export { Main };
