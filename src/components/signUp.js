import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




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
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push('/home');
        }).catch(()=>{})
        
    });
   


    return(
        <div className="container">
            <h1>Register</h1>
            <input type="email" placeholder="email"/><br></br>
            <input type="password" placeholder="password"/><br></br>
            <button style={btn} onClick={Register}>Register</button>
        </div>
    )
}

export default SignUp