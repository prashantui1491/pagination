import React, {useState} from "react";

const Settings = ({data, setData}) => {

    const handleOnchange = (e) => {
        setData((prevState)=>({
            ...prevState,
            theme: e.target.name
        }))
    }

    return(
        <div>
            <h5>Iam Settings component</h5>
            <div>
                <label>Dark</label>
                <input type="radio" name="dark" checked={data.theme === "dark"} onChange={handleOnchange} />
            </div>

            <div>
                <label>Light</label>
                <input type="radio" name="light" checked={data.theme === "light"} onChange={handleOnchange} />
            </div>
        </div>
    )
}

export default Settings