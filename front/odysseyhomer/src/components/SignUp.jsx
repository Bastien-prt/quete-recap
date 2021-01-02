import React, { useState } from 'react';

import "../styles/SignUp.css"

function SignUp(){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [name, setName] = useState('')
    const [lastname, setLastname] = useState('')

    const data = {
        email,
        password,
        passwordConfirmation,
        name,
        lastname
    }

    const dataString= JSON.stringify(data)



    const updateEmailField = (e) =>{
        setEmail(e.target.value)
    }
    const updatePasswordField = (e) =>{
        setPassword(e.target.value)
    }
    const updatePasswordConfirmationField = (e) =>{
        setPasswordConfirmation(e.target.value)
    }
    const updateNameField = (e) =>{
        setName(e.target.value)
    }
    const updateLastnameField = (e) =>{
        setLastname(e.target.value)
    }


    const handleSubmit = (e) => {
        console.log(data)
        e.preventDefault();
    }

   return (
        <div>
            <h1> Your informations : <div className="data">{dataString} </div> </h1>
            <form action="">
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={updateEmailField}
                    placeholder="Your email"
                />
                <input 
                    type="password" 
                    name="paswword" 
                    id="password"
                    value={password}
                    onChange={updatePasswordField}
                    placeholder="Your password"
                />
                <input 
                    type="password-confirmation" 
                    name="paswword-confirmation" 
                    id="password-confirmation"
                    value={passwordConfirmation}
                    onChange={updatePasswordConfirmationField}
                    placeholder="Your password"
                />
                <input 
                    type="name" 
                    name="name" 
                    id="name"
                    value={name}
                    onChange={updateNameField}
                    placeholder="name"
                />
                <input 
                    type="lastname" 
                    name="lastname" 
                    id="lastname"
                    value={lastname}
                    onChange={updateLastnameField}
                    placeholder="lastname"
                />
                <input type="submit" value="Soumettre" onClick={handleSubmit}/>
            </form>
            
                
        </div>

    )
}

export default SignUp;