import Image from 'next/image';
import clock from '../../../../public/assets/icons/clock.svg'
import marker from '../../../../public/assets/icons/marker.svg'
import phone from '../../../../public/assets/icons/phone.svg'
const Card = () => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  justify-items-center gap-4">
            <div className="w-full lg:w-96 flex p-3 flex-row-reverse justify-center items-center overflow-hidden shadow-xl bg-primary gap-3 h-[175px] rounded-lg">
                <div className="text-white">
                    <h1 className="text-lg font-bold pb-3">Opening Hours</h1>
                    <p>10AM Opening Hour and 9PM Closing Time</p>
                </div>
                <div>
                    <Image src={clock} alt="" />
                </div>
            </div>
            <div className="w-full lg:w-96 flex p-3 flex-row-reverse justify-center items-center overflow-hidden shadow-xl bg-darkblue gap-3 h-[175px] rounded-lg">
                <div className="text-white">
                    <h1 className="text-lg font-bold pb-3">Visits Our Location</h1>
                    <p>Feni, Bangladesh,Garden City 3rd Floor</p>
                </div>
                <div>
                    <Image src={marker} alt="" />
                </div>
            </div>
            <div className="w-full lg:w-96 flex p-3 flex-row-reverse justify-end items-center overflow-hidden shadow-xl bg-primary gap-3 h-[175px] rounded-lg">
                <div className="text-white">
                    <h1 className="text-lg font-bold pb-3">Contact Us Now</h1>
                    <p>+8801821443145</p>
                </div>
                <div>
                    <Image src={phone} alt="" />
                </div>
            </div>
        </div>

    );
}

export default Card;