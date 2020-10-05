import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import logo from "../images/logo.png" ;
import eventObj from './eventObjData';

const Register = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { key } = useParams();
    const clickedEvent = eventObj.find(x => x.id === key);
    return (
        <div>
             <img className="Loginlogo" src={logo} alt=""/>
             <div className="register">
                 <h3>Register as a Volunteer</h3>
                 <input type="text" value={loggedInUser.user}/>
                 <input type="text" value={loggedInUser.email}/>
                 <input type="datetime-local" name="" id=""/>
                 <input type="text" placeholder="Description"/>
                 <input type="text" value={clickedEvent.name}/>
                 <button className="btn btn-primary">Register</button>
             </div>
        </div>
    );
};

export default Register;