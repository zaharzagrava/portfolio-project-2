import React, { useState } from 'react'
import { useSelector, useDispatch, useStore } from "react-redux";
import { useQuery, gql } from '@apollo/client';

import styles from './Admin.module.scss'

import { ClientActionCreators } from '../../redux/client'
import Profile from '../Profile/Profile';
import ContentSkeleton from '../ContentSkeleton/ContentSkeleton';

const GET_CLIENTS = gql`
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
      <Profile client={client} />
    </div>
  )

}

export default Admin
