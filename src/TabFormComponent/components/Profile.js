import React, {useState} from "react";

const Profile = ({data, setData, errors}) => {

    const handleOnchange = (e, item) => {
        setData((prevData)=>({
            ...prevData,
            [item]: e.target.value
        }))

    }

    return(
        <div>
            <h5>Iam Profile component</h5>
            <div style={{display: "flex", flexDirection: "column"}}>
                <label>Name</label>
                <input type="text" value={data.name} onChange={(e)=>handleOnchange(e, "name")} />
                {errors.name && <p className="error">{errors.name}</p>}

                <label>Age</label>
                <input type="number" value={data.age} onChange={(e)=>handleOnchange(e, "age")} />
                {errors.age && <p className="error">{errors.age}</p>}

                <label>Email</label>
                <input type="email" value={data.email} onChange={(e)=>handleOnchange(e, "email")}  />
                {errors.email && <p className="error">{errors.email}</p>}
            </div>
        </div>
    )
}

export default Profile