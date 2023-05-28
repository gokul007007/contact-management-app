import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Contacts } from './pages/Contacts';
import { ChartsAndMaps } from './pages/ChartsAndMaps';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-1/5 bg-gray-900 text-white">
          <ul className="py-4">
            <li className="px-6 py-3">
              <Link
                to="/contacts"
                className="text-gray-300 hover:text-gray-100 font-medium"
              >
                Contacts
              </Link>
            </li>
            <li className="px-6 py-3">
              <Link
                to="/charts-and-maps"
                className="text-gray-300 hover:text-gray-100 font-medium"
              >
                Charts and Maps
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-4/5 bg-white p-8">
          <Routes>
            <Route path="/contacts/*" element={<Contacts />} />
            <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
