import { Canvas } from "@react-three/fiber";
import { Desktop } from "./components/Desktop";

function App() {
  return (
    <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <Desktop />
    </Canvas>
  );
}

export default App;