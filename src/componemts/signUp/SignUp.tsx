import React from "react";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form>
        <div className="px-4 mb-4">
          <label
            htmlFor="first-name"
            className="block text-black-700 font-semibold"
          >
            First name
          </label>
          <input
            type="text"
            id="first-name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your first name"
          />
        </div>
        <div className="px-4 mb-4">
          <label
            htmlFor="last-name"
            className="block text-black-700 font-semibold"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your last name"
          />
        </div>
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
        <div className="px-4 mb-4">
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
            placeholder="Create password"
          />
        </div>
        <div className="px-4 mb-6">
          <label
            htmlFor="confirm-password"
            className="block text-black-700 font-semibold"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="Confirm your password"
          />
        </div>
        <span className="block text-black-700 mb-2 font-semibold">
          Account Type
        </span>
        <div className=" grid grid-cols-2 mb-6">
          <div className="flex items-center mb-2 ">
            <input
              type="radio"
              id="individual"
              name="account-type"
              className="mr-2"
            />
            <label htmlFor="individual" className="text-black-700 font-medium">
              Individual
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="property-owner"
              name="account-type"
              className="mr-2"
            />
            <label
              htmlFor="property-owner"
              className="text-black-700 font-medium"
            >
              Property Owner
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="agent"
              name="account-type"
              className="mr-2"
            />
            <label htmlFor="agent" className="text-black-700 font-medium">
              Agent
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="radio"
              id="property-developer"
              name="account-type"
              className="mr-2"
            />
            <label
              htmlFor="property-developer"
              className="text-black-700 font-medium"
            >
              Property Developer
            </label>
          </div>
        </div>
        <button className="w-full bg-blue-600 font-semibold text-white py-2 rounded-md hover:bg-blue-700">
          Sign up
        </button>
        <div className="text-center mt-4 text-gray-600 text-sm">
          By submitting, I accept Housinn's{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Use
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
