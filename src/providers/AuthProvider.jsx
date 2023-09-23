"use client"
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '@/firebase/firebase.config.js';
import { useEffect, useState } from 'react';
import AuthContext from "@/contexts/AuthContext"
import getUser from "@/utils/getUser";
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
import setJWT from "@/utils/setJWT";

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [userData, setUserData] = useState([]);
	const [userRole, setUserRole] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user) {
			const fetchUserData = async () => {
				const userData = await getUser(user?.email);
				setUserData(userData);
				setUserRole(userData?.role);
				// console.log(userRole); // This should show the updated value.
			};
			fetchUserData()
		}
	}, [user, userRole]);

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
		const tokenData = {
			email : null
		}
		setJWT(tokenData)
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

	const updateUserProfile = (updateUser) => {
		console.log(updateUser);
		setLoading(true);
		updateProfile(auth.currentUser, updateUser);
		setUser((preUser) => ({ ...preUser, ...updateUser }))
	}

	useEffect(() => {
		const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
			// console.log('Auth Change Observer', currentUser)
			setUser(currentUser);
			setLoading(false);
		});
		const tokenData = {
			email : user?.email 
		}	
		setJWT(tokenData)
		
		return () => {
			unSubscribe();
		}
	}, [user?.email])

	const authInfo = {
		user,
		userData,
		setUser,
		userRole,
		setUserRole,
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