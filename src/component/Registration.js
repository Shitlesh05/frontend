import React, {useState, useEffect} from 'react'
import Login from './Login';
import {Link} from 'react-router-dom';



function Registration() {
    
    const LOCAL_STORAGE_KEY = "Info";

    const [Info, setInfo] = useState({
        prn:"",
        name:"",
        email:"",
        password:"",
        profession:"",
        mobile:""
    });

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setInfo(retriveContacts);
    }, [])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(Info))
    },[Info])

    let register = (e) =>{
        e.preventDefault()

        if (!Info.prn || Info.name || !Info.email || !Info.password || !Info.profession || Info.mobile) {
            alert("Complete all the fields!!!")
            return
        }
    }

    return (
        <form onSubmit={register}>
            <div className='main'>
                <div className='sub-main'>
                    <div>
                        <div>
                            <h1>Registration</h1>
                            <div>
                                <input type="text" placeholder='Enter PRN' className='fill' value={Info.prn} onChange={(e) => setInfo({...Info, prn: e.target.value})}/>
                            </div><br/>
                            <div>
                                <input type="text" placeholder='Enter Name' className='fill' value={Info.name} onChange={(e) => setInfo({...Info, name: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                <input type="email" placeholder='Enter Email-id' className='fill' value={Info.email} onChange={(e) => setInfo({...Info, email: e.target.value})}/>
                            </div>
                            <div className='mail-id'>
                                <input type="password" placeholder='Enter Password' className='fill' value={Info.password} onChange={(e) => setInfo({...Info, password: e.target.value})}/>
                            </div>
                            <div className='select'>
                                <select value={Info.profession} onChange={(event) => setInfo({ ...Info, profession: event.target.value })}>
                                    <option>Teacher</option>
                                    <option>Student</option>
                                </select>
                            </div>
                            <div>
                                <input type="text" placeholder='Enter Mobile Number' className='fill' value={Info.mobile} onChange={(e) => setInfo({...Info, mobile: e.target.value})}/>
                            </div>
                            <div className='login-btn'>
                                <Link to='/home'>
                                    <button type="submit">Register</button>
                                </Link>
                            </div>
                            <div className='reg-link'>
                                <p>If Account exist then</p><Link className='link' to='/login'><li>Login!!!</li></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Registration