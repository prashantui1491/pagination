import React, {useState } from "react"

const CountryStateCitySelector1 = () => {


    const countryStateCityData = [
        {
            country: "India",
            states: [
                { name: "Karnataka", capitle: "Bangalore" },
                { name: "Maharstara", capitle: "Mumbai" }
            ]
        },

        {
            country: "USA",
            states: [
                { name: "Califirnoa", capitle: "LA" },
                { name: "Vasueloine", capitle: "Alop" }
            ]
        }
    ]

    console.log(countryStateCityData, "countryStateCityData")

    const [selectedCountry, setSelectedCountry] = useState("")
    const [selectedState, setSelectedState] = useState("")
    const [capitleCity, setCapitleCity] = useState("")

    const handleCountryChange = (e) => {
        const country = e.target.value
        setSelectedCountry(country)
        setSelectedState("")
        setCapitleCity("")

    }

    const handleStateChange = (e) => {
        const state = e.target.value

        setSelectedState(state)

        const countryDate = countryStateCityData.find((item)=> item.country === selectedCountry)

        const statesData = countryDate.states.find((item)=> item.name === state)

        console.log(statesData, "statesData")

        setCapitleCity(statesData?.capitle)
    }

    return (
        <div style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            textAlign: "center"
        }}>
            <div>
                <label>{"Country: "}</label>

                <select value={selectedCountry} onChange={handleCountryChange} >

                    <option value="">{"Select a Country"}</option>
                    {
                        countryStateCityData.map((item) => (
                            <option>
                                {item.country}
                            </option>

                        ))
                    }

                </select>
            </div>
            <br/>
       

            <label>{"State: "}</label>
            <select value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
                <option value={""}>{"Select State"}</option>
                {
                    selectedCountry && countryStateCityData.filter((item)=> item.country === selectedCountry)?.[0]?.states.map((item)=>(
                        <option>
                            {item.name}
                        </option>
                    ))
                }
            </select>
            <br/>
            <br/>

            <label>{"Capitle City: "}</label>
            <input type="text" value={capitleCity}/>


        </div>
    )
}

export default CountryStateCitySelector1