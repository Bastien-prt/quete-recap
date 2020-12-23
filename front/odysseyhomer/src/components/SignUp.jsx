import React, { useState } from 'react';

function SignUp(){
    const [email, setEmail] = useState('')

    const updateEmailField = (e) =>{
        setEmail(e.target.value)
    }


    return (
        <div>
            <h1> Your email : {email} </h1>
            <input 
                type="email" 
                name="email" 
                id="email"
                value={email}
                onChange={updateEmailField}
                placeholder="Your email"/>
                
        </div>

    )
}

export default SignUp;