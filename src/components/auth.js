import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

export const Auth = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");


    const signIn = () => {

    }

    return(
        <div>
            <input placeholder="Email..."></input>
            <input placeholder="Password..."></input>
            <button onClick={signIn}>Sign in</button>
        </div>
    )
}