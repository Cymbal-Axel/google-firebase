import { auth } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const Auth = () => {
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