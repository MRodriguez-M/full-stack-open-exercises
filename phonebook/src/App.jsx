import { useEffect, useState } from 'react'
import contactService from './services/contacts'

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
      ? props.filterList.map(person => <p key={person.id}>{person.name} {person.number}</p>)
      : props.persons.map(person => <p key={person.id}>{person.name} {person.number}</p>)}
    </div>
  )
}

function App() {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState([]);

  const addContact = (event) => {
    event.preventDefault();
    const contactObj = {
      name: newName,
      number: newNumber,
    }

    for(let i = 0; i < persons.length; i++) {
      if(contactObj.name === persons[i].name) {
        alert(`${contactObj.name} is already added to the phonebook`);
        break;
      }
      if(i === persons.length-1 && contactObj.name !== persons[i].name) {
        contactService
          .create(contactObj)
          .then(returnedContact => {
            setPersons(persons.concat(returnedContact))
          })
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

  useEffect(() => {
    contactService
      .read()
      .then(initialContacts => {
        setPersons(initialContacts);
      })
  }, [])

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
