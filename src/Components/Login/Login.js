import React, { useState } from 'react'
import { login } from '../../features/userSlice';
import { auth } from '../../firebase';
import './Login.css'
import { useDispatch } from 'react-redux'

function Login() {

    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[profilePic, setProfilePic] = useState("");

    const dispatch = useDispatch();

    const register = () => {
            if(!name) {
                return alert("Please enter a full name.");
            }
            auth
            .createUserWithEmailAndPassword(email, password)
            .then((userAuth) => {
                userAuth.user
                .updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                })
                .then(() => {
                    dispatch(
                        login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name,
                        photoUrl: profilePic,
                    })
                );
            });
        })
            .catch(error => alert(error));
    };

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email:userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }));
        }).catch(error => alert(error));
    };

    return (
        <div className="login">
            <img src="https://www.pngitem.com/pimgs/m/579-5792572_linkedin-logo-png-linkedin-logo-svg-transparent-png.png" alt="" 
            />
            <form>
                <input value={name} onChange={(e) => setName(e.target.value)}
                placeholder="full name(required if registering)" type= 'text' />

                <input value={profilePic} onChange={e =>setProfilePic(e.target.value)}placeholder='profile pic URL (optional)' type='text' />

                <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' />

                <input 
                value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)}
                type='password' />

                <button type='submit' onClick={loginToApp}>Sign In</button>
            </form>

                <p>Not a member?{" "}
                <span className="login__register" onClick={register}>Register Now</span>
                </p>
        </div>
    )
}

export default Login
