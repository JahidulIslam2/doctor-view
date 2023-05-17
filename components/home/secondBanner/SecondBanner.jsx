import Image from "next/image";
import treatment from '../../../public/assets/images/treatment.png'


const SecondBanner = () => {
    return (
        <>
            <div className="py-6 mt-40 lg:flex md:flex  sm:grid sm:grid-cols-2 sm:gap-6 items-center justify-between">
                <div className="lg:w-1/2 lg:mr-24 md:w-1/2 sm:mb-9 mx-auto">
                    <Image className="rounded-md lg:max-w-lg mx-auto lg:float-right lg:ml-6" width={500} height={500} src={treatment} alt="Banner image" />
                </div>
                <div className="lg:w-1/2 md:w-1/2 lg:pr-6">
                    <h1 className="text-5xl font-bold text-darkblue leading-tight mb-4">Exceptional Dental Care, on Your Terms</h1>
                    <p className="leading-relaxed mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like</p>
                    <button className="bg-primary text-white hover:bg-tahiti font-bold py-2 px-4 rounded-lg sm:py-3 sm:px-6 sm:text-lg lg:py-3 lg:px-6 lg:text-xl">Click me!</button>
                </div>
            </div>

        </>

    );
}

export default SecondBanner;