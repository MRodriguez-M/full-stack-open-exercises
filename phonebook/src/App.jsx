import { useEffect, useState } from 'react'

function App() {
  const [persons, setPersons] = useState([
    {name: 'Arto Hellas', num: '040-1234567', id: 1},
    {name: 'Ada Lovelace', num: '39-44-532', id: 2},
    {name: 'Dan Abramov', num: '12-43-234345', id: 3},
    {name: 'Mary Poppendieck', num: '39-23-6423122', id: 4}
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState([]);

  const addContact = (event) => {
    event.preventDefault();
    const contactObj = {
      name: newName,
      num: newNumber,
    }

    for(let i = 0; i < persons.length; i++) {
      if(contactObj.name === persons[i].name) {
        alert(`${contactObj.name} is already added to the phonebook`);
        break;
      }
      if(i === persons.length-1 && contactObj.name !== persons[i].name) {
        setPersons(persons.concat(contactObj));
      }
    }

    setNewName('');
    setNewNumber('');
  }

  const handleContactName = (event) => {
    setNewName(event.target.value);
  }

  const handleContactNumber = (event) => {
    setNewNumber(event.target.value);
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);
  }

  useEffect(() => {
    const tempArr = persons.filter(val => val.name.toLowerCase().includes(filter.toLowerCase()));
    setFilterList(tempArr);
  }, [filter])

  return (
    <div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleFilter} value={filter}/></div>
      <h2>add a new</h2>
      <form onSubmit={addContact}>
        <div>name: <input onChange={handleContactName} value={newName}/></div>
        <div>number: <input onChange={handleContactNumber} value={newNumber}/></div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {(filter.length > 0) ? filterList.map(person => <p>{person.name} {person.num}</p>) : persons.map(person => <p>{person.name} {person.num}</p>)}
    </div>
  )
}

export default App
