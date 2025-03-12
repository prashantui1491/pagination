import React, { useState } from "react";
import { useForm } from 'react-hook-form'

const Formhook2 = () => {

    const form = useForm()

    const { register, handleSubmit, reset, formState, watch, setValue, getvalue } = form

    const { errors } = formState

    const [submittedData, setSubmittedData] = useState([])
    const [showpassword, setShowPassword] = useState(false)

    const onSubmit = (data) => {
        setSubmittedData([...submittedData, data])
    }

    console.log(submittedData, "submittedData")
    console.log(errors, "errors")


    const watcheUserName = watch("Name")
    const watchEmail = watch("Email")

    console.log(watcheUserName, watchEmail)


    const autoFillEmail = () => {
        setValue("Email", "test@ex.com")
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px" }}>


                <label htmlFor="username">Name</label>
                <input type="text" placeholder="Enter name" id="username" {...register("Name", {
                    required: "Name required"
                })} />
                <p style={{ color: "red", fontSize: "12px" }}>{errors?.Name?.message}</p>



                <label htmlFor="useremail">Email</label>
                <input type="text" placeholder="Enter email" id="useremail" {...register("Email", {
                    required: "Email required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Invalid email format",
                    },

                })} />
                <p style={{ color: "red", fontSize: "12px" }}>{errors?.Email?.message}</p>
                <button type="button" onClick={autoFillEmail}>Auto Fill</button>


                <div style={{display: "flex"}}>

                    <label htmlFor="userpassword">Password</label>
                    <input type= {showpassword ? "text" : "password"} placeholder="Enter password" id="userpassword" {...register("Password", {
                        required: "password Required",
                        minLength: { value: 6, message: "Minimum 6 char required" }
                    })} />
                  <button type="button" onClick={()=>setShowPassword(!showpassword)}>{showpassword ? "Hide" : "Show"}</button>

                </div>
                <p style={{ color: "red", fontSize: "12px" }}>{errors?.Password?.message}</p>


                <button type="submit">Submit</button>

            </form>

            <div>
                Live input preview
                <p>UserName: {watcheUserName}</p>
                <p>UserEmail: {watchEmail}</p>

            </div>

            <div>
                <table border={2}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    {
                        submittedData.length > 0 ?

                            <tbody>

                                {
                                    submittedData.map((item) => (
                                        <tr>
                                            <td>{item.Name}</td>
                                            <td>{item.Email}</td>
                                            <td>{"*".repeat(item.Password.length)}</td>
                                        </tr>
                                    ))
                                }

                            </tbody>

                            : <p>No details found</p>
                    }
                </table>
            </div>
        </div>
    )
}

export default Formhook2