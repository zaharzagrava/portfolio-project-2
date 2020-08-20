import React from 'react'
import styles from './AdminHeader.module.scss'

import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

function AdminHeader() {
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            Restomaster
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default AdminHeader
