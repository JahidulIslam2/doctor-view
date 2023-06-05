import Image from "next/image";
import bgImage from "../../../public/assets/images/bgSignUp.jpg"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthProvider } from "../../../components/firebaseAuth/FirebaseAuth";


const SignUpPage = () => {
    const { createUserEmailAndPass } = useContext(AuthProvider)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const formSubmit = (event) => {
        createUserEmailAndPass(event.email, event.password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen ">
            <div className="absolute inset-0">
                <Image src={bgImage} className="w-full bg-cover h-full object-cover border-collapse " alt="" />
            </div>
            <div className="relative space-y-6 max-w-md w-full px-6 py-12 bg-gradient-to-b from-midnight via-metal to-darkblue shadow-lg rounded-md">
                <h2 className="text-3xl  text-white font-bold mb-6 text-center ">Sign Up</h2>

                {/* Input form */}
                <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="userName" className="block text-white text-lg font-medium ">Name</label>
                        <input {...register("userName", { required: "Name is required", maxLength: 20 })}
                            aria-invalid={errors.userName ? "true" : "false"} type="text" autoComplete="userName" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Name" />
                        {errors.userName && <p role="alert" className="text-bubble-gum opacity-80">{errors.userName?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-white text-lg font-medium ">Email</label>
                        <input {...register("email", { required: "Email address is required", maxLength: 20 })}
                            aria-invalid={errors.email ? "true" : "false"} type="email" autoComplete="email" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Email" />
                        {errors.email && <p role="alert" className="text-bubble-gum opacity-80">{errors.email?.message}</p>}
                    </div>
                    <div >
                        <label htmlFor="password" className="block text-white text-lg font-medium ">Password</label>
                        <input {...register("password", { required: true, maxLength: 20 })} type="password" autoComplete="current-password" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Password" />
                        <label htmlFor="password" className="block text-bubble-gum opacity-70 text-sm font-medium ">Forgot password</label>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tahiti">SIGN UP</button>
                        <p className="mt-2 text-white text-center">Already have an account? <Link href="/page/loginPage/LoginPage" className="text-primary">Login account</Link></p>
                    </div>
                </form>
                <div className="flex items-center ">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="px-4 text-white">OR</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>
                <div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-bubble-gum hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tahiti">CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
}

export default SignUpPage;