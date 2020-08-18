import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { Typography, Button } from '@material-ui/core';
 
import styles from './RegisterForm.module.scss'
import Image from '../Image/Image';

function RegisterForm() {

  return (
    <form className={styles.form}>
      <Image src="/images/5x5.png" height="40px" width="150px" />
      <div style={{marginTop: '32px'}}>
        <Typography variant="h5" component="h1" gutterBottom className={styles.create_your_acc_h1}>
          Create your account
          h2 Heading
        </Typography>
      </div>
      <div style={{marginTop: '24px'}}>
        <Typography variant="h5" component="h1" gutterBottom className={styles.create_your_acc_h1}>
          Create your account
        </Typography>
      </div>
{/*       
      <div style={{marginTop: '20px'}}>
        <FormGoogleSignUp />
      </div>
      <div style={{marginTop: '20px'}}>
        Or
      </div>
      <div style={{marginTop: '20px'}}>
        <FormTextField />
      </div>
      <div style={{marginTop: '20px'}}>
        <FormTextField />
      </div>
      <div style={{marginTop: '20px'}}>
        <FormTextField />
      </div>
      <div style={{marginTop: '20px'}}>
        <FormTextField />
      </div>
      <div style={{marginTop: '20px'}}>
       <FormTextField />
      </div>
      <div style={{marginTop: '20px'}}>
        <FormSelect />
      </div>
      <div style={{marginTop: '20px'}}>
        <FormSelect />
      </div>

      <div style={{marginTop: '5px'}}>
        I accept the Privacy Policy
      </div>
      <div style={{marginTop: '30px'}}>
        Sign up button
      </div> */}

    </form>
  )
}

export default RegisterForm
