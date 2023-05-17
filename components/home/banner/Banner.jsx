import bgImage from '../../../public/assets/images/bg.png'
import chair from '../../../public/assets/images/chair.png'
import Image from 'next/image';

const Banner = () => {
    return (

        <section
            className="my-16 relative  bg-center">
            {/* bg image */}
            <div className='absolute inset-0'>
                <Image src={bgImage} className='h-full w-full object-cover bg-cover' alt='background Image' />
            </div>
            {/* content image */}
            <div className='container mx-auto sm:flex-wrap lg:flex-nowrap md:flex-nowrap lg:flex md:flex items-center justify-between flex-row-reverse lg:p-16'>
                <div className=' lg:mb-0 sm:mb-8'>
                    <Image src={chair} width={500} height={500} className=" rounded-lg shadow-2xl" alt='' />

                </div>

                <div
                    className="relative sm:mt-8 px-4 lg:flex lg:px-8"
                >
                    <div className=" text-left ">
                        <h1 className="text-3xl font-bold sm:text-5xl">
                            Box Office News!

                            <strong className="block font-extrabold text-rose-700">
                                Provident cupiditate voluptatem et in.
                            </strong>
                        </h1>

                        <p className=" max-w-lg sm:text-xl/relaxed">Quaerat fugiat ut assumenda excepturi exercitationem quasi.<br /> In deleniti eaque aut repudiandae et a id nisi.
                        </p>

                        <div className=" p-8 text-center">
                            <a
                                href="#"
                                className="  rounded bg-primary px-9 py-3  text-md font-medium text-white shadow hover:bg-tahiti focus:outline-none focus:ring active:bg-secondary sm:w-auto"
                            >
                                Get Started
                            </a>


                        </div>
                    </div>
                </div>

            </div>

        </section>
        // <div class="bg-gray-200">
        //     <div class="container mx-auto flex flex-wrap justify-between items-center py-4 lg:py-8">
        //         <div class="w-full lg:w-1/2 mb-4 lg:mb-0 lg:pr-8">
        //             <h1 class="text-4xl lg:text-5xl font-bold mb-4 lg:mb-8">Your Banner Text Goes Here</h1>
        //             <p class="text-lg lg:text-xl text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vestibulum velit in enim vulputate, vel consequat felis suscipit.</p>
        //         </div>
        //         <div class="w-full lg:w-1/2">
        //             <Image src={chair} alt="Banner Image" class="w-full h-auto lg:max-h-96 rounded-lg shadow-lg" />
        //         </div>
        //     </div>
        // </div>




    );
}

export default Banner;