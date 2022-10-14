const Persons = (props) => {
  const { persons, personsFilter } = props;

  return (
    <ul>
      {!personsFilter.length
        ? persons.map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
            </li>
          ))
        : personsFilter.map((person, i) => (
            <li key={i}>
              {person.name} {person.number}
            </li>
          ))}
    </ul>
  );
};

export default Persons;
