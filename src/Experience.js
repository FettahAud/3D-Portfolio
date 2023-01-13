import * as THREE from "three";
import gsap from "gsap";
import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
  Text,
  useAnimations,
  Center,
} from "@react-three/drei";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

export default function Experience() {
  const mac = useGLTF("./mac.glb");
  const iphone = useGLTF("./iphone.glb");

  const { size } = useThree();

  const object = useRef();
  const text = useRef();

  const [isDesktop, setIsDesktop] = useState();
  const [action, setAction] = useState();

  const animations = useAnimations(mac.animations, mac.scene);

  useEffect(() => {
    setAction(animations.actions.open);
  }, [animations]);
  useEffect(() => {
    if (size.width > 992) {
      setIsDesktop(true);
      console.log(text.current.maxWidth);
      gsap.to(text.current, {
        fontSize: 1,
        maxWidth: 3,
      });
      gsap.to(text.current.rotation, {
        y: -1.25,
      });
      gsap.to(text.current.position, {
        x: 2,
        y: 0.75,
        z: 0.75,
      });
    } else {
      setIsDesktop(false);
      gsap.to(text.current, {
        fontSize: 0.5,
        maxWidth: 4,
      });
      gsap.to(text.current.rotation, {
        y: -0.25,
      });
      gsap.to(text.current.position, {
        x: 0.5,
        y: 1.2,
        z: -1.5,
      });
    }
  }, [size.width]);

  const openMac = () => {
    action.setLoop(THREE.LoopOnce);
    action.clampWhenFinished = true;
    action.play();
  };

  return (
    <>
      {/* <OrbitControls /> */}
      <Environment preset="city" />

      <color args={["#F8F4EA"]} attach="background" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.22]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          {/* <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color="#ff6900"
            rotation={[-0.256, Math.PI, 0]}
            position={[0, 0.55, -1.4]}
          /> */}
          {isDesktop ? (
            <>
              <primitive
                ref={object}
                onClick={openMac}
                object={mac.scene}
                position-y={-1.2}
              />
            </>
          ) : (
            <>
              <primitive
                object={iphone.scene}
                position-y={-2.5}
                rotation-y={-0.5}
                rotation-x={-0.2}
              />
            </>
          )}
          <Text
            ref={text}
            color="#FF7B54"
            font="./bangers-v20-latin-regular.woff"
            textAlign="center"
          >
            Fettah Aud
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-2.5} opacity={0.5} blur={2.4} scale={5} />
    </>
  );
}
