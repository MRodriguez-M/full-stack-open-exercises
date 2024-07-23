import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{name: 'Arto Hellas', num: '040-1234567'}]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

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

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input onChange={handleContactName} value={newName}/></div>
        <div>number: <input onChange={handleContactNumber} value={newNumber}/></div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p>{person.name} {person.num}</p>)}
    </div>
  )
}

export default App
