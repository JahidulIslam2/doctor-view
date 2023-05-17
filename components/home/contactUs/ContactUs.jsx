import Image from "next/image";
import appointmentPng from "../../../public/assets/images/appointment.png";
const ContactUs = () => {
    return (
        <div className="relative p-8 mt-36">
            <div className="absolute inset-0">
                <Image src={appointmentPng} className="h-full w-full object-cover" alt="appointment " />
            </div>
            <div>

            </div>
            <div className="relative mx-auto max-w-md ">
                <form className=" shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <div className="text-center mb-9">
                        <h5 className="text-primary text-lg font-bold leading-tight">Contact Us</h5>
                        <h3 className="text-white font-bold text-3xl leading-relaxed
                        ">Stay connect with us</h3>
                    </div>


                    <div className="mb-4">
                        <input type="text" className="shadow-lg appearance-none  rounded w-full py-3 px-3 leading-tight  focus:shadow-midnight" id="name" name="name" placeholder="Enter Your Name" />
                    </div>
                    <div className="mb-4">

                        <input type="text" className="shadow-lg appearance-none
                          rounded w-full py-3 px-3 leading-tight
                          focus:shadow-midnight" id="subject" name="subject" placeholder="Enter Your Subject" />
                    </div>
                    <div className="mb-4">

                        <textarea type="text" className="shadow-lg appearance-none rounded w-full py-3 px-3 leading-tight  focus:shadow-midnight" id="message" name="message" placeholder="Enter your Message" />
                    </div>
                    <div className="flex items-end justify-end">
                        <button className="bg-primary hover:bg-tahiti text-white font-bold py-2 px-8 rounded focus:outline-midnight focus:shadow-lg
                        active:bg-tahiti active:outline-1" type="button">Send</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactUs;