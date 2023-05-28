import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IContactHomeProps {}

export const ContactHome: React.FC<IContactHomeProps> = () => {
  const [showBanner, setShowBanner] = React.useState(true);
  const navigate = useNavigate();

  const handleBannerClose = () => {
    setShowBanner(false);
  };

  const handleCreateContact = () => {
    navigate('/contacts/form');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <button
        className="py-3 px-6 bg-blue-500 text-white font-medium rounded-lg shadow-lg mb-8"
        onClick={handleCreateContact}
      >
        Create Contact
      </button>
      {showBanner && (
        <div className="flex items-center justify-between bg-gray-200 w-80 h-12 rounded-lg px-4">
          <div>No Contact Found Please add contact from Create Contact Button</div>
          <button className="text-gray-500 hover:text-gray-700" onClick={handleBannerClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};
