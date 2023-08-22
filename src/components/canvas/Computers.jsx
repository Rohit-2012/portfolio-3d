import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");
  return (
    <group>
      <hemisphereLight intensity={0.15} groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow/>
      <primitive object={scene} scale={isMobile? 0.30 : 0.60} position={isMobile?[0, -2, -0.5] : [0, -3, -1.5]} />
    </group>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event)=>{
      setIsMobile(event.matches)

      mediaQuery.addEventListener('change', handleMediaQueryChange)

      return ()=>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }
  }, [])
  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
        autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={0.15} />
        <pointLight intensity={1} position={[10, 10, 10]} />
        <Computers isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
};

export default ComputerCanvas;
