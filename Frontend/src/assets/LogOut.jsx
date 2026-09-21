// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const LogOut = ({ setIsAuthenticated, }) => {
//   const navigate = useNavigate();
//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     localStorage.removeItem("isAuthenticated");
//     navigate('/');
//   };

//   return (
//     <div className='relative '>
//       <button className='text-white bg-red-700 p-2 rounded-md hover:bg-red-800 absolute top-6 lg:right-3 right-0' onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default LogOut;
// import React from 'react';
// import { useNavigate } from "react-router-dom";

// const LogOut = ({ onLogout }) => {
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     if (typeof onLogout === "function") {
//       onLogout(); // calls the centralized handler in App
//     }
//     navigate('/'); // send user back to login
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={handleLogout}
//         className="text-white bg-red-700 p-2 rounded-md hover:bg-red-800 absolute top-6 lg:right-3 right-0"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default LogOut;


// LogOut.jsx
import React from 'react'
import { useNavigate } from "react-router-dom"

const LogOut = ({ onLogout }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    if (typeof onLogout === "function") {
      onLogout()
    }
    navigate('/')
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-800 transition duration-200 ml-2"
    >
      Logout
    </button>
  )
}

export default LogOut
