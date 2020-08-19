import React, {useState} from 'react'
import styles from './ClientMain.module.scss'

import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from '@apollo/client';

import { ClientActionCreators } from '../../redux/client'

import { CardContent, CardActions, Typography, Button } from '@material-ui/core';
import ContentSkeleton from '../ContentSkeleton/ContentSkeleton';
import Image from "../Image/Image";

export const GET_CLIENTS = gql`
  {
    client(where: {id: "ckdygzpe81ot50105am107zfx"}) {
      avatarImage {
        url
      }
      fullName
      jobTitle
      residence
      company
      id
    }
  }
`;

function ClientMain() {
  const [isDataLoading, setIsDataLoading] = useState(true)
  const dispatch = useDispatch()

  let { loading, error } = useQuery(GET_CLIENTS, {
    onCompleted: (data) => {
      dispatch(ClientActionCreators.clientLoaded(data.client));
      setIsDataLoading(false);
    }
  });
  
  const client = useSelector(state => {
    return loading ? null : state.client.byIds["ckdygzpe81ot50105am107zfx"]
  })

  if (isDataLoading) return <div className={styles.admin}><ContentSkeleton /></div>;
  if (error) return <p>Error :(</p>;


  return (
    <>
      <CardContent>
        <Typography variant="h5" component="h1" gutterBottom >
          Profile Details
        </Typography>
        <Image src={client.avatarImage.url} width={"128px"} height={"128px"}/>
        <Typography variant="body1" gutterBottom>
          Full Name: {client.fullName}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Job Title: {client.jobTitle}
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
    </>
  )
}

export default ClientMain