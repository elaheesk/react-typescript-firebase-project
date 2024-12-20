import React, { useContext, useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signInAnonymously, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, } from "firebase/firestore";
import { db } from "../firebase";
import { IUsersLeavingReviews } from "../types";
import { useNavigate } from "react-router-dom";
import LoginSection from "../components/LoginSection";
import SignUpForm from "../components/SignUpForm";
import { loginOptions } from "../data";
import { UsersContext } from "../UsersContext";

const UserReviews = () => {
    const [tab, setTab] = useState<string>("");
    const [error, setError] = useState<string | null>(null);
    const { user, setUser, email, setEmail, setPassword, password, setReviewsList } = useContext(UsersContext);
    const navigate = useNavigate();

    const handleEmailLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setError("");
            navigate("/addReview");
            console.log("Logged in as user, Welcome! You can now leave a review or rank your favorite feature.");
        } catch (err: any) {
            setError("This email is not registered.Please sign up first or log in anonymously.");
            console.log(err);
        }
    };

    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        const auth = getAuth();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Signup successful! You can now log in.");
            setError("");
        } catch (err: any) {
            setError("This email is not registered.Please sign up first or log in anonymously.");
        }
    };


    const handleAnonymousLogin = async () => {
        const auth = getAuth();
        try {
            await signInAnonymously(auth);
            navigate("/addReview");
            setTab("anonymous");
            console.log("Logged in as anonymous user,Welcome! You can now leave a review or rank your favorite feature.");
        } catch (err: any) {
            setError(err.message);
            setTab("")
        }
    };
    const handleTabChange = (value: string) => {
        setTab(value);
    };


    const fetchReviews = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, "reviews"));
            const addedReviews: IUsersLeavingReviews[] = querySnapshot.docs.map((doc) => ({
                docId: doc.id,
                ...doc.data(),
            })) as IUsersLeavingReviews[];

            setReviewsList(addedReviews);
        } catch (error) {
            console.error("Error fetching reviews:", error);
        }
    };
    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("User is authenticated:", currentUser.uid);
                setUser(currentUser);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "forms"));
                const data = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                })) as any[];
                console.log("data",data)
            } catch (err: any) {
                setError(err.message);
                console.error("Error fetching data:", err);
            }
        };

        if (user) {
            fetchData();
        }
    }, [user]);

    useEffect(() => {
        fetchReviews();
    }, []);
    console.log(user)
    return (
        <div className="flex flex-col md:justify-self-center w-[67rem] mt-6 mb-4">
            <section className="flex flex-col md:flex-row justify-around">
                <div className="flex flex-col justify-start">
                    <LoginSection />
                    <div className="flex mt-6 flex-col max-w-xs gap-2">
                        {loginOptions.map((option) =>
                            <button
                                key={option.value}
                                type="button"
                                onClick={() => handleTabChange(option.value)}
                                className={`${option.bgColor} text-white px-4 py-2 rounded text-white flex justify-center items-center  w-full text-center font-semibold shadow-md rounded-lg ${tab === option.value ? "active" : ""
                                    }`}>
                                {option.title}
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={handleAnonymousLogin}
                            className="bg-green-500 text-white px-4 py-2 rounded text-white flex justify-center items-center  w-full text-center font-semibold shadow-md rounded-lg">
                            Log In anonymously
                        </button>
                    </div>
                </div>
                <div className="w-full max-w-xs mt-6">
                    {tab === "login" && (
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleEmailLogin}>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline">Log In</button>
                        </form>
                    )}
                    {tab === "signup" && (
                        <SignUpForm submitHandler={handleSignup} onLogin={() => window.location.reload()} email={email} setEmail={setEmail} password={password} setPassword={setPassword} tab={tab} />
                    )}
                </div>
            </section>
        </div>
    )
}
export default UserReviews;