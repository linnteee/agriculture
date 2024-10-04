import React, { useState } from 'react';

function Content({ label, className }) {
  const [searchPopup, setSearchPopup] = useState(false);

  const handleButtonClick = () => {
    setSearchPopup(true);
  };

  const closePopup = () => {
    setSearchPopup(false);
  };

  return (
    <div className='bg-green-100 h-screen flex flex-wrap content-center justify-center gap-10 pb-20'>
      <button
        className={`bg-green-500 text-black text-4xl font-bold rounded-2xl hover:bg-green-300 p-20 ${className}`}
        onClick={handleButtonClick}
      >
        Tools {label}
      </button>
      <button
        className={`bg-green-500 text-black text-4xl font-bold rounded-2xl hover:bg-green-300 p-20 ${className}`}
        onClick={handleButtonClick}
      >
        Seeds {label}
      </button>
      <button
        className={`bg-green-500 text-black text-4xl font-bold rounded-2xl hover:bg-green-300 p-20 ${className}`}
        onClick={handleButtonClick}
      >
        Garment {label}
      </button>
      <button
        className={`bg-green-500 text-black text-4xl font-bold rounded-2xl hover:bg-green-300 p-20 ${className}`}
        onClick={handleButtonClick}
      >
        Fertilizer {label}
      </button>

      {searchPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Search Products</h2>
            <input
              type="text"
              placeholder="Search for products..."
              className="border p-2 rounded mb-4 w-full"
            />
            <button onClick={closePopup} className="bg-red-500 text-white rounded px-4 py-2">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;
