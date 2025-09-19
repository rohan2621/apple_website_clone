import React from "react";
import { PerspectiveCamera, View } from "@react-three/drei";
import { AmbientLight } from "three";


const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, item, size, }) => {


  return (

    <>

      <View index={index}
        id={gsapType} className={`border-2 border-red-500 w-full h-full ${index === 2}?'right-[-100%]':''`} >
        {/* ambientlight */}
        <ambientLight intensity={.3} />
        <PerspectiveCamera makeDefault position={ [0,0,4]} />
      </View >
    </>

  )
};

export default ModelView;
