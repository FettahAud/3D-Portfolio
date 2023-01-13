import { Html, useProgress } from "@react-three/drei";

export default function Loadewer() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html>{progress}% Loaded</Html>;
}
