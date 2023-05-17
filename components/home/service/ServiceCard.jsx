import Image from "next/image";

const ServiceCard = ({ service }) => {
    const { title, icon, description } = service;
    return (
        <div class=" text-center p-10 mx-auto max-w-sm rounded-md overflow-hidden  shadow-2xl">
            <figure className="flex  justify-center py-10">
                <Image className=" h-28 w-28" src={icon} alt="" />

            </figure>
            <h1 className="text-2xl font-semibold my-2">{title}</h1>
            <p className="text-start">
                {description}
            </p>
        </div>
    );
}

export default ServiceCard;