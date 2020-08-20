import React from 'react'
import styles from './AdminHeader.module.scss'

import { AppBar, Toolbar, Typography } from "@material-ui/core";

function AdminHeader() {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={styles.title}>
            Restomaster
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AdminHeader
