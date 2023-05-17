import Image from "next/image";
import doctorImage from '../../../public/assets/images/doctor-small.png'
import appointmentBg from '../../../public/assets/images/appointment.png'
const Appointment = () => {
    return (
        <div className="relative w-full lg:max-w-full overflow-hidden rounded-md mt-36">
            <div className="absolute inset-0">
                <Image src={appointmentBg} className="w-full h-full object-cover" alt="appointment bg image" />
            </div>
            {/* Main content */}
            <div class="relative z-10 py-6  md:max-h-md flex lg:items-center lg:justify-evenly">

                <div class=" -m-6 p-0 mx-auto hidden lg:block md:block">
                    <Image class=" lg:max-w-md w-auto h-full lg:float-left" height={500} width={500} src={doctorImage} alt="appointment image" />
                </div>
                <div class="lg:w-1/2  sm:object-contain sm:w-full p-6 mx-auto ">
                    <h1 class="text-4xl font-bold text-white leading-tight mb-4">Make an appointment today</h1>
                    <p class="leading-relaxed break-words text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis leo euismod, lobortis felis sit amet, maximus nulla. Nullam vel metus quis dolor vulputate laoreet. Nunc id ante et felis vestibulum pretium at eu felis. Donec ac felis at lorem posuere volutpat.</p>
                    <div>
                        <button className="bg-primary text-white hover:bg-tahiti font-bold py-2 px-4 rounded-lg sm:py-3 sm:px-6 sm:text-lg lg:py-3 lg:px-6 lg:text-xl 
                        focus:outline-none focus:ring-2 focus:bg-secondary active:bg-secondary my-4">Appointment</button>
                    </div>
                </div>
            </div>
        </div>



    );
}

export default Appointment;