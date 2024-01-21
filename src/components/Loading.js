import React from 'react'
import loading from "../assets/loading.json"
import Lottie from 'lottie-react'

function Loading() {
  return (
    <Lottie
        style={{width: 500, height: 500}}
        animationData={loading}
        loop={true}
    ></Lottie>
  )
}

export default Loading