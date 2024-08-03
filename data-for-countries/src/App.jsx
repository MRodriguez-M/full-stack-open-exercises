import { useEffect, useState } from "react"
import countriesService from "./services/countries";
import Country from "./Country";

function App() {
  const [country, setCountry] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const handleSearch = (e) => {
    setCountry(e.target.value);
  }

  const searchCountries = () => {
    countriesService
      .getCountries()
      .then(countries => {
        setCountryList(countries);
      })
  }

  const renderFilteredList = () => {
    if(filterList.length > 0) {
      if(filterList.length > 10) {
        return <p>Too many matches, specify another filter</p>
      }
      else if(filterList.length === 1) {
        console.log(filterList)
        return <Country country={filterList[0]}/>
      }
      else {
        return filterList.map(c => <p>{c.name.common}</p>)
      }
    }
    else if (filterList.length === 0) {
      return null
    }
  }

  useEffect(() => {
    searchCountries();
  }, [])

  useEffect(() => {
    let tempArr = [];

    if(country.length > 0) {
      tempArr = countryList.filter(val => val.name.common.toLowerCase().includes(country.toLowerCase()));
    }
    else {
      tempArr = [];
    }
    setFilterList(tempArr);
  }, [country])

  return (
    <div>
      find countries
      {(countryList.length > 0) && <input onChange={handleSearch} value={country} />}
      {renderFilteredList()}
    </div>
  )
}

export default App
