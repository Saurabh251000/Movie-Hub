"use client";
import React from 'react';

interface NavbarProps {
  onAddMovie: () => void;
  onAddReview: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onAddMovie, onAddReview }) => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <a href='/' className="text-white text-2xl font-bold">MOVIECRITIC</a>
      {/* <div className=></div> */}
      <div> 
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mr-4"
          onClick={onAddMovie}
        >
          Add new movie
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={onAddReview}
        >
          Add new review
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
