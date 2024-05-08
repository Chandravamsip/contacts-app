import React from 'react';
import { Link } from 'react-router-dom';
import { useContacts } from '../context/ContactsContext';

function ContactPage() {
  const { contacts } = useContacts();

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow max-w-md px-4 py-6 sm:px-8 sm:py-10 overflow-hidden">
        <h2 className="text-2xl font-bold text-center mb-4 sm:mb-6">Contacts</h2>
        {contacts.length === 0 ? (
          <p className="text-xl text-gray-500 text-center mb-6">
            No contacts found. Please create a contact.
          </p>
        ) : (
          <div>
            {contacts.map(contact => (
              <Link key={contact.id} to={`/edit-contact/${contact.id}`}>
                <div className="mb-4 p-4 border rounded-md cursor-pointer">
                  <h3 className="text-lg font-semibold sm:text-xl">{contact.name}</h3>
                  <p className="text-gray-500 text-sm sm:text-base">{contact.email}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
        <Link
          to="/create-contact"
          className="inline-block w-full sm:w-auto text-center py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Create Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 -mr-1 w-4 h-4 hidden sm:inline-block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v-6m4 4l-4 4m0 0l4 4m-4-4v6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default ContactPage;
