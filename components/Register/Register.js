import React from 'react'
import { Grid } from '@material-ui/core'

import styles from './Register.module.scss'
import RegisterForm from '../RegisterForm/RegisterForm'

function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.register_image}>
      
      </div>
      <div className={styles.register_form}>
          <RegisterForm />
      </div>
    </div>
    
  )
}

export default Register
