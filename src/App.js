import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [personsFilter, setPersonsFilter] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(()=>{
    console.log('Es el effect')
  },[])

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

    if (findUser) {
      resetInput();
      return alert(`${newName} is already added to phonebook`);
    }

    setPersons([...persons, { name: newName, number: newNumber }]);
    resetInput();
  };

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
      <Persons persons={persons} personsFilter={personsFilter} />
    </>
  );
};

export default App;
