import React from 'react'

function Footersite(){
    return(
        <footer className="bg-green-300 w-full flex flex-row text-white p-10">
  
  <div className="flex-1">
    <ul className="list-none space-y-4">
      <li className="font-bold text-white text-4xl">Explore</li>
      <li className="font-bold hover:text-green-500">
        <a href="/">Home</a>
      </li>
      <li className="font-bold hover:text-green-500">
        <a href="/Contact.html">Contact</a>
      </li>
      <li className="font-bold hover:text-green-500">
        <a href="/About.html">About us</a>
      </li>
      <li className="font-bold hover:text-green-500">
        <a href="/SignIn.html">Sign in</a>
      </li>
      <li className="font-bold hover:text-green-500">
        <a href="/SignUp.html">Sign up</a>
      </li>
    </ul>
  </div>

  
  <div className="flex-1">
    <ul className="space-y-2">
      <li className="font-bold text-4xl">Contact us</li>
      <li className="font-bold">@email.com</li>
    </ul>
  </div>
  
</footer>


    )
}


export default Footersite