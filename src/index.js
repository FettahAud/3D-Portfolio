import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";
// import Loader from "./Loaderdas";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <>
    <Canvas
      camera={{
        fov: 45,
        near: 0.1,
        far: 2000,
        position: [-3, 1.5, 4],
      }}
    >
      <Suspense>
        <Experience />
      </Suspense>
    </Canvas>
    <Loader
      dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}
      initialState={(active) => active}
    />
  </>
);
