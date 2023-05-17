import quote from "../../../public/assets/icons/quote.svg"
import Image from "next/image";
import people1 from "../../../public/assets/images/people1.png";
import people2 from "../../../public/assets/images/people2.png";
import people3 from "../../../public/assets/images/people3.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {

    const cardData = [
        {
            id: 1,
            content: '   It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Jahidul Islam',
            address: 'Feni, Bangladesh',
            img: people1
        },
        {
            id: 2,
            content: '   It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Jahidul Islam',
            address: 'Feni, Bangladesh',
            img: people2
        },
        {
            id: 3,
            content: '   It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Jahidul Islam',
            address: 'Feni, Bangladesh',
            img: people3
        },
    ]

    return (
        <div className="mt-36">

            <div className="flex flex-row items-center justify-between sm:gap-2">
                <div>
                    <p className="text-primary text-md">Testimonial</p>
                    <h3 className="text-2xl lg:text-3xl sm:text-lg">What Our Patient Says</h3>
                </div>
                <div>
                    <Image src={quote} className="max-w-full h-auto lg:h-40 w-48 " alt="icon" />
                </div>
            </div>


            {/* card */}
            <div className="flex flex-wrap">

                {
                    cardData.map(info => <TestimonialCard cardInfo={info} key={info.id} />)
                }

            </div>



        </div >

    );
}

export default Testimonial;