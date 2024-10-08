import React from "react";
import { Link } from "react-router-dom"; 

function SignUp() {
  return (
    <div className="bg-green-100 flex items-center justify-center h-screen">
      <div className="form-container bg-white p-8 rounded-lg shadow-lg">
        <form className="form">
          <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>

        
          <label htmlFor="username" className="block mb-2">
            Username/Email:
          </label>
          <input
            type="text"
            name="username"
            required
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />

          
          <label htmlFor="fname" className="block mb-2">
            Firstname:
          </label>
          <input
            type="text"
            name="fname"
            placeholder="Please enter your Firstname"
            required
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />

      
          <label htmlFor="lname" className="block mb-2">
            Lastname:
          </label>
          <input
            type="text"
            name="lname"
            placeholder="Please enter your Lastname"
            required
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />

          
          <label htmlFor="password" className="block mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="Use a strong password"
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />

      
          <label htmlFor="confirmPassword" className="block mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            className="border border-gray-300 p-2 rounded mb-6 w-full"
          />

        
          <button
            id="b1"
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>

        
        <div id="signup" className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <Link
              to="/signin"
              id="signinpage"
              className="text-green-500 hover:text-green-600"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
