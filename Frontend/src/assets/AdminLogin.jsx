// import React, { useState } from "react";
// import { use } from "react";
// import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// function AdminLogin({ onLogin }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
// const navigate = useNavigate();
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (email === "admin@123" && password === "123") {
//       alert("Login Successful");
     
//       onLogin();
//       navigate('/nav')
      
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center  px-4">
//       <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
//         {/* User Icon */}
//         <div className="flex justify-center mb-4">
//           <FaUserCircle className="text-[#1F4529] text-5xl" />
//         </div>

//         <h2 className="text-2xl font-semibold text-center text-white mb-6">
//           Admin Login
//         </h2>

//         <form onSubmit={handleSubmit} className="flex flex-col gap-5 justify-center items-center">
//           {/* Email Input */}
//           <div className="flex items-center  border border-gray-300 rounded px-3 py-2 bg-gray-50 focus-within:border-[#1F4529] w-3/4">
//             <FaEnvelope className="text-[#1F4529] w-5 text-lg" />
//             <input
//               type="text"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your username"
//               className="w-full outline-none text-center bg-transparent pl-2"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50 focus-within:border-[#1F4529] w-3/4">
//             <FaLock className="text-[#1F4529] w-5 text-lg" />
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full outline-none text-center bg-transparent pl-2"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="bg-[#1F4529] text-white py-2 rounded-lg font-medium  transition duration-200 w-20"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;




import React, { useState } from "react";
import { FaUserCircle, FaEnvelope, FaLock } from "react-icons/fa";

function AdminLogin({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "admin@123" && password === "123") {
      alert("Login Successful");
      onLoginSuccess();   // ✅ only call parent, no navigate here
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center px-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-4">
          <FaUserCircle className="text-[#1F4529] text-5xl" />
        </div>

        <h2 className="text-2xl font-semibold text-center text-white mb-6">
          Admin Login
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 justify-center items-center"
        >
          {/* Email Input */}
          <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50 focus-within:border-[#1F4529] w-3/4">
            <FaEnvelope className="text-[#1F4529] w-5 text-lg" />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              className="w-full outline-none text-center bg-transparent pl-2"
              required
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center border border-gray-300 rounded px-3 py-2 bg-gray-50 focus-within:border-[#1F4529] w-3/4">
            <FaLock className="text-[#1F4529] w-5 text-lg" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full outline-none text-center bg-transparent pl-2"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="bg-[#1F4529] text-white py-2 rounded-lg font-medium transition duration-200 w-20"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
