import React, { useState } from 'react';

function Content() {
  return(
<button
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
  onClick={() => window.location.href = 'signup.html'}
>
  Sign Up
</button>

  )
}

export default Content;
