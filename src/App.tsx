import React from "react";

import SignIn from "./componemts/signIn/SignIn";
import SignUp from "./componemts/signUp/SignUp";
import Img1 from "./assets/images/img1.jpeg";

const App = () => {
  const [isSignIn, setIsSignIn] = React.useState(true);

  return (
    <div className="flex flex-row min-h-screen">
      <div className="w-1/2 h-screen relative overflow-hidden">
        <img
          src={Img1}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      <div className="flex-auto h-screen p-8 flex flex-col overflow-y-auto">
        <h2 className="text-center text-2xl font-bold pb-8">
          Welcome To Housinn
        </h2>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-8 ${
              isSignIn
                ? "bg-inherit font-medium border-2 border-b-black border-t-white border-r-white border-l-white"
                : "bg-inherit font-medium border-2 border-b-grey border-t-white border-r-white border-l-white"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-8 ${
              !isSignIn
                ? "bg-inherit font-medium border-2 border-b-black border-t-white border-r-white border-l-white"
                : "bg-inherit font-medium border-2 border-b-grey border-t-white border-r-white border-l-white"
            }`}
          >
            New Account
          </button>
        </div>
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default App;
