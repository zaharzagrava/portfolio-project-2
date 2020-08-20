import React from 'react';

import { Card } from '@material-ui/core'

import styles from './Profile.module.scss'

import ClientAbout from "../ClientAbout/ClientAbout";
import ClientContacts from "../ClientContacts/ClientContacts";
import ClientMain from "../ClientMain/ClientMain";
import ClientSkills from "../ClientSkills/ClientSkills";

function Profile() {

  return (
    <div>
      {/* <Typography variant="body1" gutterBottom>
        Profile
      </Typography> */}

      {/* <SectionPath /> */}

      <div className={styles.client_data_column}>
        <Card className={styles.client_data_column_card}>
          <ClientMain />
        </Card>
        <Card className={styles.client_data_column_card}>
          <ClientSkills />
        </Card>
        <Card className={styles.client_data_column_card}>
          <ClientAbout />
        </Card>
        <Card className={styles.client_data_column_card}> 
          <ClientContacts />
        </Card>
      </div>

      {/* <div className={styles.business_state_column}>

      </div> */}
    </div>
  )
}

export default Profile
