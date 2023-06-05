import { useContext, useEffect } from "react";
import { AuthProvider } from "../../../components/firebaseAuth/FirebaseAuth";
import { useRouter } from "next/router"; // Use "next/router" instead of "next/navigation"
import LoginPage from "../loginPage/LoginPage";

const ProtectedPage = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const router = useRouter();

    if (loading) {
        return <div>Loading now....</div>; // Return the loading indicator component
    }

    if (!user) {
        return <LoginPage />; // Return the LoginPage component
    }

    return (
        <div>{children}</div>
    );
}

export default ProtectedPage;
