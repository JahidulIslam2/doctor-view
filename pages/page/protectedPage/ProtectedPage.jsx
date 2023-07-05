import { useContext, useEffect } from "react";
import { AuthProvider } from "../../../components/firebaseAuth/FirebaseAuth";
import { useRouter } from "next/router"; // Use "next/router" instead of "next/navigation"
// import LoginPage from '../../loginPage/LoginPage';

const ProtectedPage = ({ children }) => {
    const { user, loading } = useContext(AuthProvider);
    const router = useRouter();


    const userIsAuthenticated = user !== null;  //if user is not authenticated

    useEffect(() => {
        if (!userIsAuthenticated) {
            router.push("/page/loginPage/LoginPage")
        }
    }, [userIsAuthenticated, router])

    if (loading) {
        return <div>Loading...</div>;
    }



    return (
        <div>{children}</div>
    );
}

export default ProtectedPage;
