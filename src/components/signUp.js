import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function SignUp(){
    const btn = {
        width: '150px',
        height: '30px',
        marginTop: '3%'
    };

    let history = useHistory();
    const signUp =(()=>{
        history.push('/home')
    });


    return(
        <div className="container">
            <h1>Register</h1>
            <input type="email" placeholder="email"/><br></br>
            <input type="password" placeholder="password"/><br></br>
            <button style={btn} onClick={signUp}>Register</button>
        </div>
    )
}

export default SignUp