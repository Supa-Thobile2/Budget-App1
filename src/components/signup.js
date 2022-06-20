import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function signUp(){

    const btn = {
        width: '150px',
        height: '30px',
        marginTop: '3%',
    }
    let history = useHistory()
    const Register = (()=>{
        history.push('/home')
    })
    return(
        <div className="Container">
            <h1>Register account here</h1>
            <input type="email" placeholder="Enter your email" /><br/><br/>
            <input type="password" placeholder="Enter your password" />

            <button style={btn} onClick={Register}>Sign Up</button>

            <span>Already have an account</span> <span>
                <Link to='/Login'> Login</Link>
               
                </span>


        </div>
    );
}

export default signUp