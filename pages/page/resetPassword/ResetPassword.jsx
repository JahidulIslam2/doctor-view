import { useContext, useState } from "react";
import { AuthProvider } from "../../../components/firebaseAuth/FirebaseAuth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ResetPassword = () => {
    const { passwordReset } = useContext(AuthProvider)
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    const { register, handleSubmit, formState: { errors }, reset } = useForm()

    // Forget function
    const handleForm = (data) => {

        setLoading(true);

        passwordReset(data.email)
            .then(result => {
                console.log(result)
                toast.success('Please Check your email spam folder', {
                    position: "top-center",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
                reset();
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    // Back button function

    const handleGoBack = () => {
        router.back();
    }

    return (
        <div>
            {/* back button */}
            <button onClick={handleGoBack} className="text-primary font-semibold rounded-md m-4 hover:text-tahiti active:text-bermuda flex gap-2 justify-center items-center" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                back to login</button>
            <div className="mx-auto flex justify-center my-20 ">

                {/* forget  */}
                <div className="max-w-md w-full bg-white rounded-lg p-8">

                    <h2 className="text-4xl mb-6 font-semibold text-center">Forgot Password</h2>
                    <form onClick={handleSubmit(handleForm)} className="flex flex-col items-start">
                        <label className="mb-2">Whats your email address</label>
                        <input
                            className="border border-metal h-9 px-3 w-full text-lg my-2 rounded-sm"
                            type="email"
                            placeholder="Email"
                            {...register("email", { required: "Input field required", maxLength: 20 })}
                        />
                        {errors.email && <p role="alert" className="text-red text-sm">{errors.email?.message}</p>}

                        {/* reset button */}
                        <button className={`block bg-primary text-white font-semibold py-2 my-2 px-4 rounded-md hover:bg-tahiti focus:bg-primary active:bg-tahiti ${loading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={loading} type="submit">
                            {loading ? <span className="flex justify-center items-center gap-2 text-white">
                                <svg class="h-4 w-4 animate-spin" viewBox="3 3 18 18">
                                    <path
                                        class="fill-midnight"
                                        d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                    <path
                                        class="fill-white"
                                        d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                </svg> Loading... </span> : " Reset Password"}
                        </button>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
