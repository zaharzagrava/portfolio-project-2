import React from 'react';
import { useFormik } from 'formik';

import styles from './YoutubeForm.module.scss'

function YoutubeForm() {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    }
  });

  return (
    <>
      <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' />

        <label htmlFor='email'>E-mail</label>
        <input type='email' id='email' name='email' />

        <label htmlFor='channel'>Channel</label>
        <input type='text' id='channel' name='channel' />

        <button>Submit</button>
      </form>
    </>
  )
}

export default YoutubeForm;