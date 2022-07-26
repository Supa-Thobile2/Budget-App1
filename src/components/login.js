import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'

function Login(){
    const btn = {
        width: '150px',
        height: '30px',
        marginTop: '3%'
    };

    let history = useHistory();
    const login =(()=>{
        history.push('/home')
    });
    
    return(
       
        <div className="container">
            <h1>Login</h1>

            <input type="email" placeholder="email"/><br></br>
            <input type="password" placeholder="password"/><br></br>
            <button style={btn} onClick={login}>Login</button><br></br>
            <span>
                Don't have an account
            </span><br></br>
            <span>
                <Link to="/sign-up">Create account here</Link>
            </span>

        </div>
    )
}

export default Login