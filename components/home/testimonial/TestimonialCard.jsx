import Image from "next/image";

const TestimonialCard = ({ cardInfo }) => {
    const { content, name, address, img } = cardInfo
    return (
        <div className="max-w-sm w-full rounded-lg justify-center items-center overflow-hidden shadow-lg shadow-darkblue mx-auto flex flex-col my-4 p-4 ">


            <div className="flex-grow">
                <p className="text-sm">
                    {content}
                </p>
            </div>
            <div className="self-start">
                <div className="flex flex-row justify-left space-x-4 items-center mt-9">
                    <div >

                        <Image src={img} className="h-full w-20 border-4 rounded-full p-1 border-primary" alt="" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-1 leading-tight
                        ">{name}</h2>
                        <p className="text-base">{address}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCard;