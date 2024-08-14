import React from "react";
import apple from "../../assets/images/appleIcon.jpg";
import google from "../../assets/images/googleIcon.png";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form>
        <div className="px-4 mb-4">
          <label htmlFor="email" className="block text-black-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
        </div>
        <div className="px-4 mb-6">
          <label
            htmlFor="password"
            className="block text-black-700 font-semibold"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button className="w-full bg-blue-950 text-white py-2 font-semibold rounded-md hover:bg-blue-700">
          Sign in
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Forgot your password?
          </a>
        </div>
        <div className="mt-6 flex flex-col justify-between items-center">
          <button className="flex-auto w-80 mb-4 font-semibold bg-white border-2 border-black py-2 rounded-md hover:bg-gray-50 flex items-center justify-center">
            <img src={google} alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
          <button className="flex-auto w-80 font-semibold bg-white border-2 border-black py-2 rounded-md hover:bg-gray-50 flex items-center justify-center ml-2">
            <img src={apple} alt="Apple" className="w-5 h-5 mr-2" />
            Sign in with Apple
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
