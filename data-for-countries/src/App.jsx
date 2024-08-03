import { useEffect, useState } from "react"
import countriesService from "./services/countries";
import Country from "./Country";

function App() {
  const [country, setCountry] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [showClicked, setShowClicked] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

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
        return <Country country={filterList[0]}/>
      }
      else {
        return filterList.map(c =>
          <div>
            <p>{c.name.common}</p>
            <button onClick={() => showCountryInfo(filterList.indexOf(c))}>show</button>
          </div>
        )
      }
    }
    else if (filterList.length === 0) {
      return null
    }
  }

  const showCountryInfo = (index) => {
    setShowClicked(true);
    setSelectedIndex(index);
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
    setShowClicked(false);
  }, [country])

  return (
    <div>
      find countries
      {(countryList.length > 0) && <input onChange={handleSearch} value={country} />}
      {(showClicked) ? <Country country={filterList[selectedIndex]}/> : renderFilteredList()}
    </div>
  )
}

export default App
