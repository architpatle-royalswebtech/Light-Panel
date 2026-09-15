import React, { useState } from 'react';

const OTPLogin = ({ onVerify, onResend }) => {
  const [otp, setOtp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onVerify(otp);
  };

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='border-2 border-gray-400 bg-gray-800 p-16 rounded-lg'>
        <h2 className='text-white text-xl mb-4'>Enter OTP</h2>
        <p className='text-white mb-4'>OTP sent to devashish.royalswebtech@gmail.com</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="p-2 rounded mb-4 w-full"
            required
          />
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onResend}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Resend OTP
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Verify OTP
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTPLogin;