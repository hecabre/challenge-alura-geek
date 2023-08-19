import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
          Oops, something go wrong.
        </h1>
        <p className="text-lg text-center text-gray-800 mb-6">
          It seems that we have encountered a problem with our server. Please
          try again later or get login.
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-12 h-12 text-blue-500 mx-auto mb-6"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12" y2="16" />
        </svg>
        <div className="flex items-center justify-center">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors"
          >
            Go to home page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
