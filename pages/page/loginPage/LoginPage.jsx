import Image from "next/image";
import bgImg from "../../../public/assets/images/bgSignIn.jpg"
import Link from "next/link"
import SignUpPage from './../signUpPage/SignUpPage';
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { AuthProvider } from "../../../components/firebaseAuth/FirebaseAuth";
import { toast } from "react-toastify";
import { useRouter } from 'next/router';
import ResetPassword from './../resetPassword/ResetPassword';



const LoginPage = () => {
    const { signInWithEmail, signInWithGoogle } = useContext(AuthProvider)
    const [loginError, setLoginError] = useState(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const router = useRouter()

    // Function login With email and password
    const handleForm = (data) => {
        signInWithEmail(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success("Login successful")
                reset();
                router.push("/") // Redirect to the desired location, e.g., "/"
            })
            .catch(err => {
                setLoginError(err)
                // console.log(err)
            })
    }



    // Function login with Google popup service
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)
                router.push("/") // Redirect to the desired location, e.g., "/"
            })
            .catch(err => console.log(err))
    }

    // Error message remove after 3second
    useEffect(() => {

        if (loginError) {

            const timer = setTimeout(() => {
                setLoginError(null)
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [loginError])



    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen ">
            <div className="absolute inset-0">
                <Image src={bgImg} className="w-full bg-cover h-full object-cover border-collapse opacity-90" alt="" />
            </div>
            <div className="relative space-y-6 max-w-md w-full px-6 py-12 bg-gradient-to-r from-darkblue to-purple shadow-lg rounded-md">
                <h2 className="text-3xl  text-white font-bold mb-6 text-center ">Login</h2>


                {/* form */}
                <form onSubmit={handleSubmit(handleForm)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-white text-lg font-medium ">Email</label>
                        <input {...register("email", { required: "Input field required", maxLength: 20 })} aria-invalid={errors.email ? "true" : "false"}
                            type="email" autoComplete="email" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Email" />
                        {/* errors alert */}
                        {errors.email && <p role="alert" className=" text-sm text-red">{errors.email?.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="password" className="block text-white text-lg font-medium ">Password</label>
                        <input {...register("password", { required: "Input field required", maxLength: 20 })}
                            aria-invalid={errors.password ? "true" : "false"} type="password" autoComplete="current-password" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Password" />
                        {/* errors alert */}
                        {errors.password && (<p role="alert" className="text-sm text-opacity-50 text-red">{errors.password?.message}</p>)} {loginError && (<p role="alert" className="text-sm text-opacity-100 text-red">{loginError.message.slice(9)}</p>)}

                        <label htmlFor="password" className="block text-bubble-gum opacity-70 text-sm font-medium "><Link href={'/page/resetPassword/ResetPassword'}>Forgot password</Link></label>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tahiti">LOGIN</button>
                    </div>
                </form>
                <p className="mt-2 text-white text-center">New to doctor view? <Link href={'/page/signUpPage/SignUpPage'} className="text-primary">Create new Account</Link></p>
                <div className="flex items-center ">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="px-4 text-white">OR</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>
                <div>
                    <button onClick={handleGoogleLogin} type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-bubble-gum hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tahiti">CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;
