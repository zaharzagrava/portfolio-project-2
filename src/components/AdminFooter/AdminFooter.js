import React from 'react'
import styles from './AdminFooter.module.scss'

import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText, Link } from "@material-ui/core";
import PersonIcon from '@material-ui/icons/Person';

function AdminFooter() {
  return (
    <div className={styles.root}>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText>
              <a target="_blank" rel="noopener noreferrer" href={"https://zaharzagrava.com/"}>Made by Ruslan Plastun</a>
            </ListItemText>
          </ListItem>
        </List>
    </div>
  )
}

export default AdminFooter
