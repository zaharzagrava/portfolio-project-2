import React from 'react'
import styles from './InfoCard.module.scss'

import { Typography } from '@material-ui/core'

function InfoCard({children, title}) {
  return (
    <div>
      <Typography variant="h5" component="h1" gutterBottom >
        {title}
      </Typography>
      {children}
    </div>
  )
}

export default InfoCard
