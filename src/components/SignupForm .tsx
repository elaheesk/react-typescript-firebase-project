import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignupForm: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful! You can now log in.");
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={handleSignup}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default SignupForm;
