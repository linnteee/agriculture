import React from 'react';

function Contact() {
    return (
        <div className="bg-green-100 flex items-center justify-center h-screen">
            <form className="bg-white text-center p-8 rounded-lg shadow-lg w-96">
                <h1 className="text-2xl font-bold mb-6">Contact Us</h1>
                <label htmlFor="email" className="block text-left mb-2">Email:</label>
                <input
                    type="email"
                    name="email"
                    required
                    className="border border-gray-300 p-2 rounded mb-4 w-full"
                />

                <label htmlFor="description" className="block text-left mb-2">Description:</label>
                <textarea
                    name="description"
                    required
                    className="border border-gray-300 p-2 rounded mb-4 w-full h-32"
                    placeholder="Enter your message here..."
                ></textarea>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Contact;
