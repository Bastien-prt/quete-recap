import React, { useState, useEffect} from 'react';
import axios from "axios";

import "../styles/SignUp.css"

const SignUp= () => {
    const [alert, setAlert] = useState(""); 
    const [user, SetUser] = useState({
        email:'',
        password:'',
        name:'',
        lastname:'',
    })


const updateUser = (e) =>{
    SetUser({ ...user, [e.target.name]: e.target.value})
}

const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", {
          ... user})
      .then((res) => res.data)
      .then(
        (res) => setAlert(res.flash),
        (err) => setAlert(err.flash)
      );
}


   return (
        <div>
            <h1> Your informations :  </h1>
            <form action="">
                <input 
                    type="email" 
                    name="email" 
                    id="email"
                    // value={email}
                    onChange={updateUser}
                    placeholder="Your email"
                />
                <input 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={updateUser}
                    placeholder="Your password"
                />
                <input 
                    type="password-confirmation" 
                    name="paswword-confirmation" 
                    id="password-confirmation"
                    onChange={updateUser}
                    placeholder="Your password"
                />
                <input 
                    type="name" 
                    name="name" 
                    id="name"
                    onChange={updateUser}
                    placeholder="name"
                />
                <input 
                    type="lastname" 
                    name="lastname" 
                    id="lastname"
                    onChange={updateUser}
                    placeholder="lastname"
                />
                <input type="submit" value="Soumettre" onClick={handleSubmit}/>
            </form>
            <p> Message : {alert}</p>
            
                
        </div>

    )
}

export default SignUp;