import '../App.css'
import {useNavigate} from 'react-router-dom';

function Homepage(){
    const navigate = useNavigate();
    return (
        <>
        <button className="signup-button" onClick={()=>{navigate('/signup')}}>Create Account</button>
        <hr></hr>
        <button className="signup-button" onClick={()=>{navigate('/usersList')}}>View Users</button>
        </>
    )
}

export default Homepage