import Image from "next/image";
import bannerBg from "../../public/assets/images/bg.png";
import doctorChair from "../../public/assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ startDate, setStartDate }) => {


    return (
        <div className="relative py-24">
            <div className="absolute inset-0">
                <Image src={bannerBg} className="h-full w-full object-cover bg-cover" alt="" />
            </div>
            <div className="relative container mx-auto px-4 flex flex-wrap  justify-evenly items-center flex-row-reverse  ">
                <div className="w-full lg:w-2/3 md:w-1/2">
                    <Image src={doctorChair} height={500} width={500} className="mx-auto" alt="" />
                </div>
                <div className="w-full lg:w-1/3 md:w-1/2 px-4">
                    <DayPicker
                        mode="single"
                        selected={startDate}
                        onSelect={setStartDate} />;

                </div>
            </div>
        </div>
    );
}

export default AppointmentBanner;