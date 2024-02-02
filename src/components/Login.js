import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidateFormData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase.config";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import { BANNER_BG_ORIGINAL_IMG } from '../utils/constant';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true);
    const [errorMsg, setErrorMsg] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleButtonClick = () => {
        //validation form
        const message = checkValidateFormData(email.current.value, password.current.value);
        setErrorMsg(message);
        if (message) return;
        // sign in/ sign up
        if (isSignInForm) {
            // sign up logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value)
                .then((userCredentials) => {
                    const user = userCredentials.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: "https://avatars.githubusercontent.com/u/48983045?v=4"
                    }).then(() => {
                        const {email, uid, displayName, photoURL} = auth.currentUser;
			            dispatch(addUser({email: email, uid: uid, displayName: displayName, photoURL: photoURL}));
                        navigate('/browse');
                    }).catch((error) => {
                        setErrorMsg(error.message);
                    });

                })
                .catch((error) => {
                    setErrorMsg(error.code + '-' + error.message);
                })
        } else {
            // Sign in Logic
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            ).then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/browse');
            })
                .catch((error) => {
                    setErrorMsg(error.code + '-' + error.message);
                });
        }
    }

    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute height-100vh'>
                <img src={BANNER_BG_ORIGINAL_IMG}  alt="bg" />
            </div>
            <div >
                <form onSubmit={(e) => e.preventDefault()} className='absolute p-12 bg-black my-36 mx-auto right-0 left-0 flex flex-col
                 justify-center' style={{ width: '420px', opacity: '0.8' }}>
                    <h1 className='font-bold text-3xl text-white'>{isSignInForm ? 'Sign Up' : 'Sign In'}</h1>
                    {isSignInForm &&
                        <input ref={name} type="text" placeholder='Full Name'
                            className='p-3 my-5 rounded-md focus: border-none' />
                    }
                    <input ref={email} type="text" placeholder='Email Address'
                        className='p-3 my-5 rounded-md focus: border-none' />
                    <input ref={password} type="password" placeholder='Password'
                        className='p-3 my-5 rounded-md' />
                    <p className='text-red-500'>{errorMsg}</p>
                    <button className='p-3 my-4 text-white bg-red-600 rounded-md'
                        onClick={handleButtonClick}>
                        {isSignInForm ? 'Sign Up' : 'Sign In'}</button>
                    <p className='py-6 text-white cursor-pointer' onClick={toggleSignInForm}
                    > {isSignInForm ? 'New to Netflix? Sign up Now' : 'Already a member. Sign In'}</p>
                </form>
            </div>
        </div>
    )
}

export default Login;