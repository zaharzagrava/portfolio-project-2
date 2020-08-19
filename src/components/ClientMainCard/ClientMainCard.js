import React from 'react';

import {Button, Typography, Card, CardActions, CardContent} from '@material-ui/core'

import Image from "../Image/Image";

import styles from './ClientMainCard.module.scss'

function Profile({ client }) {

  return (
    <div className={styles.profile}>
      <Card className={styles.profile_card}>
        <CardContent className={styles.profile_card_content} >
          <Typography variant="h5" component="h1" gutterBottom >
            Profile Details
          </Typography>
          <Image src={client.avatarImage.url} width={"128px"} height={"128px"}/>
          <Typography variant="body1" gutterBottom>
            Full Name: {client.fullName}
            <br />
            Job Title: {client.jobTitle}
          </Typography>
        </CardContent>
      </Card>
      <Card className={styles.profile_card}>
        <CardContent>
          <Typography variant="h5" component="h1" gutterBottom >
            About
          </Typography>
          <Typography variant="body1" component="p">
            Lives at: {client.residence}
            <br />
            Works at: {client.company}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" size="small" color="primary">
            Follow
          </Button>
          <Button variant="contained" size="small" color="secondary">
            Message
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Profile
