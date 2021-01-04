import React, { useState, useEffect} from 'react';
import axios from "axios";

import "../styles/SignUp.css"

import TextField from "@material-ui/core/TextField";
import SnackbarContent from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



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
                
            <form action=""
                    style={{
                    margin: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-around",
                    height: "300px",
                    }}>
                        
                <TextField 
                    type="email" 
                    name="email" 
                    id="email"
                    // value={email}
                    onChange={updateUser}
                    placeholder="Your email"
                    style={{ width: "70%" }}

                />
                <TextField 
                    type="password" 
                    name="password" 
                    id="password"
                    onChange={updateUser}
                    placeholder="Your password"
                    style={{ width: "70%" }}

                />
                <TextField 
                    type="password-confirmation" 
                    name="paswword-confirmation" 
                    id="password-confirmation"
                    onChange={updateUser}
                    placeholder="Your password"
                    style={{ width: "70%" }}

                />
                <TextField 
                    type="name" 
                    name="name" 
                    id="name"
                    onChange={updateUser}
                    placeholder="name"
                    style={{ width: "70%" }}

                />
                <TextField 
                    type="lastname" 
                    name="lastname" 
                    id="lastname"
                    onChange={updateUser}
                    placeholder="lastname"
                    style={{ width: "70%" }}

                />
                <Button type="submit" value="Soumettre" onClick={handleSubmit} style={{
                    backgroundColor: "blue",
                    display: "block",
                    flexWrap: "wrap",
                    width: "50%",
                    color: "white",
                    }}> 
                    Submit 
                </Button>
            </form>
 <SnackbarContent>Message : {alert} </SnackbarContent>
            
                
        </div>

    )
}

export default SignUp;