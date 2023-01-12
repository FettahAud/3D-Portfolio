import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  useGLTF,
  Text,
} from "@react-three/drei";
import { useControls } from "leva";

export default function Experience() {
  const model = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );
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
          <primitive object={model.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.16}
              position={[0, 1.56, -1.4]}
              rotation-x={-0.256}
            >
              {/* My website well come here */}
              {/* <iframe src="https://bruno-simon.com/html/"></iframe> */}
            </Html>
          </primitive>
          <Text
            font="./bangers-v20-latin-regular.woff"
            fontSize={1}
            rotation-y={-1.25}
            position={[2, 0.75, 0.75]}
            color="#FF7B54"
            maxWidth={2}
            textAlign="center"
          >
            Fettah Aud
          </Text>
        </Float>
      </PresentationControls>
      <ContactShadows position-y={-1.4} opacity={0.5} blur={2.4} scale={5} />
    </>
  );
}
