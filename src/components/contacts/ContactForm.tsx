// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface IContactFormProps {}

// export const ContactForm: React.FC<IContactFormProps> = () => {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [status, setStatus] = useState('active');
//   const history = useNavigate();

//   const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFirstName(e.target.value);
//   };

//   const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setLastName(e.target.value);
//   };

//   const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setStatus(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Perform any necessary validation or data processing here
//     // Save contact data or perform any relevant actions
//     // After saving, redirect to the contact details page or any other desired page
//     history('/details');
//   };

//   return (
//     <div className="flex flex-col items-center justify-center h-screen">
//       <h2 className="text-xl font-bold mb-4">Create Contact</h2>
//       <form className="flex flex-col" onSubmit={handleSubmit}>
//         <label className="mb-4">
//           First Name:
//           <input
//             type="text"
//             value={firstName}
//             onChange={handleFirstNameChange}
//             className="border border-gray-300 rounded-lg px-4 py-2 mt-1"
//             required
//           />
//         </label>
//         <label className="mb-4">
//           Last Name:
//           <input
//             type="text"
//             value={lastName}
//             onChange={handleLastNameChange}
//             className="border border-gray-300 rounded-lg px-4 py-2 mt-1"
//             required
//           />
//         </label>
//         <label className="mb-4">
//           Status:
//           <div className="flex items-center mt-1">
//             <label className="mr-4">
//               <input
//                 type="radio"
//                 value="active"
//                 checked={status === 'active'}
//                 onChange={handleStatusChange}
//               />
//               Active
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 value="inactive"
//                 checked={status === 'inactive'}
//                 onChange={handleStatusChange}
//               />
//               Inactive
//             </label>
//           </div>
//         </label>
//         <button
//           type="submit"
//           className="py-3 px-6 bg-blue-500 text-white font-medium rounded-lg shadow-lg mt-4"
//         >
//           Save Contact
//         </button>
//       </form>
//     </div>
//   );
// };

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface IContactFormProps {}

export const ContactForm: React.FC<IContactFormProps> = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');
  const navigate = useNavigate();

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform any necessary validation or data processing here
    // Save contact data or perform any relevant actions

    // Navigate to ContactDetails page with props
    navigate(`/contacts/details`, { state: { firstName, lastName, status } });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-xl font-bold mb-4">Create Contact</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-4">First Name:</label>
        <input
          type="text"
          value={firstName}
          onChange={handleFirstNameChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mt-1"
          required
        />
        <label className="mb-4">Last Name:</label>
        <input
          type="text"
          value={lastName}
          onChange={handleLastNameChange}
          className="border border-gray-300 rounded-lg px-4 py-2 mt-1"
          required
        />
        <label className="mb-4">
          Status:
          <div className="flex items-center mt-1">
            <label className="mr-4">
              <input
                type="radio"
                value="active"
                checked={status === 'active'}
                onChange={handleStatusChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                value="inactive"
                checked={status === 'inactive'}
                onChange={handleStatusChange}
              />
              Inactive
            </label>
          </div>
        </label>
        <button
          type="submit"
          className="py-3 px-6 bg-blue-500 text-white font-medium rounded-lg shadow-lg mt-4"
        >
          Save Contact
        </button>
      </form>
    </div>
  );
};






