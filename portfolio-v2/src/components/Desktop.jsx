import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Desktop = () => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
      <Avatar/>
      </group>
      <ambientLight intensity={1}></ambientLight>
    </>
  );
};