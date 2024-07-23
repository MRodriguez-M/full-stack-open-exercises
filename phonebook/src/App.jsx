import { useEffect, useState } from 'react'

const Filter = (props) => {
  return (
    <div>filter shown with <input onChange={props.handleFilter} value={props.filter}/></div>
  )
}

const PersonForm = (props) => {
  return (
    <form onSubmit={props.addContact}>
        <div>name: <input onChange={props.handleContactName} value={props.newName}/></div>
        <div>number: <input onChange={props.handleContactNumber} value={props.newNumber}/></div>
        <div>
          <button type='submit'>add</button>
        </div>
    </form>
  )
}

const Persons = (props) => {
  return (
    <div>
      {(props.filter.length > 0)
      ? props.filterList.map(person => <p key={person.id}>{person.name} {person.num}</p>)
      : props.persons.map(person => <p key={person.id}>{person.name} {person.num}</p>)}
    </div>
  )
}

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
      <Filter handleFilter={handleFilter} filter={filter}/>
      <h2>add a new</h2>
      <PersonForm
        addContact={addContact}
        handleContactName={handleContactName}   
        newName={newName}
        handleContactNumber={handleContactNumber}
        newNumber={newNumber}  
      />
      <h2>Numbers</h2>
      <Persons
        filter={filter}
        filterList={filterList}
        persons={persons}
      />
    </div>
  )
}

export default App
