import React, { useState } from 'react'
import {useForm} from 'react-hook-form'

const Formhook1 = () => {
    const form = useForm()

    const {register, handleSubmit, formState, reset} = form
    const {errors} = formState

    const [submittedData, setSubmittedData] = useState([])

    const onSubmit = (data) => {
        //console.log(data, "submitteddata")
        setSubmittedData([...submittedData, data])
        reset()

    }

    console.log(submittedData, "submittedData")

    return(
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h2>Form Submit</h2>
            <form style={{display: "flex", flexDirection: "column", gap: "10px"}} onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Name</label>
                <input type="text"  id="username" {...register("usernameEntered",{
                    required: "User name Required"
                })}  />
                <p style={{color: "red", fontSize: "12px"}}>{errors?.usernameEntered?.message}</p>

                <label htmlFor='useremail'>Email</label>
                <input type="text" id="useremail" {...register("useremailEntered",{
                    required: "Email required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "invalid email",
                    },
                })}/>
                <p style={{color: "red", fontSize: "12px"}}>{errors?.useremailEntered?.message}</p>

                <button type="submit">Submit</button>
            </form>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        submittedData.map((usersDetails)=>(
                            <tr>
                                <td>{usersDetails.usernameEntered}</td>
                                <td>{usersDetails.useremailEntered}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Formhook1