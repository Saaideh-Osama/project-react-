import {useState,useContext} from 'react';
import { Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import '../index.css';
const Login = () => {
    const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })

    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await loginUser(formData);
        if(data.success){
            e.target.reset();
            setRedirect('Redirecting...');
            await loggedInCheck();
            return;
        }
        setErrMsg(data.message);
    }

    return (                         
        <div className='cont'>    
        <div className="img"> <img src={require('../pexels-vecislavas-popa-1571460.jpg').default} alt="img"></img> </div>
            <div className="myform">
            
            <form onSubmit={submitForm}>
                <p className="logintitle"> LOG IN</p>
                <label htmlFor="email"></label>
                
                <input type="text" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email}  />
                <label htmlFor="password"></label>
                <input type="password" name="password" onChange={onChangeInput} placeholder="New password" id="password" value={formData.password}  />
                {errMsg && <div className="err-msg">{errMsg}</div>}
                {redirect ? redirect : <button type="submit" disabled={wait} className="logbtn">Login</button>}
                <div className="bottom-link"><Link to="/signup"><button className='loginbutton'>Sign Up</button></Link></div>
            </form>
        </div>
        </div>
 
    )
}

export default Login;