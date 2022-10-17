const Persons = (props) => {
  const { persons, personsFilter, handleDelete } = props;


  return (
    <ul>
      {!personsFilter.length
        ? persons.map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))
        : personsFilter.map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
              <button onClick={() => handleDelete(person.id)}>Delete</button>
            </li>
          ))}
    </ul>
  );
};

export default Persons;
