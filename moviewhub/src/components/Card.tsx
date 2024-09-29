"use client";
import { useState } from "react";
import { FilePenLine, Trash2 } from "lucide-react";
import { Review } from "@/data";
// import Link from 'next/link';

interface MovieCardProps {
  id: number;
  name: string;
  releaseDate: string;
  reviews: Review[];
  onEdit: (id: number, name: string, releaseDate: string) => void;  // Update signature to pass movie details
  onDelete: (id: number) => void;  // Delete by id
}

const Card: React.FC<MovieCardProps> = ({ id, name, releaseDate, reviews, onEdit, onDelete }) => {
  // Local state to handle edit modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editedName, setEditedName] = useState(name);
  const [editedReleaseDate, setEditedReleaseDate] = useState(releaseDate);

  // Calculate the average rating
  const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  // Handle edit form submission
  const handleEditSubmit = () => {
    onEdit(id, editedName, editedReleaseDate);  
    setIsEditModalOpen(false);  
  };

  return (
    <>
      <div className="bg-gray-50 shadow-md rounded-lg p-5 relative">
        <h2 className="text-xl font-semibold mb-2">{name}</h2>
        <p className="text-gray-600">Release Date: {releaseDate}</p>
        <p className="text-gray-600">Average Rating: {averageRating.toFixed(1)} / 10</p>
        <div className="absolute bottom-4 right-4 flex space-x-2">
          <button
            className="text-blue-500 hover:text-blue-700"
            onClick={() => setIsEditModalOpen(true)}  // Open edit modal
            title="Edit"
          >
            <FilePenLine />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => onDelete(id)} 
            title="Delete"
          >
            <Trash2 />
          </button>
          {/* <Link href={`/review/${id}`}>
          <p className="text-green-500 hover:text-green-700" title="Review">
            <ScanEye />
          </p>
        </Link> */}
        </div>
      </div>


      {isEditModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Edit Movie</h3>
            <label className="block mb-2">Movie Name:</label>
            <input
              type="text"
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <label className="block mb-2">Release Date:</label>
            <input
              type="date"
              value={editedReleaseDate}
              onChange={(e) => setEditedReleaseDate(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                className="bg-gray-500 text-white py-2 px-4 rounded"
                onClick={() => setIsEditModalOpen(false)}  
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={handleEditSubmit}  
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
