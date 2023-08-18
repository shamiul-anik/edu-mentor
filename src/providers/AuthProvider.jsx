import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import {app} from '@/firebase/firebase.config.js';
import { useState, useEffect } from 'react';
import axios from 'axios';
import AuthContext from "@/providers/AuthContext";



const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userRole, setUserRole] = useState("");
	const [loading, setLoading] = useState(true);
	const [loadingRole, setLoadingRole] = useState(true);

	// useEffect(() => {
	// 	if(user) {
	// 		axios(`${import.meta.env.VITE_API_URL}/users/${user?.email}`).then(
	// 			(data) => {
	// 				setUserRole(data?.data?.role);
	// 			}
	// 		);
	// 		setLoadingRole(false);
	// 	}
	// }, [user]);

	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	}

	const logIn = (email, password) => {
		setLoading(true);
		return signInWithEmailAndPassword(auth, email, password);
	}

	const logOut = () => {
		setLoading(true);
		return signOut(auth);
	}
	
	const resetPassword = (email) => {
		setLoading(true);
		return sendPasswordResetEmail(auth, email);
	}

	const signInWithGoogle = () => {
		setLoading(true);
		return signInWithPopup(auth, googleAuthProvider);
	}

    const updateUserProfile = async(updateUser = {}) => {
        setLoading(true);
        await updateProfile(auth, updateUser);
        setUser((preUser) => ({...preUser, ...updateUser}))
    }
	
	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			console.log('Auth Change Observer', currentUser)
			setUser(currentUser);
			// get and set token
			// if (currentUser) {
			// 	axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: currentUser.email })
			// 		.then(data => {
			// 			// console.log(data.data.token)
			// 			localStorage.setItem('access-token', data?.data?.token)
			// 			setLoading(false);
			// 		})
			// }
			// else {
			// 	localStorage.removeItem('access-token');
				setLoading(false);
			// }
		});

		return () => {
			unSubscribe();
		}
	}, [])

	const authInfo = {
		user,
		setUser,
		userRole, 
		setUserRole,
		loadingRole,
		loading,
		setLoading,
		createUser,
		updateUserProfile,
		logIn,
		resetPassword,
		signInWithGoogle,
		logOut
	}

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;