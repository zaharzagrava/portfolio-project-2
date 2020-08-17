// import React from 'react'

// import { useSelector } from 'react-redux'

// function Profile({ userId }) {
//   const userFullName = useSelector(state => state.user.byIds[userId].fullName)
//   const userJobTitle = useSelector(state => state.user.byIds[userId].jobTitle)

//   return (
//     <div>
//       <h1>{userFullName}</h1>
//       <h1>{userJobTitle}</h1>
//     </div>
//   )
// }

// export default Profile

import React, { useState, useEffect } from 'react';

function Profile() {
  console.log("--- Profile is called ---")
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    console.log("useEffect")
    document.title = `You clicked ${count} times`;
  });

  console.log("--- Profile is about to return a value ---")
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { console.log("setCount"); setCount(count + 1); }}>
        Click me
      </button>
    </div>
  );
}

export default Profile
