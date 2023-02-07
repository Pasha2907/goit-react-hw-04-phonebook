import React, { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Title, Section } from './App.styled';

export function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
    );
  });
  const [filter, setFilter] = useState('');

  const addContact = newContact => {
    if (contacts.map(contact => contact.name).includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts(prevState => [newContact, ...prevState]);
    }
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };
  //
  const showContact = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Section>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <Title>Contacts</Title>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList contacts={showContact()} onDeleteContact={deleteContact} />
    </Section>
  );
}
