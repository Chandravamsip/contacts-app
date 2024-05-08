import React, { useState } from "react";
import { useContacts } from "../context/ContactsContext";
import { useLocation } from "react-router-dom";
const CreateContact = () => {
  const location = useLocation();
  const { addContact } = useContacts();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("active");

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({
      id: Math.floor(Math.random() * 1000) + 1,
      name: `${firstName} ${lastName}`,
      status,
    });
    // Reset input fields after submitting the form
    setFirstName("");
    setLastName("");
    setStatus("active");

    // Redirect to the home page after creating a contact
    location.pathname = "/";
  };

  return (
    <div className="bg-gray-800 min-h-screen flex justify-center items-center">
      <div className="flex flex-col bg-white shadow-md rounded-md p-4">
        <h2 className="text-xl font-bold mb-4">Create Contact</h2>
        <form className="flex flex-col space-y-2" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="firstName" className="mb-1">
              First Name:
            </label>
            <input
              type="text"
              id="firstName"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="mb-1">
              Last Name:
            </label>
            <input
              type="text"
              id="lastName"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="status" className="mr-2">
              Status:
            </label>
            <select
              id="status"
              className="rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring-1 focus:ring-blue-500"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            Save Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateContact;
