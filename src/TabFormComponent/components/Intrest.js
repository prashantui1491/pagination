import React, {useState} from "react";

const Intrest = ({data, setData, errors}) => {

    const handleOnchange = (e) => {
      setData((prevState)=>({
        ...prevState,
        intrest: e.target.checked ? [...prevState.intrest, e.target.name] : prevState.intrest.filter((int)=>int!== e.target.name)
      }))
    }

    return(
        <div>
            <h5>Iam Intrest component</h5>
            <div>
                <label> Coding</label>
                <input type="checkbox" name="coding" checked={data.intrest.includes("coding")} onChange={handleOnchange} />
            </div>

            <div>
                <label> Javascript</label>
                <input type="checkbox" name="javascript" checked={data.intrest.includes("javascript")} onChange={handleOnchange} />
            </div>

            <div>
                <label> Music</label>
                <input type="checkbox" name="Music" checked={data.intrest.includes("Music")} onChange={handleOnchange} />
            </div>

        {
             errors.intrest && <p className="error">{errors.intrest}</p>
        }
        </div>
    )
}

export default Intrest