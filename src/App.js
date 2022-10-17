import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import notes from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsFilter, setPersonsFilter] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    notes.getAll()
      .then((result) => setPersons(result))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const arrayFilter = persons.filter(
      (elem) => elem.name.toLowerCase().indexOf(filter.toLowerCase()) === 0
    );

    setPersonsFilter(arrayFilter);
  }, [filter, persons]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const findUser = persons.find(
      (person) => person.name.toLowerCase() === newName.toLowerCase()
    );

    const newContact = { name: newName, number: newNumber }

    if (findUser) {
      notes.update(findUser.id, newContact)
      .then(setPersons(persons.map(person => person.id !== findUser.id ? person : newContact)))
      .catch(err => console.log(err));

      resetInput();

      return;
    }

    addNewContact(newContact); 

    setPersons([...persons, newContact]);
    resetInput();
  };

  const addNewContact = (newContact) => {
    notes.create(newContact)
      .catch(err => console.log(err));
  }

  const handleDelete = (id) => {
    const newArray = persons.filter(elem => elem.id !== id)
    
    setPersons(newArray);

    notes.deleteContact(id)
      .catch (err => console.log(err))
  }

  const resetInput = () => {
    setNewName('');
    setNewNumber('');
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Numbers</h2>
      <Form
        handleSubmit={handleSubmit}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} personsFilter={personsFilter} handleDelete={handleDelete} />
    </>
  );
};

export default App;
