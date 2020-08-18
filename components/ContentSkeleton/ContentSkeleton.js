import React from 'react'
import ContentLoader from "react-content-loader";

function ContentSkeleton() {
  const lines = Array.from(Array(15).keys())
  return (
    <>
      <ContentLoader height="700">
      {lines.map((index) => {
        return (
        <>
          <circle key={index} cx="10" cy={20+((index+1)*30)} r="8" /> 
          <rect key={"_" + index} x="25" y={15+((index+1)*30)} rx="5" ry="5" width="250" height="10" /> 
        </>
        )
      })}
      </ContentLoader>
    </>
  )
}

export default ContentSkeleton
