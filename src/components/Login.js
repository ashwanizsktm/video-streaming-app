import React, { useState } from 'react';
import Header from './Header';

const Login = () => {
    const [isSignInForm, setSignInForm] = useState(true)
    const toggleSignInForm = () => {
        setSignInForm(!isSignInForm);
    }

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="bg" />
            </div>
            <div >
                <form className='absolute p-12 bg-black my-36 mx-auto right-0 left-0 flex flex-col
                 justify-center' style={{ width: '500px', opacity: '0.8' }}>
                    <h1 className='font-bold text-3xl text-white'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                    {isSignInForm &&
                        <input type="text" placeholder='Full Name' className='p-3 my-5 rounded-md focus: border-none' />
                    }
                    <input type="text" placeholder='Email Address' className='p-3 my-5 rounded-md focus: border-none' />
                    <input type="password" placeholder='Password' className='p-3 my-5 rounded-md' />
                    <button className='p-3 my-4 text-white bg-red-600 rounded-md'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                    <p className='py-6 text-white cursor-pointer' onClick={toggleSignInForm}
                    > {isSignInForm ? 'Already a member. Sign In' : 'New to Netflix? Sign up Now'}</p>
                </form>
            </div>

        </div>
    )
}

export default Login;