import {useContext, useState} from 'react'
import {Link} from 'react-router-dom'
import {UserContext} from '../context/UserContext';
import '../index.css';

const Register = () => {
    const {registerUser, wait} = useContext(UserContext);
    const [errMsg, setErrMsg] = useState(false);
    const [successMsg, setSuccessMsg] = useState(false);
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        password:'',
        department:''
    });
console.log(formData);
    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setSuccessMsg(false);
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }

        const data = await registerUser(formData);
        if(data.success){
            e.target.reset();
            setSuccessMsg('You have successfully registered.');
            setErrMsg(false);
        }
        else if(!data.success && data.message){
            setSuccessMsg(false);
            setErrMsg(data.message);
        }
        
    }

    return (
        <div className='cont'>
            <div className="img"> <img src={require('../pexels-vecislavas-popa-1571460.jpg').default} alt="img"></img> </div>
        <div className="myform">
           
            <form onSubmit={submitForm}>
               
                <label htmlFor="name" ></label>
                <input type="text" name="name" onChange={onChangeInput} placeholder="Your name" id="name" value={formData.name}  />
               
               
               
                <label htmlFor="email"></label>
                <input type="email" name="email" onChange={onChangeInput} placeholder="Your email" id="email" value={formData.email}  />
                
                
                <label htmlFor="password"></label>
                <input type="password" name="password" onChange={onChangeInput} placeholder="New password" id="password" value={formData.password}  />
               
                <label htmlFor="department"> </label>
                <select type="text" name="department" onChange={onChangeInput}  id="department" value={formData.department}  >
                  
                    <option value="" selected> select your department</option>
                    <option value="it"> IT</option>
                    <option value="accounting"> accounting  </option>
                    <option value="management">  management</option>
                    </select>
                
                
                {successMsg && <div className="success-msg">{successMsg}</div>}
                {errMsg && <div className="err-msg">{errMsg}</div>}
               
               
                <button type="submit" disabled={wait}>Sign Up</button>
                <div className="bottom-link">already have an account ? &nbsp; &nbsp;<Link to="/login"><button className='loginbutton'>Login</button></Link></div>
            </form>
        </div></div>
    )
}

export default Register;
