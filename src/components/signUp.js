import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../firebaseConfig/firebaseConfig";






function SignUp(){
    const btn = {
        width: '150px',
        height: '30px',
        marginTop: '3%'
    };

    const [email,setemail] = useState('');
    const [password, setpassword] = useState('');

    let history = useHistory();
    const Register =(()=>{
       
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push('/home');
        }).catch((error)=>{
            console.log(error);
        })
        
    });
   


    return(
        <div className="container">
            <h1>Register</h1>
            <input type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)}/><br></br>
            <input type="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/><br></br>
            <button style={btn} onClick={Register}>Register</button>
        </div>
    )
}

export default SignUp