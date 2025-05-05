import React, { useState } from "react";
import Profile from "./components/Profile";
import Intrest from "./components/Intrest";
import Settings from "./components/Settings";
import './styles.css'

const Tabs = () => {

    const Tabsdata = [
        {
            name: "Profile",
            component: Profile,
            validate: () => {
                const errors = {}

                if(!data.name || data.name.length <2){
                    errors.name = "Invalid Name"
                }

                if(!data.age || data.age<18){
                    errors.age = "Invalid age"
                }

                if(!data.email || data.email.length<2){
                    errors.email = "Invalid Email"
                }

                setErrors(errors)

                return errors.name || errors.age || errors.email ? false : true
            }
        },
        {
            name: "Intrest",
            component: Intrest,
            validate: () => {

                const errors = {}

                if(data.intrest.length <1){
                    errors.intrest = "Select any one intrest"
                }

                setErrors(errors)

                return errors.intrest ? false : true
            }
        },
        {
            name: "Settings",
            component: Settings
        }
    ]

    const [activeTab, setActiveTab] = useState(0)

    const [data, setData] = useState({
        name: "",
        age: "",
        email: "",
        intrest: ["coding", "javascript"],
        theme: "dark"
    })

    const [errors, setErrors] = useState({})

    const tabClick = (index) => {
        if(index <= activeTab || Tabsdata[activeTab]?.validate()){
            setActiveTab(index)
        }
      
    }

    const AciveTabcomponent = Tabsdata[activeTab]?.component

    const handlenextClick = () => {
        if(Tabsdata[activeTab]?.validate()){
            setActiveTab(prevState=> prevState + 1)
        }
        
    }


    const handlePrevClick = () => {
        setActiveTab(prevState=> prevState-1)
    }

    const handleSubmit = () => {
        alert("Data submitted successfully")
    }

    console.log(errors, "errors")

    return (
        <div>

            {/* header */}
            <div className="header-container">

                {
                    Tabsdata.map((tab, index) => (
                        <div className="header" onClick={() => tabClick(index)}>
                            {tab.name}
                        </div>
                    ))
                }

            </div>

            {/* Body */}

            <div className="tab-body">

                <AciveTabcomponent data={data} setData={setData} errors={errors} />

            </div>

            {/* Footer */}

            <div className="footer">

                {
                    activeTab >0 && <button onClick={handlePrevClick}>Prev</button>
                }

                {
                    activeTab < Tabsdata.length - 1 && <button onClick={handlenextClick}>Next</button>
                }

                {
                    activeTab === Tabsdata.length -1 && <button onClick={handleSubmit}>Submit</button>
                }

            </div>







        </div>
    )
}

export default Tabs