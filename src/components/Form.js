import React from 'react'
import { useState } from 'react';
import { useHistory } from "react-router-dom"

import "./form.css"
export default function Form({ setPin }) {

    const history = useHistory()


    const [input, setInput] = useState({
        pin: "",
    })

    const pincode = () => {
        console.log("clicked")
        setPin(input.pin)
        history.push("/table")

    }

    const handleChange = e => {
        const { name, value } = e.target
        setInput({
            input,
            [name]: value
        })
    }


    return (
        <div class="container">
            <div class="overlay" id="overlay">
                <div class="sign-in" id="sign-in">
                    <h1>TechnoKart</h1>
                    <p>TechnoKart Consultancy Service LLP</p>
                    <button class="switch-button" id="slide-right-button" onClick={() => { window.open("https://in.linkedin.com/company/technokart-consultancy-services-llp?trk=public_jobs_topcard-org-name", '_blank'); }}>Check Here</button>
                </div>
                <div class="sign-up" id="sign-up">
                    <h1>Postal India</h1>
                    <p>You want to use PIN code of the city?</p>
                    <button class="switch-button" id="slide-left-button">Check Here</button>
                </div>
            </div>
            <div class="form">

                <div class="sign-up" id="sign-up-info">
                    <h1>Postal India</h1>
                    <p class="small">Get details by Pin Code</p>
                    <form id="sign-up-form">
                        <input type="text" name='pin' placeholder="Enter your PIN" value={input.pin} onChange={handleChange} required />
                        <button class="control-button up" onClick={pincode}>Get Details</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
