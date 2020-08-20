import React, {useState} from 'react'
import styles from './ClientAbout.module.scss'

import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from '@apollo/client';

import { ClientActionCreators } from '../../redux/client'

import { CardContent, Typography } from '@material-ui/core';
import ContentSkeleton from '../ContentSkeleton/ContentSkeleton';

export const GET_CLIENT_INFO = gql`
  {
    client(where: {id: "ckdygzpe81ot50105am107zfx"}) {
      residence
      company
      id
    }
  }
`;

function ClientAbout() {
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

  if (isDataLoading) return <div className={styles.admin}><ContentSkeleton linesNumber={3}  /></div>;
  if (error) return <p>Error :(</p>;


  return (
    <>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom >
          About
        </Typography>
        <Typography variant="body1" gutterBottom>
          Lives in: {client.residence}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Works at: {client.company}
        </Typography>
      </CardContent>
    </>
  )
}

export default ClientAbout