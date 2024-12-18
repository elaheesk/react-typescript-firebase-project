import { getAuth, signOut } from "firebase/auth";

const LogoutButton: React.FC = () => {
    const handleLogout = async () => {
        const auth = getAuth();
        try {
            await signOut(auth);
            window.location.reload(); // Refresh the page after logout
        } catch (err) {
            console.error("Error during logout", err);
        }
    };

    return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
