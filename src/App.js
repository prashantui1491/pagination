import React, { useState } from 'react';

const CountryStateCitySelector = () => {

  const countryStateCityData = [

    {
      country: 'India',
      states: [
        { name: 'Gujarat', capital: 'Gandhinagar' },
        { name: 'Maharashtra', capital: 'Mumbai' },
        { name: 'Karnataka', capital: 'Bangalore' },
      ],
    },
    {
      country: 'USA',
      states: [
        { name: 'Cali', capital: 'sacr' },
        { name: 'kolifornia', capital: 'aust' },
        { name: 'flora', capital: 'tall' },
      ],
    },

    {
      country: 'Australia',
      states: [
        { name: 'Queen', capital: 'Brisban' },
        { name: 'Victoria', capital: 'Melbourne' },
        { name: 'Tasmania', capital: 'Hobart' },
      ],
    },
  ];
  
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [capitleCity, setCapitleCity] = useState('');
  
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState('')
    setCapitleCity('')
  };

  // console.log(countryStateCityData.map((item)=>{

  //   return item?.country
  // }))

  

  const handleStateChange = (e) =>{

    const state = e.target.value

    setSelectedState(state)

    // console.log(state, "state")

    const countryState = countryStateCityData.find((countries)=>countries.country === selectedCountry)
    // console.log(countryState, "countryState")

    const stateData = countryState.states.find((item)=>item.name === state)

    // console.log(stateData, "stateData")
    setCapitleCity(stateData?.capital || "")

  }

  // console.log(selectedCountry, "selectedCountry")

  // const findStateName = countryStateCityData.find((items)=>items.country == selectedCountry)?.states.map((item)=>{
  //   console.log(item.name)
  // })

  // console.log(findStateName, "findStateName")

  // console.log(capitleCity, "capitleCity")

  const filterStates = countryStateCityData.filter((item)=> item.country===selectedCountry)?.[0]?.states.map((item)=>{
    console.log(item.name)
  })

  console.log(filterStates, "filterStates")

  return (
    <div>
      {/* Country Input */}
      <label>
        Select Country:
        <select value={selectedCountry} onChange={handleCountryChange}>
          <option value="">Select a country</option>
          {countryStateCityData.map((item) => (
            <option key={item?.country} value={item?.country}>
              {item?.country}
            </option>
          ))}
        </select>
      </label>
      <br />

      {/* State Input */}
      <label>
        Select State:
        <select
        value={selectedState}
        onChange={handleStateChange}
        disabled={!selectedCountry}
        >
          <option value="">Select a state</option>
          {
            selectedCountry && countryStateCityData.filter((items)=>items?.country == selectedCountry)?.[0]
            .states.map((state)=>(
              <option key={state?.name} value={state?.name}>
                {state?.name}
              </option>
            ))
          }
        </select>
      </label>
      <br />

      {/* Capital City Input */}
      <label>
        Capital City:
        <input type="text" value={capitleCity}/>
      </label>
    </div>
  );
};

export default CountryStateCitySelector;
