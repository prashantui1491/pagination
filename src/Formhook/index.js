import React from 'react'
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'


let renerCount = 0
const Formhook = () => {

    const form = useForm()

    const {register, control, handleSubmit, formState} = form
    const {errors} = formState

    const onSubmit = (data) => {
        console.log(data, "submitteddata")
    }

    renerCount++

    console.log(errors, "errors")
    return(
        <div style={{display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <h2>Youtubeform: ({renerCount/2})</h2>

            <form noValidate onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexDirection:"column", gap: "10px", width: "200px"}}>
                <label htmlFor='userName'>Name</label>
                <input type="text" id="userName" {...register("userName", {
                    required: "User name required"
                })} />
                <p>{errors?.userName?.message}</p>

                <label htmlFor='email'>Email</label>
                <input type="email" id="email" {...register("email", {
                    required: "Email required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "invalid email",
                    },
                   

                    validate: {
                        notadmin123: (fieldvalue) => {
                            return (
                                fieldvalue !== "admin@adm.com" || "Enter different email"
                            )
                        },

                        notBlackmail123: (fieldvalue) => {
                            return (!fieldvalue.endsWith("bad.com") || "blacklisted domain")
                        }
                    }
                })} />
                 <p style={{color:"red", fonrSize: "12px", textAlign: "left"}}>{errors?.email?.message}</p>

                <label htmlFor='channel'>Channel</label>
                <input type="text" id="channel" {...register("channel", {
                    required: "Channel required"
                })} />
                 <p>{errors?.channel?.message}</p>

                <button type="submit">Submit</button>
            </form>
            <DevTool control= {control}/>

        </div>
    )
}

export default Formhook