import { useState } from 'react'

function App() {
  const [persons, setPersons] = useState([{name: 'Arto Hellas'}]);
  const [newName, setNewName] = useState('');

  const addContact = (event) => {
    event.preventDefault();
    const contactObj = {
      name: newName,
    }

    setPersons(persons.concat(contactObj));
    setNewName('');
  }

  const handleContactInfo = (event) => {
    setNewName(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addContact}>
        <div>name: <input onChange={handleContactInfo} value={newName}/></div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <p>{person.name}</p>)}
    </div>
  )
}

export default App
