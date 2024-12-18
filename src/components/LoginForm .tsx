import React, { MouseEventHandler, useState } from "react";
import { getAuth, signInWithEmailAndPassword, signInAnonymously, createUserWithEmailAndPassword } from "firebase/auth";

interface LoginFormProps {
    onLogin: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleEmailLogin = async () => {
      
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            onLogin(); // Notify parent of successful login
        } catch (err: any) {
            setError(err.message);
        }
    };
    const handleSignup = async () => {
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful! You can now log in.");
        } catch (err: any) {
            setError(err.message);
        }
    };
    // Handle anonymous login
    const handleAnonymousLogin = async () => {
        const auth = getAuth();
        try {
            await signInAnonymously(auth);
            onLogin(); // Notify parent of successful login
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleEmailLogin}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    ></input>
                </div>
                
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                     >
                       Login with Email
                    </button>
            
            </form>
            <div className="flex flex-col">  
            <button className="inline-block align-baseline font-bold text-sm text-blue-500  focus:outline-none focus:shadow-outline" onClick={handleSignup}>Sign Up</button>
            <button className="inline-block align-baseline font-bold text-sm text-blue-500  focus:outline-none focus:shadow-outline" onClick={handleAnonymousLogin}>
                Login Anonymously
            </button>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
       
        </div>
    );
};

export default LoginForm;
