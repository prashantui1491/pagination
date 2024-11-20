import React from "react";
import DisplayFetchedInfo from "./Customhook/DisplayFetchedInfo"

function App() {

    const handleClick = () =>{
        alert("button Clicked")

    }
    return (
        <div className="App">
            <DisplayFetchedInfo/>


        </div>
    );
}

export default App;
