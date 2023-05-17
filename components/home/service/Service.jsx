import Image from "next/image";
import fluoride from "../../../public/assets/images/fluoride.png"
import cavity from "../../../public/assets/images/cavity.png"
import whitening from "../../../public/assets/images/whitening.png"
import ServiceCard from "./ServiceCard";

const Service = () => {

    const services = [
        {
            id: 1,
            title: 'Fluoride Treatment',
            icon: fluoride,
            description: '  Fluoride joins the tooth structure when your teeth develop, thus strengthening the teeth, enamel, making them less susceptible to bacteria and cavities. It slows and may even reverse the development of decays and cavities by harming the bacteria which causes the cavities.'
        },
        {
            id: 2,
            title: 'Cavity Filling',
            icon: cavity,
            description: 'The most common use of tooth fillings is to fill a cavity in the tooth. But tooth fillings also can be used to repair damage to teeth caused by teeth grinding .Amalgam has been used by dental professionals for over a century; It is the most researched material used for filling cavities.'
        },
        {
            id: 3,
            title: 'Teeth Whitening',
            icon: whitening,
            description: 'Teeth whitening involves bleaching your teeth to make them lighter. It cant make your teeth brilliant white, but it can lighten the existing color by several'
        }
    ]

    return (
        <div className="mt-36 ">
            <div className="text-center mb-16">
                <h2 className=" font-medium text-4xl ">Service We Provide</h2>
                <p className=" font-semibold text-2xl">Our Services</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">


                {
                    services.map(service => <ServiceCard service={service} key={service.id}></ServiceCard>)
                }

            </div>
        </div>
    );
}

export default Service;