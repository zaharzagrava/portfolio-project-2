import React from 'react'

import AdminHeader from "../AdminHeader/AdminHeader";
import AdminFooter from "../AdminFooter/AdminFooter";
import Profile from "../Profile/Profile";

function Admin() {

  return (
    <div>
      <AdminHeader />
      <Profile />
      <AdminFooter />
      {/* <AdminFooter /> */}
    </div>
  )

}

export default Admin
