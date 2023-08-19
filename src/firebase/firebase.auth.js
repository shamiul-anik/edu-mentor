import { getAuth, GoogleAuthProvider } from "firebase/auth";

import app from "@/firebase/firebase.confige"

const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export default auth;