import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useQuery, gql } from '@apollo/client';

import { ClientActionCreators } from '../../redux/client'

const GET_CLIENTS = gql`
  {
    clients {
      fullName
      jobTitle
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
  
  const admin = useSelector(state => {
    return loading ? null : state.client.byIds["ckdygzpe81ot50105am107zfx"]
  })

  if (isDataLoading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      DATA IS HERE
      <p>{admin.fullName}</p>
    </div>
  )

}

export default Admin