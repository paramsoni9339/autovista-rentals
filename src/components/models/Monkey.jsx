import { useGLTF } from "@react-three/drei";

export function Monkey(props) {
  const { nodes, materials } = useGLTF("/monkey.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Suzanne.geometry}
        material={materials["Material.001"]}
      />
    </group>
  );
}

useGLTF.preload("/monkey.glb");
