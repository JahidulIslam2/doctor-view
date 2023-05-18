import Image from "next/image";
import bgImg from "../../../public/assets/images/bgSignIn.jpg"



const LoginPage = () => {
    return (

        <div className="relative flex flex-col items-center justify-center min-h-screen ">
            <div className="absolute inset-0">
                <Image src={bgImg} className="w-full bg-cover h-full object-cover border-collapse opacity-90" alt="" />
            </div>
            <div className="relative space-y-6 max-w-md w-full px-6 py-12 bg-gradient-to-r from-darkblue to-purple shadow-lg rounded-md">
                <h2 className="text-3xl  text-white font-bold mb-6 text-center ">Login</h2>
                {/* form */}
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-white text-lg font-medium ">Email</label>
                        <input type="email" name="email" autoComplete="email" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Email" />
                    </div>
                    <div >
                        <label htmlFor="password" className="block text-white text-lg font-medium ">Password</label>
                        <input type="password" name="password" autoComplete="current-password" className="mt-1 focus:ring-bubble-gum focus:border-midnight block w-full shadow-md text-lg  border border-x-darkblue rounded-md  py-2 px-2" placeholder="Enter Your Password" />
                        <label htmlFor="password" className="block text-bubble-gum opacity-70 text-sm font-medium ">Forgot password</label>
                    </div>
                    <div className="pt-4">
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-primary hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tahiti">LOGIN</button>
                        <p className="mt-2 text-white text-center">NEW TO DOCTOR VIEW? create new Account</p>
                    </div>
                </form>
                <div className="flex items-center ">
                    <div className="flex-grow border-t border-black"></div>
                    <span className="px-4 text-white">OR</span>
                    <div className="flex-grow border-t border-black"></div>
                </div>
                <div className="">
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-md text-md font-medium text-white bg-bubble-gum hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tahiti">CONTINUE WITH GOOGLE</button>
                </div>
            </div>

        </div>
    );
}

export default LoginPage;