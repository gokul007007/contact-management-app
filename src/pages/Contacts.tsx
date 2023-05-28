import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ContactHome } from '../components/contacts/ContactHome';
import { ContactDetails } from '../components/contacts/ContactDetails';
import { ContactForm } from '../components/contacts/ContactForm';

export const Contacts: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ContactHome />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/details" element={<ContactDetails />} />
      </Routes>
    </div>
  );
};
