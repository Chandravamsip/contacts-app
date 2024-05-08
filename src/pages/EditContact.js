import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useContacts } from '../context/ContactsContext';

const EditContact = () => {
  const { id } = useParams();
  const { contacts, editContact } = useContacts();
  const [fullName, setFullName] = useState(''); // Change to fullName state
  const [status, setStatus] = useState('active');

  useEffect(() => {
    const selectedContact = contacts.find(contact => contact.id === parseInt(id));
    if (selectedContact) {
      setFullName(selectedContact.name); // Set full name instead of first name and last name separately
      setStatus(selectedContact.status);
    }
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Split full name into first name and last name
    editContact({
      id: parseInt(id),
      name: fullName,
      status
    });
    // Redirect back to contact page after saving
    // You can use useHistory hook to navigate or any other method
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold mb-4">Edit Contact</h2>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-1">Full Name:</label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={e => setFullName(e.target.value)}
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="status" className="mr-2">Status:</label>
            <select
              id="status"
              value={status}
              onChange={e => setStatus(e.target.value)}
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Save Edited Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
