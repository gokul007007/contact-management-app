// import React from 'react';
// import { useLocation } from 'react-router-dom';

// interface IContactDetailsProps {}

// export const ContactDetails: React.FC<IContactDetailsProps> = () => {
//   const location = useLocation();
//   const { firstName, lastName, status } = location.state;

//   return (
//     <div>
//       <h2>Contact Details</h2>
//       <p>First Name: {firstName}</p>
//       <p>Last Name: {lastName}</p>
//       <p>Status: {status}</p>
//     </div>
//   );
// };




import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface IContactDetailsProps {}

export const ContactDetails: React.FC<IContactDetailsProps> = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { firstName, lastName, status } = location.state;

  const handleEdit = () => {
    // Handle edit functionality here
    navigate('/contacts/form');
  };

  const handleDelete = () => {
    // Handle delete functionality here
    // You can show a confirmation dialog or directly delete the contact
    // After deleting, navigate back to the contact list or any other desired page
    navigate('/contacts');
  };

  const handleCreateContact = () => {
    navigate('/contacts/form');
  };

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
