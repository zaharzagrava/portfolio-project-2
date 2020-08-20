import React, {useState} from 'react'
import styles from './ClientContacts.module.scss'

import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from '@apollo/client';

import { ClientActionCreators } from '../../redux/client'

import { CardContent, Typography } from '@material-ui/core';
import ContentSkeleton from '../ContentSkeleton/ContentSkeleton';

import WebIcon from '@material-ui/icons/Web';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

export const GET_CLIENT_INFO = gql`
  {
    client(where: {id: "ckdygzpe81ot50105am107zfx"}) {
      twitter
      personalWebsite
      linkedIn
      id
    }
  }
`;

function ClientContacts() {
  const [isDataLoading, setIsDataLoading] = useState(true)
  const dispatch = useDispatch()

  let { loading, error } = useQuery(GET_CLIENT_INFO, {
    onCompleted: (data) => {
      dispatch(ClientActionCreators.clientLoaded(data.client));
      setIsDataLoading(false);
    }
  });
  
  const client = useSelector(state => {
    return loading ? null : state.client.byIds["ckdygzpe81ot50105am107zfx"]
  })

  if (isDataLoading) return <div className={styles.admin}><ContentSkeleton linesNumber={4}  /></div>;
  if (error) return <p>Error :(</p>;


  return (
    <>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom >
          Contacts
        </Typography>
        <Typography variant="body1" gutterBottom>
          <TwitterIcon className={styles.icon} /> <a href={client.twitter}>Twitter</a>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <WebIcon className={styles.icon} /> <a href={client.personalWebsite}>Personal Website</a>
        </Typography>
        <Typography variant="body1" gutterBottom>
          <LinkedInIcon className={styles.icon} /> <a href={client.linkedIn}>LinkedIn</a>
        </Typography>
      </CardContent>
    </>
  )
}

export default ClientContacts