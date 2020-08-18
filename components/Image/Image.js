import React from 'react'

import styles from './Image.module.scss'

function Image({src, height, width}) {
  return (
    <img src={src} height={height} width={width}/>
  )
}

export default Image
