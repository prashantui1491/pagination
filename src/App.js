import React from "react";
import { Themeprovider } from "./Usecontectex1/Themeprovider";
import Toggletheme from "./Usecontectex1/Toggletheme";
import Timerstartpause from './timerstartpause'
import GroupingProducts from './GroupingProducts'
import GenerateTable from './GenerataTable'
import CssTest from './Css'

function App() {

    const handleClick = () => {
        alert("button Clicked")
    }
    return (
        <div className="App">
           {/* <Themeprovider>
           <Timerstartpause/>
           </Themeprovider> */}
           <CssTest/>
        </div>
    );
}

export default App;
