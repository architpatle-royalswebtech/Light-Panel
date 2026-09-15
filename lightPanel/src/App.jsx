// import React, { useState, useEffect } from 'react';
// import LightPanel from './assets/LightPanel';
// import LightPanel2 from './assets/LightPanel2';
// import LightPanel3 from './assets/LightPanel3';
// import Nav from './assets/nav';

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import "./assets/Wall1"
// import Layout from './assets/Layout';

// const App = () => {


//   return (
//     <Router>

//       <Routes>
//         <Route path="/" element={<Layout />} >
//           <Route path="/hybec1" element={<LightPanel2 pic='/Hybec1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" />} />
//           <Route path="/wall1" element={<LightPanel pic='/Wall1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/data1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" />} />
//           <Route index element={<LightPanel pic="/LightPanel.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" />} />
//           <Route path="/wall3" element={<LightPanel pic="/Wall3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" />} />
//           <Route path="/wall4" element={<LightPanel pic="/Wall4.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data4" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" />} />
//          <Route path="/gatelight" element={<LightPanel3 pic="/Gatelights.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" GardenSpikeData="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" />} />
//           {/* <Route path="/wall4" element={<LightPanel pic="/Wall4.jpg"  LightData="https://lightpanelbackend-3bkt.onrender.com/api/data"/>} />  
//         <Route path="/wall5" element={<LightPanel pic="/Wall5.jpg"  LightData="https://lightpanelbackend-3bkt.onrender.com/api/data"/>} /> */}

//           <Route
//             path="/nav2"
//             element={
//               <>
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update" title="Wall Lamps & FootLamp" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb" title="Nirvana Bollards" />
//               </>
//             }
//           />
//           <Route
//             path="/nav"
//             element={
//               <>
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update1" title="Wall Lamps & FootLamp" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb1" title="K Lite Bollards" />
//               </>
//             }
//           />
//           <Route
//             path="/nav3"
//             element={
//               <>
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update3" title="Wall / Lamp Flood Light & FootLamp" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb3" title="Nirvana Bollards (Floor)" />
//               </>
//             }
//           />
//           <Route
//             path="/nav4"
//             element={
//               <>
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update4" title="Wall / Lamp Flood Light & FootLamp" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb4" title="Nirvana Bollards (Floor)" />
//               </>
//             }
//           />

//           <Route
//             path="/navHybec1"
//             element={
//               <>
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdH1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateH1" title="Hybec 1" />
//               </>
//             }
//           />

// <Route
//             path="/Gatelightnav"
//             element={
//               <>
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdGl/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateGl" title="GateLight" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdFl/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl" title="FootLamp/ Wall Light" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdCl/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateCl" title="Ceiling Light" />
//                 <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdGs/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateGs" title="Garden Spike" />

//               </>
//             }
//           />
//         </Route>

//       </Routes>

//     </Router>


//   );
// };

// export default App;
// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import LightPanel from './assets/LightPanel';
// import LightPanel2 from './assets/LightPanel2';
// import LightPanel3 from './assets/LightPanel3';
// import LightPanel4 from './assets/LightPanel4';
// import Nav from './assets/nav';
// import Layout from './assets/Layout';
// import AdminLogin from './assets/AdminLogin';
// import LogOut from './assets/LogOut';
// import CartsPage from "./assets/CartsPage"; 
// import LightPanelWithCart from "./assets/LightPanelWithCart";


// // API base URL
// const API_BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:8080/api"
//     : "https://lightpanelbackend-3bkt.onrender.com/api";

// const App = () => {
//   const [authStage, setAuthStage] = useState("initial"); // initial, otp, authenticated
// const [isAuthenticated, setIsAuthenticated] = useState(() => {
//   const storedAuth = localStorage.getItem("isAuthenticated") === "true";
//   const expiry = localStorage.getItem("authExpiry");

//   if (storedAuth && expiry && Date.now() < parseInt(expiry, 10)) {
//     return true; // still valid
//   } else {
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("authExpiry");
//     return false; // expired
//   }
// });

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [countdown, setCountdown] = useState(0);

//   useEffect(() => {
//     localStorage.setItem("isAuthenticated", isAuthenticated);
//   }, [isAuthenticated]);
//     // Countdown timer for OTP
// useEffect(() => {
//   let timer;
//   if (countdown > 0) {
//     timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//   }
//   return () => clearTimeout(timer);
// }, [countdown]);

// // 🔥 Auto logout when expiry is reached
// useEffect(() => {
//   if (isAuthenticated) {
//     const expiry = localStorage.getItem("authExpiry");
//     if (expiry) {
//       const timeLeft = parseInt(expiry, 10) - Date.now();
//       if (timeLeft > 0) {
//         const timer = setTimeout(() => {
//           handleLogout(); // logout automatically
//         }, timeLeft);
//         return () => clearTimeout(timer);
//       } else {
//         handleLogout();
//       }
//     }
//   }
// }, [isAuthenticated]);
//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown]);

//   // Handle initial login - send OTP request
//   const handleInitialLogin = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setCountdown(120); // 2 minutes
//         setAuthStage("otp");
//       } else {
//         setError(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle OTP verification
//   const handleOTPVerification = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, otp }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);
//         setAuthStage("authenticated");
//         // 🔥 Save 1 day expiry in localStorage
//   const expiryTime = Date.now() + 24 * 60 * 60 * 1000; // 1 day = 24h
//   localStorage.setItem("authExpiry", expiryTime.toString());
//       } else {
//         setError(data.message || "Invalid OTP");
//       }
//     } catch (error) {
//       console.error("OTP verification error:", error);
//       setError("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     if (countdown === 0) {
//       await handleInitialLogin();
//     }
//   };
//   const handleLogout = () => {
//   setIsAuthenticated(false);
//   setAuthStage("initial");
//   localStorage.removeItem("isAuthenticated");
//   localStorage.removeItem("authExpiry");
// };


//   // -------------------------
//   // RENDER VIEWS
//   // -------------------------
//   if (!isAuthenticated) {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
//           <h1 className="text-3xl font-bold text-white mb-2">LightPanel</h1>
//           <p className="text-blue-100 text-sm">Premium Lighting Solutions</p>
//         </div>
        
//         <div className="p-8">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Account Login</h2>

//           {authStage === "initial" && (
//             <>
//               <div className="mb-5">
//                 <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
//                   Username
//                 </label>
//                 <input
//                   id="username"
//                   type="text"
//                   placeholder="Enter your username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 />
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
//                   Password
//                 </label>
//                 <input
//                   id="password"
//                   type="password"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                 />
//               </div>
              
//               <button
//                 onClick={handleInitialLogin}
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none"
//               >
//                 {isLoading ? (
//                   <span className="flex items-center justify-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending OTP...
//                   </span>
//                 ) : "Login"}
//               </button>
//             </>
//           )}

//           {authStage === "otp" && (
//             <>
//               <div className="mb-1 text-center">
//                 <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <p className="text-gray-600 mb-2">Enter the verification code sent to your email/phone</p>
//               </div>
              
//               <div className="mb-6">
//                 <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
//                   Verification Code
//                 </label>
//                 <input
//                   id="otp"
//                   type="text"
//                   placeholder="Enter 6-digit code"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center text-xl tracking-widest"
//                   maxLength="6"
//                 />
//               </div>
              
//               <button
//                 onClick={handleOTPVerification}
//                 disabled={isLoading}
//                 className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none mb-4"
//               >
//                 {isLoading ? (
//                   <span className="flex items-center justify-center">
//                     <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Verifying...
//                   </span>
//                 ) : "Verify Code"}
//               </button>

//               <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
//                 <button
//                   onClick={handleResendOTP}
//                   disabled={countdown > 0}
//                   className={`text-sm font-medium ${countdown > 0 ? 'text-gray-400' : 'text-blue-600 hover:text-blue-800'} transition duration-200 flex items-center`}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                   </svg>
//                   Resend Code
//                 </button>
//                 <span className="text-sm font-medium text-gray-500">
//                   {countdown > 0 ? `Wait ${countdown}s` : ""}
//                 </span>
//               </div>
//             </>
//           )}

//           {error && (
//             <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                 <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//               </svg>
//               <p className="text-red-600 text-sm">{error}</p>
//             </div>
//           )}
//         </div>
        
//         <div className="bg-gray-50 py-4 px-6 text-center border-t border-gray-100">
//           <p className="text-xs text-gray-500">© {new Date().getFullYear()} LightPanel & Bollards. All rights reserved.</p>
//         </div>
//       </div>
//     </div>
//   );
// }
//   return (<>
//     {!isAuthenticated ?
//       (<>

//         <Router>

//           <>

//             <Routes>

//               <Route path="/" element={<Layout />}>
//                 <Route path="/login" element={<AdminLogin onLogin={() => setIsAuthenticated(true)} />
//                 } />
//                 <Route path="/hanging1" element={<LightPanelWithCart pic='/Hanging1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging1" />} />

//                  <Route path="/Astberg" element={<LightPanelWithCart pic='/Astberg.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataAstberg" />} />


            
//                 <Route path="/hanging2" element={<LightPanelWithCart pic='/Hanging2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging2" />} />

//                 <Route path="/hybec1" element={<LightPanelWithCart pic='/Hybec1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" />} />
//                 <Route path="/hybec2" element={<LightPanelWithCart pic='/Hybec2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH2" />} />

//                 <Route path="/nirvana1" element={<LightPanelWithCart pic='/Nirvana1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana1" />} />
//                 <Route path="/nirvana2" element={<LightPanelWithCart pic='/Nirvana2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana2" />} />

//                 <Route path="/philips" element={<LightPanelWithCart pic='/Philips.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataPhilips" />} />

//                 <Route path="/SC1" element={<LightPanelWithCart pic='/SurfaceCOB.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" />} />

//                 <Route path="/exhaustfan1" element={<LightPanelWithCart pic='/ExhaustFans.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataExhaustFan2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan3" />} />


//                 <Route path="/wall1" element={<LightPanelWithCart wallName="Wall1" pic='/Wall1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/data1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1"  />} />
//                 <Route index element={<LightPanel3 pic="/LightPanel.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" />} />
//                 <Route path="/wall3" element={<LightPanelWithCart wallName="Wall3" pic="/Wall3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata3"  />} />
//                 <Route path="/wall4" element={<LightPanelWithCart wallName="Wall4" pic="/Wall4.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data4" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata4" />} />  

//                 <Route path="/wall5" element={<LightPanelWithCart wallName="Wall5" pic="/Wall5.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data5" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata5" />} />
                
//                 <Route path="/carts" element={<CartsPage />} />  {/* ✅ Newly added */}
              
//                 <Route path="/Fan1" element={<LightPanelWithCart pic="/Fan1.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1T" />} />
//                 <Route path="/Fan2" element={<LightPanelWithCart pic="/Fan2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2T" />} />
//                 <Route path="/Geyser2" element={<LightPanelWithCart pic="/Geysers2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataG2Filter" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2Fan" />} />

//                 <Route path="/Fan3" element={<LightPanelWithCart pic="/Fan3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl3" />} />

//                 <Route path="/gatelight" element={<LightPanelWithCart pic="/Gatelights.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" GardenSpikeData="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" />} />

//                 {/* tables */}

//               </Route>



//             </Routes>
//           </>

//         </Router>
//       </>

//       ) : (<>

//         <Router>
//           <LogOut setIsAuthenticated={setIsAuthenticated} />

//           <Routes>

//             <Route path="/" element={<Layout />}>

//               <Route
//                 path="/navSC1"
//                 element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdSC1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateSC1" title="SurfaceCOB 1" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdSC2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateSC2" title="SurfaceCOB 2" />
              //     </>
              //   }
              // />

              // <Route
              //   path="/nav2"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update" title="Wall Lamps" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb" title="Nirvana Bollards" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp2" title="FootLamp" />

              //     </>
              //   }
              // />

              // <Route
              //   path="/nav"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update1" title="Wall Lamps" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb1" title="K Lite Bollards" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp1" title="FootLamp" />

              //     </>
              //   }
              // />

              // <Route
              //   path="/nav3"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update3" title="Wall / Lamp Flood Light & FootLamp" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb3" title="Nirvana Bollards (Floor)" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp3" title="FootLamp" />

              //     </>
              //   }
              // />

              // <Route
              //   path="/nav4"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update4" title="Wall / Lamp Flood Light & FootLamp" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb4" title="Bollards (Floor)" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp4" title="FootLamp" />

              //     </>
              //   }
              // />

              // <Route
              //   path="/nav5"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data5" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId5/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update5" title="Wall / Lamp Flood Light & FootLamp" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata5" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId5/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb5" title="Nirvana Bollards (Floor)" />
              //     </>
              //   }
              // />


              // <Route
              //   path="/navFan3"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF3" title="Fan3 " />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdFl3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl3" title="Light" />
              //     </>
              //   }
              // />


              // <Route path="/navHybec1" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdH1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateH1" title="Hybec 1" />} />
              // <Route path="/navHybec2" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataH2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdH2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateH2" title="Hybec 2" />} />

              // <Route path="/navNirvana1" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdNirvana1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateNirvana1" title="Nirvana 1" />} />
              // <Route path="/navNirvana2" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdNirvana2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateNirvana2" title="Nirvana 2" />} />

              // <Route path="/navPhilips" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataPhilips" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdPhilips/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updatePhilips" title="Philips" />} />

              // <Route path="/Gatelightnav" element={
              //   <>
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdGl/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateGl" title="GateLight" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdFl/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl" title="FootLamp/ Wall Light" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdCl/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateCl" title="Ceiling Light" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdGs/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateGs" title="Garden Spike" />
              //   </>

              // } />
              // <Route path="/navFan1" element={
              //   <>
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF1" title="Fan1" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getbIdFl1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl1" title="Light" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF1T" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF1T/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF1T" title="Fan1 light 2" />
              //   </>
              // } />

              // <Route path="/navGeysers1" element={
              //   <>
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataG2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdG2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateG2" title="Geyser" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataG2Filter" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getbIdG2Filter/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateG2Filter" title="Filter" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataG2Fan" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdG2Fan/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateG2Fan" title="Fan" />
              //   </>
              // } />
              // <Route path="/navFan2" element={
              //   <>
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF2" title="Fan2" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getbIdFl2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl2" title="Light" />
              //     <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF2T" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF2T/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF2T" title="Fan2 light 2" />
              //   </>
              // } />
              // <Route path="/navHanging1" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdHanging1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateHanging1" title="Hanging 1" />} />

              // <Route path="/navAstberg"element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataAstberg"searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdAstberg/"UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateAstberg"title="Astberg"/>}/>


              // <Route path="/navHanging2" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdHanging2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateHanging2" title="Hanging 2" />} />
              // <Route
              //   path="/navExhaustFan1"
              //   element={
              //     <>
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdExhaustFan1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateExhaustFan1" title="Exhaust Fan 1" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataExhaustFan2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdExhaustFan2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateExhaustFan2" title="Exhaust Fan 1" />
              //       <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdExhaustFan3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateExhaustFan3" title="Wallfan" />

              //     </>
              //   }
              // />
//             </Route>
//           </Routes>
//         </Router>
//       </>)}
//   </>
//   );
// };

// export default App;



// second workiing no app login 

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LightPanel from './assets/LightPanel';
// import LightPanel2 from './assets/LightPanel2';
// import LightPanel3 from './assets/LightPanel3';
// import LightPanel4 from './assets/LightPanel4';
// import Nav from './assets/nav';
// import Layout from './assets/Layout';
// import LogOut from './assets/LogOut';
// import CartsPage from "./assets/CartsPage"; 
// import LightPanelWithCart from "./assets/LightPanelWithCart";

// // API base URL
// const API_BASE_URL =
//   import.meta.env.MODE === "development"
//     ? "http://localhost:8080/api"
//     : "https://lightpanelbackend-3bkt.onrender.com/api";

// const App = () => {
//   const [authStage, setAuthStage] = useState("initial"); // initial, otp, authenticated
//   const [isAuthenticated, setIsAuthenticated] = useState(() => {
//     const storedAuth = localStorage.getItem("isAuthenticated") === "true";
//     const expiry = localStorage.getItem("authExpiry");

//     if (storedAuth && expiry && Date.now() < parseInt(expiry, 10)) {
//       return true; // still valid
//     } else {
//       localStorage.removeItem("isAuthenticated");
//       localStorage.removeItem("authExpiry");
//       return false; // expired
//     }
//   });

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [countdown, setCountdown] = useState(0);

//   useEffect(() => {
//     localStorage.setItem("isAuthenticated", isAuthenticated);
//   }, [isAuthenticated]);

//   // Countdown timer for OTP
//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown]);

//   // Auto logout when expiry is reached
//   useEffect(() => {
//     if (isAuthenticated) {
//       const expiry = localStorage.getItem("authExpiry");
//       if (expiry) {
//         const timeLeft = parseInt(expiry, 10) - Date.now();
//         if (timeLeft > 0) {
//           const timer = setTimeout(() => {
//             handleLogout(); // logout automatically
//           }, timeLeft);
//           return () => clearTimeout(timer);
//         } else {
//           handleLogout();
//         }
//       }
//     }
//   }, [isAuthenticated]);

//   // Handle initial login - send OTP request
//   const handleInitialLogin = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/send-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setCountdown(120); // 2 minutes
//         setAuthStage("otp");
//       } else {
//         setError(data.message || "Invalid credentials");
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setError("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Handle OTP verification
//   const handleOTPVerification = async () => {
//     setIsLoading(true);
//     setError("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, otp }),
//       });

//       const data = await response.json();

//       if (response.ok && data.success) {
//         setIsAuthenticated(true);
//         setAuthStage("authenticated");
//         // Save 1 day expiry in localStorage
//         const expiryTime = Date.now() + 24 * 60 * 60 * 1000; // 1 day = 24h
//         localStorage.setItem("authExpiry", expiryTime.toString());
//       } else {
//         setError(data.message || "Invalid OTP");
//       }
//     } catch (error) {
//       console.error("OTP verification error:", error);
//       setError("Network error. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendOTP = async () => {
//     if (countdown === 0) {
//       await handleInitialLogin();
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setAuthStage("initial");
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("authExpiry");
//   };

//   // Render login form if not authenticated
//   if (!isAuthenticated) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
//           <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
//             <h1 className="text-3xl font-bold text-white mb-2">LightPanel</h1>
//             <p className="text-blue-100 text-sm">Premium Lighting Solutions</p>
//           </div>
          
//           <div className="p-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Account Login</h2>

//             {authStage === "initial" && (
//               <>
//                 <div className="mb-5">
//                   <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
//                     Username
//                   </label>
//                   <input
//                     id="username"
//                     type="text"
//                     placeholder="Enter your username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   />
//                 </div>
                
//                 <div className="mb-6">
//                   <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
//                     Password
//                   </label>
//                   <input
//                     id="password"
//                     type="password"
//                     placeholder="Enter your password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
//                   />
//                 </div>
                
//                 <button
//                   onClick={handleInitialLogin}
//                   disabled={isLoading}
//                   className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none"
//                 >
//                   {isLoading ? (
//                     <span className="flex items-center justify-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Sending OTP...
//                     </span>
//                   ) : "Login"}
//                 </button>
//               </>
//             )}

//             {authStage === "otp" && (
//               <>
//                 <div className="mb-1 text-center">
//                   <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                     </svg>
//                   </div>
//                   <p className="text-gray-600 mb-2">Enter the verification code sent to your email/phone</p>
//                 </div>
                
//                 <div className="mb-6">
//                   <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
//                     Verification Code
//                   </label>
//                   <input
//                     id="otp"
//                     type="text"
//                     placeholder="Enter 6-digit code"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                     className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center text-xl tracking-widest"
//                     maxLength="6"
//                   />
//                 </div>
                
//                 <button
//                   onClick={handleOTPVerification}
//                   disabled={isLoading}
//                   className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none mb-4"
//                 >
//                   {isLoading ? (
//                     <span className="flex items-center justify-center">
//                       <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Verifying...
//                     </span>
//                   ) : "Verify Code"}
//                 </button>

//                 <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
//                   <button
//                     onClick={handleResendOTP}
//                     disabled={countdown > 0}
//                     className={`text-sm font-medium ${countdown > 0 ? 'text-gray-400' : 'text-blue-600 hover:text-blue-800'} transition duration-200 flex items-center`}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                     </svg>
//                     Resend Code
//                   </button>
//                   <span className="text-sm font-medium text-gray-500">
//                     {countdown > 0 ? `Wait ${countdown}s` : ""}
//                   </span>
//                 </div>
//               </>
//             )}

//             {error && (
//               <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
//                 </svg>
//                 <p className="text-red-600 text-sm">{error}</p>
//               </div>
//             )}
//           </div>
          
//           <div className="bg-gray-50 py-4 px-6 text-center border-t border-gray-100">
//             <p className="text-xs text-gray-500">© {new Date().getFullYear()} LightPanel & Bollards. All rights reserved.</p>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // Render the main app if authenticated
//   return (
//     <Router>
//       <LogOut setIsAuthenticated={setIsAuthenticated} />
      
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           {/* Product pages */}
//           <Route path="/hanging1" element={<LightPanelWithCart pic='/Hanging1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging1" />} />
//           <Route path="/Astberg" element={<LightPanelWithCart pic='/Astberg.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataAstberg" />} />
//           <Route path="/hanging2" element={<LightPanelWithCart pic='/Hanging2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging2" />} />
//           <Route path="/hybec1" element={<LightPanelWithCart pic='/Hybec1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" />} />
//           <Route path="/hybec2" element={<LightPanelWithCart pic='/Hybec2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH2" />} />
//           <Route path="/nirvana1" element={<LightPanelWithCart pic='/Nirvana1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana1" />} />
//           <Route path="/nirvana2" element={<LightPanelWithCart pic='/Nirvana2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana2" />} />
//           <Route path="/philips" element={<LightPanelWithCart pic='/Philips.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataPhilips" />} />
//           <Route path="/SC1" element={<LightPanelWithCart pic='/SurfaceCOB.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" />} />
//           <Route path="/exhaustfan1" element={<LightPanelWithCart pic='/ExhaustFans.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataExhaustFan2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan3" />} />
//           <Route path="/wall1" element={<LightPanelWithCart wallName="Wall1" pic='/Wall1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/data1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1"  />} />
//           <Route index element={<LightPanel3 pic="/LightPanel.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" />} />
//           <Route path="/wall3" element={<LightPanelWithCart wallName="Wall3" pic="/Wall3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata3"  />} />
//           <Route path="/wall4" element={<LightPanelWithCart wallName="Wall4" pic="/Wall4.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data4" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata4" />} />  
//           <Route path="/wall5" element={<LightPanelWithCart wallName="Wall5" pic="/Wall5.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data5" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata5" />} />
//           <Route path="/carts" element={<CartsPage />} />
//           <Route path="/Fan1" element={<LightPanelWithCart pic="/Fan1.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1T" />} />
//           <Route path="/Fan2" element={<LightPanelWithCart pic="/Fan2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2T" />} />
//           <Route path="/Geyser2" element={<LightPanelWithCart pic="/Geysers2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataG2Filter" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2Fan" />} />
//           <Route path="/Fan3" element={<LightPanelWithCart pic="/Fan3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl3" />} />
//           <Route path="/gatelight" element={<LightPanelWithCart pic="/Gatelights.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" GardenSpikeData="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" />} />

//           {/* Admin management routes */}
//           <Route path="/navSC1" element={
//             <>
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdSC1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateSC1" title="SurfaceCOB 1" />
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdSC2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateSC2" title="SurfaceCOB 2" />
//             </>
//           } />
//           <Route path="/nav2" element={
//             <>
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update" title="Wall Lamps" />
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb" title="Nirvana Bollards" />
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp2" title="FootLamp" />
//             </>
//           } />
//           <Route path="/nav" element={
//             <>
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update1" title="Wall Lamps" />
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb1" title="K Lite Bollards" />
//               <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp1" title="FootLamp" />
//             </>
//           } />
//           {/* ... include all your other admin routes here ... */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// export default App;


import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";

import LightPanel from "./assets/LightPanel";
import LightPanel2 from "./assets/LightPanel2";
import LightPanel3 from "./assets/LightPanel3";
import LightPanel4 from "./assets/LightPanel4";
import Nav from "./assets/nav";
import Layout from "./assets/Layout";
import LogOut from "./assets/LogOut";
import CartsPage from "./assets/CartsPage";
import LightPanelWithCart from "./assets/LightPanelWithCart";
import AdminLogin from "./assets/AdminLogin";

// API base URL
const API_BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080/api"
    : "https://light-panel-muvs.onrender.com/api";
    

const App = () => {
  const [authStage, setAuthStage] = useState("initial"); // initial | otp | authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated") === "true";
    const expiry = localStorage.getItem("authExpiry");
    if (storedAuth && expiry && Date.now() < parseInt(expiry, 10)) {
      return true;
    } else {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("authExpiry");
      return false;
    }
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [countdown, setCountdown] = useState(0);

  // persist isAuthenticated (store only when true; remove when false)
  useEffect(() => {
    if (isAuthenticated) {
      localStorage.setItem("isAuthenticated", "true");
    } else {
      localStorage.removeItem("isAuthenticated");
    }
  }, [isAuthenticated]);

  // countdown timer for OTP resend UI
  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  // central logout function used by LogOut component and auto-logout
const handleLogout = (redirectTo = "/") => {
  setIsAuthenticated(false);
  setAuthStage("initial");
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("authExpiry");
  navigate(redirectTo); // dynamic redirect
};

  // auto logout when expiry reached
  useEffect(() => {
    if (!isAuthenticated) return;
    const expiry = localStorage.getItem("authExpiry");
    if (!expiry) return;
    const timeLeft = parseInt(expiry, 10) - Date.now();
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        handleLogout();
      }, timeLeft);
      return () => clearTimeout(timer);
    } else {
      handleLogout();
    }
  }, [isAuthenticated, handleLogout]);

  // ADMIN login wrapper that both sets auth state and navigates to /nav
  // NOTE: defined inside App so we can call setIsAuthenticated
 const AdminLoginWrapper = () => {
  const navigate = useNavigate();

    const onAdminSuccess = () => {
      // Mark authenticated, set expiry (24h), and navigate
      setIsAuthenticated(true);
      setAuthStage("authenticated");
      const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("authExpiry", expiryTime.toString());
      localStorage.setItem("isAuthenticated", "true");
      navigate("/nav");
    };

    return <AdminLogin onLoginSuccess={onAdminSuccess} />;
  };

  // --- OTP flow handlers ---

  const handleInitialLogin = async () => {
    setIsLoading(true);
    setError("");

    if (!username || !password) {
      setError("Please provide username and password.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setCountdown(120);
        setAuthStage("otp");
        setError("");
      } else {
        setError(data.message || "Invalid credentials or server rejected request.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerification = async () => {
    setIsLoading(true);
    setError("");

    if (otp.trim().length < 4) {
      setError("Enter a valid OTP.");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`${API_BASE_URL}/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, otp }),
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setIsAuthenticated(true);
        setAuthStage("authenticated");
        const expiryTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("authExpiry", expiryTime.toString());
        localStorage.setItem("isAuthenticated", "true");
        setError("");
        // after setting isAuthenticated, the component re-renders to the main app
      } else {
        setError(data.message || "Invalid OTP");
      }
    } catch (err) {
      console.error("OTP verification error:", err);
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (countdown === 0) {
      await handleInitialLogin();
    }
  };

  // --- Login UI (kept local) ---
  const renderLoginUI = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-center">
          <h1 className="text-3xl font-bold text-white mb-2">LightPanel</h1>
          <p className="text-blue-100 text-sm">Premium Lighting Solutions</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Account Login</h2>

          {authStage === "initial" && (
            <>
              <div className="mb-5">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                />
              </div>

              <button
                onClick={handleInitialLogin}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none"
              >
                {isLoading ? "Sending OTP..." : "Login"}
              </button>
            </>
          )}

          {authStage === "otp" && (
            <>
              <div className="mb-1 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <p className="text-gray-600 mb-2">Enter the verification code sent to your email/phone</p>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="otp">
                  Verification Code
                </label>
                <input
                  id="otp"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 text-center text-xl tracking-widest"
                  maxLength="6"
                />
              </div>

              <button
                onClick={handleOTPVerification}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-300 ease-in-out transform hover:-translate-y-0.5 disabled:opacity-50 disabled:transform-none mb-4"
              >
                {isLoading ? "Verifying..." : "Verify Code"}
              </button>

              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
                <button
                  onClick={handleResendOTP}
                  disabled={countdown > 0}
                  className={`text-sm font-medium ${countdown > 0 ? "text-gray-400" : "text-blue-600 hover:text-blue-800"} transition duration-200 flex items-center`}
                >
                  Resend Code
                </button>
                <span className="text-sm font-medium text-gray-500">{countdown > 0 ? `Wait ${countdown}s` : ""}</span>
              </div>
            </>
          )}

          {error && (
            <div className="mt-6 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}
        </div>

        <div className="bg-gray-50 py-4 px-6 text-center border-t border-gray-100">
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} LightPanel & Bollards. All rights reserved.</p>
        </div>
      </div>
    </div>
  );

  // If not authenticated, show login routes / UI
  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          {/* Admin login remains available at /add */}
          <Route path="/add" element={<AdminLoginWrapper />} />
          {/* Default route shows the OTP login UI */}
          <Route path="*" element={renderLoginUI()} />
        </Routes>
      </Router>
    );
  }

  // Render the main app if authenticated
  return (
   <Router>
      {/* Pass the centralized logout handler to the LogOut component */}
      <LogOut onLogout={handleLogout} />

      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Product pages */}

          {/* Product pages */}
          <Route path="/hanging1" element={<LightPanelWithCart pic='/Hanging1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging1" />} />
          <Route path="/Astberg" element={<LightPanelWithCart pic='/Astberg.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataAstberg" />} />
          <Route path="/hanging2" element={<LightPanelWithCart pic='/Hanging2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging2" />} />
          <Route path="/hybec1" element={<LightPanelWithCart pic='/Hybec1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" />} />
          <Route path="/hybec2" element={<LightPanelWithCart pic='/Hybec2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH2" />} />
          <Route path="/nirvana1" element={<LightPanelWithCart pic='/Nirvana1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana1" />} />
          <Route path="/nirvana2" element={<LightPanelWithCart pic='/Nirvana2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana2" />} />
          <Route path="/philips" element={<LightPanelWithCart pic='/Philips.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataPhilips" />} />
          <Route path="/SC1" element={<LightPanelWithCart pic='/SurfaceCOB.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" />} />
          <Route path="/exhaustfan1" element={<LightPanelWithCart pic='/ExhaustFans.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataExhaustFan2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan3" />} />
          <Route path="/wall1" element={<LightPanelWithCart wallName="Wall1" pic='/Wall1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/data1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1"  />} />
          <Route index element={<LightPanel3 pic="/LightPanel.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" />} />
          <Route path="/wall3" element={<LightPanelWithCart wallName="Wall3" pic="/Wall3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata3"  />} />
          <Route path="/wall4" element={<LightPanelWithCart wallName="Wall4" pic="/Wall4.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data4" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata4" />} />  
          <Route path="/wall5" element={<LightPanelWithCart wallName="Wall5" pic="/Wall5.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data5" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata5" />} />
          <Route path="/carts" element={<CartsPage />} />
          <Route path="/Fan1" element={<LightPanelWithCart pic="/Fan1.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1T" />} />
          <Route path="/Fan2" element={<LightPanelWithCart pic="/Fan2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2T" />} />
          <Route path="/Geyser2" element={<LightPanelWithCart pic="/Geysers2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataG2Filter" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2Fan" />} />
          <Route path="/Fan3" element={<LightPanelWithCart pic="/Fan3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl3" />} />
          <Route path="/gatelight" element={<LightPanelWithCart pic="/Gatelights.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" GardenSpikeData="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" />} />

<Route path="/add" element={<AdminLoginWrapper />} />

          {/* Admin management routes */}
          <Route path="/navSC1" element={
            
           <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdSC1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateSC1" title="SurfaceCOB 1" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdSC2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateSC2" title="SurfaceCOB 2" />
                  </>
                }
              />

              <Route
                path="/nav2"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update" title="Wall Lamps" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb" title="Nirvana Bollards" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp2" title="FootLamp" />

                  </>
                }
              />

              <Route
                path="/nav"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update1" title="Wall Lamps" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb1" title="K Lite Bollards" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp1" title="FootLamp" />

                  </>
                }
              />

              <Route
                path="/nav3"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update3" title="Wall / Lamp Flood Light & FootLamp" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb3" title="Nirvana Bollards (Floor)" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp3" title="FootLamp" />

                  </>
                }
              />

              <Route
                path="/nav4"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update4" title="Wall / Lamp Flood Light & FootLamp" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb4" title="Bollards (Floor)" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata4" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getFootlampId4/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFootlamp4" title="FootLamp" />

                  </>
                }
              />

              <Route
                path="/nav5"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/data5" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightId5/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/update5" title="Wall / Lamp Flood Light & FootLamp" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata5" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbId5/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateb5" title="Nirvana Bollards (Floor)" />
                  </>
                }
              />


              <Route
                path="/navFan3"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF3" title="Fan3 " />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdFl3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl3" title="Light" />
                  </>
                }
              />


              <Route path="/navHybec1" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdH1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateH1" title="Hybec 1" />} />
              <Route path="/navHybec2" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataH2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdH2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateH2" title="Hybec 2" />} />

              <Route path="/navNirvana1" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdNirvana1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateNirvana1" title="Nirvana 1" />} />
              <Route path="/navNirvana2" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdNirvana2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateNirvana2" title="Nirvana 2" />} />

              <Route path="/navPhilips" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataPhilips" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdPhilips/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updatePhilips" title="Philips" />} />

              <Route path="/Gatelightnav" element={
                <>
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdGl/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateGl" title="GateLight" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdFl/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl" title="FootLamp/ Wall Light" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdCl/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateCl" title="Ceiling Light" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdGs/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateGs" title="Garden Spike" />
                </>

              } />
              <Route path="/navFan1" element={
                <>
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF1" title="Fan1" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getbIdFl1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl1" title="Light" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF1T" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF1T/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF1T" title="Fan1 light 2" />
                </>
              } />

              <Route path="/navGeysers1" element={
                <>
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataG2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdG2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateG2" title="Geyser" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataG2Filter" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getbIdG2Filter/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateG2Filter" title="Filter" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataG2Fan" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdG2Fan/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateG2Fan" title="Fan" />
                </>
              } />
              <Route path="/navFan2" element={
                <>
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF2" title="Fan2" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getbIdFl2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateFl2" title="Light" />
                  <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataF2T" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdF2T/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateF2T" title="Fan2 light 2" />
                </>
              } />
              <Route path="/navHanging1" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging1" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdHanging1/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateHanging1" title="Hanging 1" />} />

              <Route path="/navAstberg"element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataAstberg"searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdAstberg/"UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateAstberg"title="Astberg"/>}/>


              <Route path="/navHanging2" element={<Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging2" searchUrl="https://lightpanelbackend-3bkt.onrender.com/api/getLightIdHanging2/" UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateHanging2" title="Hanging 2" />} />
              <Route
                path="/navExhaustFan1"
                element={
                  <>
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan1" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdExhaustFan1/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateExhaustFan1" title="Exhaust Fan 1" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataExhaustFan2" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getbIdExhaustFan2/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateExhaustFan2" title="Exhaust Fan 1" />
                    <Nav apiUrl="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan3" searchUrl={"https://lightpanelbackend-3bkt.onrender.com/api/getLightIdExhaustFan3/"} UpdateUrl="https://lightpanelbackend-3bkt.onrender.com/api/updateExhaustFan3" title="Wallfan" />

                  </>
                }
              />
          {/* ... include all your other admin routes here ... */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import LightPanel from './assets/LightPanel';
// import LightPanel2 from './assets/LightPanel2';
// import LightPanel3 from './assets/LightPanel3';
// import LightPanel4 from './assets/LightPanel4';
// import Nav from './assets/nav';
// import Layout from './assets/Layout';
// import LogOut from './assets/LogOut';
// import CartsPage from "./assets/CartsPage"; 
// import LightPanelWithCart from "./assets/LightPanelWithCart";

// const App = () => {
//   const [authStage, setAuthStage] = useState('initial');
//   const [isAuthenticated, setIsAuthenticated] = useState(
//     localStorage.getItem("isAuthenticated") === "true"
//   );
//   const [email, setEmail] = useState('user@example.com'); // Fixed email
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [countdown, setCountdown] = useState(0);
//   const [generatedOtp, setGeneratedOtp] = useState('');

//   useEffect(() => {
//     localStorage.setItem("isAuthenticated", isAuthenticated);
//   }, [isAuthenticated]);

//   useEffect(() => {
//     let timer;
//     if (countdown > 0) {
//       timer = setTimeout(() => setCountdown(countdown - 1), 1000);
//     }
//     return () => clearTimeout(timer);
//   }, [countdown]);

//   // Generate a random 6-digit OTP
//   const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
//   };

//   // Simulate sending OTP to email
//   const sendOtpToEmail = () => {
//     setIsLoading(true);
//     setError('');
    
//     // Simulate API call delay
//     setTimeout(() => {
//       const newOtp = generateOtp();
//       setGeneratedOtp(newOtp);
//       setCountdown(120); // 2 minutes countdown
      
//       // In a real app, you would send this to your backend
//       console.log(`OTP for ${email}: ${newOtp}`);
//       alert(`OTP sent to ${email}: ${newOtp}`); // For demo purposes
      
//       setAuthStage('otp');
//       setIsLoading(false);
//     }, 1500);
//   };

//   // Handle initial login
//   const handleInitialLogin = (e) => {
//     e.preventDefault();
    
//     if (username === 'user' && password === 'user@123') {
//       sendOtpToEmail();
//     } else {
//       setError('Invalid username or password');
//     }
//   };

//   // Handle OTP verification
//   const handleOTPVerification = (e) => {
//     e.preventDefault();
    
//     if (otp === generatedOtp) {
//       setIsAuthenticated(true);
//       setAuthStage('authenticated');
//     } else {
//       setError('Invalid OTP. Please try again.');
//     }
//   };

//   // Resend OTP
//   const handleResendOTP = () => {
//     if (countdown === 0) {
//       sendOtpToEmail();
//     }
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//     setAuthStage('initial');
//     localStorage.removeItem("isAuthenticated");
//     setUsername('');
//     setPassword('');
//     setOtp('');
//     setError('');
//   };

//   // User Login Component
//   const UserLogin = () => {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="text-center">
//               <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center">
//                 <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                 </svg>
//               </div>
//               <h2 className="mt-6 text-3xl font-bold text-gray-900">
//                 User Login
//               </h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Enter your credentials to continue
//               </p>
//             </div>
            
//             <form className="mt-8 space-y-6" onSubmit={handleInitialLogin}>
//               {error && (
//                 <div className="rounded-md bg-red-50 p-4">
//                   <div className="text-sm text-red-700">{error}</div>
//                 </div>
//               )}
              
//               <div className="rounded-md shadow-sm -space-y-px">
//                 <div>
//                   <label htmlFor="username" className="sr-only">Username</label>
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     required
//                     className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Username"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                   />
//                 </div>
//                 <div>
//                   <label htmlFor="password" className="sr-only">Password</label>
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </div>
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors duration-200"
//                 >
//                   {isLoading ? (
//                     <span className="flex items-center">
//                       <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                       </svg>
//                       Signing in...
//                     </span>
//                   ) : (
//                     <span>Sign in</span>
//                   )}
//                 </button>
//               </div>
              
//               <div className="text-center text-xs text-gray-500 p-4 bg-gray-50 rounded-md">
//                 <p>Demo credentials: username: <span className="font-mono">user</span>, password: <span className="font-mono">user@123</span></p>
//                 <p className="mt-1">OTP will be sent to: <span className="font-mono">user@example.com</span></p>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // OTP Login Component
//   const OTPLogin = () => {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//           <div className="p-8">
//             <div className="text-center">
//               <div className="mx-auto h-16 w-16 bg-indigo-600 rounded-full flex items-center justify-center">
//                 <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                 </svg>
//               </div>
//               <h2 className="mt-6 text-3xl font-bold text-gray-900">
//                 Verify Your Identity
//               </h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Enter the OTP sent to {email}
//               </p>
//             </div>
            
//             <form className="mt-8 space-y-6" onSubmit={handleOTPVerification}>
//               {error && (
//                 <div className="rounded-md bg-red-50 p-4">
//                   <div className="text-sm text-red-700">{error}</div>
//                 </div>
//               )}
              
//               <div>
//                 <label htmlFor="otp" className="sr-only">OTP Code</label>
//                 <input
//                   id="otp"
//                   name="otp"
//                   type="text"
//                   required
//                   maxLength="6"
//                   className="appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-center text-xl tracking-widest"
//                   placeholder="XXXXXX"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <button
//                   type="submit"
//                   className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
//                 >
//                   Verify OTP
//                 </button>
//               </div>
              
//               <div className="text-center">
//                 <button
//                   type="button"
//                   onClick={handleResendOTP}
//                   disabled={countdown > 0}
//                   className="text-sm text-indigo-600 hover:text-indigo-500 disabled:text-gray-400 disabled:cursor-not-allowed"
//                 >
//                   Resend OTP {countdown > 0 && `(${countdown}s)`}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // If not authenticated, show login or OTP screen
//   if (!isAuthenticated) {
//     if (authStage === 'initial') {
//       return <UserLogin />;
//     } else if (authStage === 'otp') {
//       return <OTPLogin />;
//     }
//   }

//   // If authenticated, show the main application
//   return (
//     <>
//       <Router>
//         <LogOut setIsAuthenticated={setIsAuthenticated} />

//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/login" element={<Navigate to="/" replace />} />
//             <Route path="/hanging1" element={<LightPanelWithCart pic='/Hanging1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging1" />} />
//             <Route path="/Astberg" element={<LightPanelWithCart pic='/Astberg.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataAstberg" />} />
//             <Route path="/hanging2" element={<LightPanelWithCart pic='/Hanging2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataHanging2" />} />
//             <Route path="/hybec1" element={<LightPanelWithCart pic='/Hybec1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH1" />} />
//             <Route path="/hybec2" element={<LightPanelWithCart pic='/Hybec2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataH2" />} />
//             <Route path="/nirvana1" element={<LightPanelWithCart pic='/Nirvana1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana1" />} />
//             <Route path="/nirvana2" element={<LightPanelWithCart pic='/Nirvana2.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataNirvana2" />} />
//             <Route path="/philips" element={<LightPanelWithCart pic='/Philips.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataPhilips" />} />
//             <Route path="/SC1" element={<LightPanelWithCart pic='/SurfaceCOB.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataSC1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataSC2" />} />
//             <Route path="/exhaustfan1" element={<LightPanelWithCart pic='/ExhaustFans.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataExhaustFan2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataExhaustFan3" />} />
//             <Route path="/wall1" element={<LightPanelWithCart wallName="Wall1" pic='/Wall1.jpg' LightData="https://lightpanelbackend-3bkt.onrender.com/api/data1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata1"  />} />
//             <Route index element={<LightPanel3 pic="/LightPanel.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata2" />} />
//             <Route path="/wall3" element={<LightPanelWithCart wallName="Wall3" pic="/Wall3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata3" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata3"  />} />
//             <Route path="/wall4" element={<LightPanelWithCart wallName="Wall4" pic="/Wall4.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data4" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata4" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/Footlampdata4" />} />  
//             <Route path="/wall5" element={<LightPanelWithCart wallName="Wall5" pic="/Wall5.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/data5" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddata5" />} />
//             <Route path="/carts" element={<CartsPage />} />
//             <Route path="/Fan1" element={<LightPanelWithCart pic="/Fan1.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl1" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF1T" />} />
//             <Route path="/Fan2" element={<LightPanelWithCart pic="/Fan2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl2" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataF2T" />} />
//             <Route path="/Geyser2" element={<LightPanelWithCart pic="/Geysers2.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataG2Filter" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataG2Fan" />} />
//             <Route path="/Fan3" element={<LightPanelWithCart pic="/Fan3.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataF3" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/bollarddataFl3" />} />
//             <Route path="/gatelight" element={<LightPanelWithCart pic="/Gatelights.jpg" LightData="https://lightpanelbackend-3bkt.onrender.com/api/dataGl" bollardData="https://lightpanelbackend-3bkt.onrender.com/api/dataFl" CellingData="https://lightpanelbackend-3bkt.onrender.com/api/dataCl" GardenSpikeData="https://lightpanelbackend-3bkt.onrender.com/api/dataGs" />} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// };

// export default App;