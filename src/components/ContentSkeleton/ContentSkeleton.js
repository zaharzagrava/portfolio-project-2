import React from 'react'
import ContentLoader from "react-content-loader";

function ContentSkeleton({ linesNumber }) {
  const lines = Array.from(Array(linesNumber).keys())
  return (
    <>
      <ContentLoader height={linesNumber * 40} width="350">
      {lines.map((index) => {
        return (
        <>
          <circle key={index} cx="70" cy={20+((index+1)*30)} r="8" /> 
          <rect key={"_" + index} x="85" y={15+((index+1)*30)} rx="5" ry="5" width="250" height="10" /> 
        </>
        )
      })}
      </ContentLoader>
    </>
  )
}

export default ContentSkeleton
