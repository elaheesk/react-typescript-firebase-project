import { loginDescription } from "../data";

const LoginSection = ({ email, setEmail, setPassword, password, handleSignup, handleEmailLogin, error }: any) => {
    return (
        <>
            <h1 className="text-xl text-gray-700 font-extrabold md:text-xl lg:text-4xl"> Login to Leave a Review</h1>
            <h2 className=" mt-6 text-lg font-semibold text-gray-900 dark:text-white">Choose how you want to log in:</h2>
            <ul className="list-disc list-inside">
                {loginDescription.map((description, idx) =>
                    <li className="mt-3" key={idx}>{description}</li>
                )}
            </ul>
        </>
    );
};

export default LoginSection;
