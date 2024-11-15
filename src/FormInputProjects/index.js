import React, { useState, useEffect } from "react"
import './index.css'

const FormInputs = () => {

    const [data, setData] = useState([])
    const [formData, setFormData] = useState({ name: "", email: "" })
    const [isEditing, setIsEditing] = useState(null)
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })

         // Clear error for the specific field if valid
         setErrors((prevErrors) => {
            const updatedErrors = { ...prevErrors };
            if (name === "name" && value.trim() !== "") {
                delete updatedErrors.name;
            }
            if (name === "email" && emailRegex.test(value)) {
                delete updatedErrors.email;
            }
            return updatedErrors;
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleValidation = () =>{
        const newErrors = {}

        if(!formData.name.trim()){
            newErrors.name = "Name cannot be empty"
        }

        if(!formData.name.trim()){
            newErrors.email = "Email cannot be empty"
        }

        else if(!emailRegex.test(formData.email)){
            newErrors.email = "Email format in invalid"

        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!handleValidation()) return;

        if(isEditing !== null){
            const updatedData = data.map((item,index)=> {
                return index === isEditing ? formData : item
            })
            setData(updatedData)
            setIsEditing(null)
        }

        else{
            setData([...data, formData])
        }
     
        setFormData({
            name: "",
            email: ""
        })
    }

    const handleDelete = (id) => {
        const updatedData = data && data.filter((item, index)=> index !== id)
        setData(updatedData)
        setFormData({
            name: "",
            email: ""
        })
    }

    const handleEdit = (id) =>{
        setIsEditing(id)
        const findEditinguser = data.find((item, index)=> index === id)

        console.log(findEditinguser, "findEditinguser")
        setFormData(findEditinguser)

    }

    //console.log(formData, "formData")
    console.log(data, "data")

    return (
        <div className="parentBody">
            <h3>{"Add User Entry"}</h3>

            {/* Form inputs */}
            <form className="formStyles" onSubmit={handleSubmit}>
                {/* For Name entry */}
                <div style={{ marginBottom: "10px" }}>
                    <label>
                        {"Name"}

                        <input
                            placeHolder="Enter Name"
                            className="nameField"
                            value={formData.name}
                            name="name"
                            onChange={handleChange}
                        />
                    </label>
                </div>

                {errors.name && <span style={{color: "red", marginLeft: "10px"}}>{errors.name}</span>}

                {/* For Email entry */}

                <div style={{ marginBottom: "10px" }}>
                    <label>
                        {"Email"}
                        <input
                            placeHolder="Enter Email"
                            className="emailField"
                            value={formData.email}
                            name="email"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {errors.email && <span style={{color: "red", marginLeft: "10px"}}>{errors.email}</span>}

                <button
                    className="submitButton"
                    type="submit"
                >{ isEditing !== null ? "Update" : "Add"}

                </button>
            </form>

            {/* Data Table */}

            <h2>{"Data Table"}</h2>

            <table className="tableStyles" border={1} cellPadding={10}>
                <thead>
                    <tr>
                        <th style={{ width: "35%" }}>{"Name"}</th>
                        <th style={{ width: "35%" }}>{"Email"}</th>
                        <th style={{ width: "15%" }}>{"Edit"}</th>
                        <th style={{ width: "15%" }}>{"Delete"}</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data && data.length > 0 && data.map((item, index) => (
                            <tr key={index}> 
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={()=>handleEdit(index)}>{"Edit"}</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleDelete(index)}>{"Delete"}</button>
                                </td>

                            </tr>

                        ))
                    }

                </tbody>
            </table>
        </div>
    )

}

export default FormInputs