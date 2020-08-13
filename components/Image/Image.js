import React from 'react'

import styles from './Image.module.scss'

function Image(props) {
  return (
    <img src={props.src} height={props.height} width={props.width} className={styles.image}/>
  )
}

export default Image
