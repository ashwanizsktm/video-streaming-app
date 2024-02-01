import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase.config';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { BANNER_BG_IMG } from '../utils/constant';

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector(store => store.user);
	useEffect(()=> {
		const authChangeSubscription = onAuthStateChanged(auth, (user) => {
			if (user) {
			  const {email, uid, displayName, photoURL} = user;
			  dispatch(addUser({email: email, uid: uid, displayName: displayName, photoURL: photoURL}));
			  navigate('/browse');
			} else {
				dispatch(removeUser());
				navigate('/');
			}
		  });
		// this'll unsubcribe when component unmounts...

		return () => authChangeSubscription();  
	}, []);

	// Sign out functionality
	const handleSignOut = () => {
		signOut(auth).then(() => {
			navigate('/');
		}).catch((error) => {
			return error.message;
		});
	}

	return (
		<div className='py-6 w-screen px-12 absolute z-10 bg-gredient-to-b from-black flex justify-between'>
			<img src= {BANNER_BG_IMG}
				alt="logo" width={'150px'} height={'80px'} />
			{ user && <div className='flex'>
				<img src={user?.photoURL} className='rounded-md mr-2' alt="userlogo" width={'50px'} height={'50px'} />
				<button className='btn btn-primary bg-red-900 text-white rounded-md cursor-pointer px-5 py-3'
					onClick={handleSignOut}>Sign out</button>
				</div>
			}
		</div>
	)
}

export default Header;