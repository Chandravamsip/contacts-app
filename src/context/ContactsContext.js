import React, { createContext, useContext, useEffect, useState } from 'react';

const ContactsContext = createContext();

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const editContact = (editedContact) => {
    setContacts(
      contacts.map((contact) =>
        contact.id === editedContact.id ? editedContact : contact
      )
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, editContact, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
