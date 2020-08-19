import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from '@apollo/client';

import styles from './Admin.module.scss'

import { ClientActionCreators } from '../../redux/client'
import ClientMainCard from '../ClientMainCard/ClientMainCard';
import ContentSkeleton from '../ContentSkeleton/ContentSkeleton';

import { Typography } from '@material-ui/core'

export const GET_CLIENTS = gql`
  {
    clients {
      fullName
      jobTitle
      residence
      company
      avatarImage {
        url
      }
      id
    }
  }
`;

function Admin() {


  const [isDataLoading, setIsDataLoading] = useState(true)
  const dispatch = useDispatch()

  let { loading, error } = useQuery(GET_CLIENTS, {
    onCompleted: (data) => {
      dispatch(ClientActionCreators.clientLoaded(data.clients[0]));
      setIsDataLoading(false);
    }
  });
  
  const client = useSelector(state => {
    return loading ? null : state.client.byIds["ckdygzpe81ot50105am107zfx"]
  })

  if (isDataLoading) return <div className={styles.admin}><ContentSkeleton /></div>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Typography variant="body1" gutterBottom>
        Full Name: {client.fullName}
        <br />
        Job Title: {client.jobTitle}
      </Typography>
      {/* <ClientMainCard client={client} /> */}
    </div>
  )

}

export default Admin
