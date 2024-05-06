import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";
import image4 from "/images/4.png";
import image5 from "/images/5.jpg";
import image6 from "/images/6.png";
import { OrbitControls } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function Cube() {
  return (
    <div className="h-screen w-full">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <ambientLight intensity={2} />
        <directionalLight position={[2, 1, 1]} />
        <Cuber />
      </Canvas>
    </div>
  );
}

function Cuber() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [geometry, setGeometry] = useState([1.8, 1.8, 1.8]);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (screenWidth < 450) {
      setGeometry([1.4, 1.4, 1.4]);
    } else if (screenWidth < 543) {
      setGeometry([1.6, 1.6, 1.6]);
    } else {
      setGeometry([1.8, 1.8, 1.8]);
    }
  }, [screenWidth]);
  const mesh = useRef(null);
  const options = {
    damping: 200,
  };
  const mouse = {
    x: useSpring(useMotionValue(0), options),
    y: useSpring(useMotionValue(0), options),
  };

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const sensitivity = 0.005;
    const x = -0.5 + (clientX / innerWidth) * sensitivity;
    const y = -0.5 + (clientY / innerHeight) * sensitivity;
    mouse.x.set(x);
    mouse.y.set(y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mouse", manageMouseMove);
  }, []);

  // useFrame((state, delta) => {
  //   mesh.current.rotation.x += delta * 0.25;
  //   mesh.current.rotation.y += delta * 0.25;
  //   mesh.current.rotation.z += delta * 0.25;
  // });

  const texture_1 = useLoader(TextureLoader, image1);
  const texture_2 = useLoader(TextureLoader, image2);
  const texture_3 = useLoader(TextureLoader, image3);
  const texture_4 = useLoader(TextureLoader, image4);
  const texture_5 = useLoader(TextureLoader, image5);
  const texture_6 = useLoader(TextureLoader, image6);

  return (
    <motion.mesh ref={mesh} rotation-y={mouse.x} rotation-x={mouse.y}>
      <boxGeometry args={geometry} />
      <meshStandardMaterial map={texture_1} attach="material-0" />
      <meshStandardMaterial map={texture_2} attach="material-1" />
      <meshStandardMaterial map={texture_3} attach="material-2" />
      <meshStandardMaterial map={texture_4} attach="material-3" />
      <meshStandardMaterial map={texture_5} attach="material-4" />
      <meshStandardMaterial map={texture_6} attach="material-5" />
    </motion.mesh>
  );
}
