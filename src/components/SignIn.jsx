import React from "react";

function SignIn() {
  return (
    <div className="bg-green-100 flex items-center justify-center h-screen">
      <div>
        <form className="bg-white text-center p-8 rounded-lg shadow-lg w-96">
          <h1 className="text-2xl font-bold mb-6">Sign In</h1>

        
          <label htmlFor="username" className="block text-left mb-2">
            Username/Email:
          </label>
          <input
            type="text"
            name="username"
            required
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />

          
          <label htmlFor="password" className="block text-left mb-2">
            Password:
          </label>
          <input
            type="password"
            name="password"
            required
            className="border border-gray-300 p-2 rounded mb-4 w-full"
          />

    
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
