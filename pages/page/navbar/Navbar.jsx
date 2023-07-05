import { useContext, useState } from "react";
import Link from "next/link";
import { AuthProvider } from "../../../components/firebaseAuth/FirebaseAuth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const { user, logOutAccount } = useContext(AuthProvider)

    const router = useRouter();
    // Login logOut button condition
    const logOutHandler = () => {

        if (confirm("Are you sure you want to log out")) {

            logOutAccount()
                .then(() => {
                    toast.warning("logout successful")
                    router.push("/page/loginPage/LoginPage")
                })
                .catch(err => console.log(err))
        } else {
            return
        }
    }

    return (

        <nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link href="/">
                            <h2 className="text-2xl font-bold">LOGO</h2>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"
                            }`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <li>
                                <Link
                                    className="text-darkblue transition hover:text-darkblue/75"
                                    href="/"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-darkblue transition hover:text-darkblue/75"
                                    href="/"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-darkblue transition hover:text-darkblue/75 focus:underline
                                    active:underline active:text-primary"
                                    href="/page/drAppointment/DrAppointment"
                                >
                                    Appointment
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-darkblue transition hover:text-darkblue/75"
                                    href="/"
                                >
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className="text-darkblue transition hover:text-darkblue/75"
                                    href="/"
                                >
                                    Blog
                                </Link>
                            </li>
                            {/* LogIn LogOut Button */}
                            <li>{
                                user?.email ?
                                    <Link
                                        className="rounded-md bg-red opacity-85 hover:opacity-70 focus:opacity-70 text-white px-5 py-2.5 text-sm font-medium  shadow"
                                        onClick={logOutHandler} href="">
                                        Logout
                                    </Link>
                                    :
                                    <Link
                                        className="rounded-md bg-primary text-white px-5 py-2.5 text-sm font-medium  shadow"
                                        href="/page/loginPage/LoginPage" >
                                        Login
                                    </Link>



                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>



    );
}

export default Navbar;