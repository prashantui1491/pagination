import React from "react";
import { Themeprovider } from "./Usecontectex1/Themeprovider";
import Toggletheme from "./Usecontectex1/Toggletheme";
import Timerstartpause from './timerstartpause'

function App() {

    const handleClick = () => {
        alert("button Clicked")
    }
    return (
        <div className="App">
           <Themeprovider>
           <Timerstartpause/>
           </Themeprovider>
        </div>
    );
}

export default App;
