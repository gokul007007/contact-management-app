import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IContactDetailsProps {}

export const ContactDetails: React.FC<IContactDetailsProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [contact, setContact] = useState(null);

  useEffect(() => {
    // Retrieve the contact data from local storage
    const storedContactData = localStorage.getItem('contactData');
    if (storedContactData) {
      const contactData = JSON.parse(storedContactData);
      setContact(contactData);
    }
  }, []);

  const handleEdit = () => {
    // Handle edit functionality here
    navigate('/contacts/form');
  };

  const handleDelete = () => {
    // Handle delete functionality here
    // You can show a confirmation dialog or directly delete the contact
    // After deleting, navigate back to the contact list or any other desired page
    // Remove the contact data from local storage
    localStorage.removeItem('contactData');
    navigate('/contacts');
  };

  const handleCreateContact = () => {
    navigate('/contacts/form');
  };

  if (!contact) {
    return null; // or display a loading state
  }

  const { firstName, lastName, status } = contact;

  return (
    <div>
      <button
        onClick={handleCreateContact}
        className="py-2 px-4 bg-blue-500 text-white font-medium rounded-lg shadow-lg mt-4"
      >
        Create Contact
      </button>
      <h2>Contact Details</h2>
      <div className="flex">
        <div className="mr-4">
          <p>First Name: {firstName}</p>
          <p>Last Name: {lastName}</p>
          <p>Status: {status}</p>
        </div>
        <div>
          <button
            onClick={handleEdit}
            className="py-2 px-4 bg-yellow-500 text-white font-medium rounded-lg shadow-lg"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="py-2 px-4 bg-red-500 text-white font-medium rounded-lg shadow-lg ml-4"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};