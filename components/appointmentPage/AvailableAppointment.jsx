import { format } from "date-fns";
import { useEffect, useState } from "react";
import AvailableAppointmentCard from "./AvailableAppointmentCard";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ startDate }) => {
    const [slotData, setData] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [treatment, setTreatment] = useState({})

    const openModal = (slotCardData) => {
        setTreatment(slotCardData)
        setModalOpen(true);
    }
    const closeModal = () => {
        setModalOpen(false);
    }
    const submitHandler = () => {
        setModalOpen(false)
    }

    useEffect(() => {
        fetch('/slot.json')
            .then(res => res.json())
            .then(Data => setData(Data))

    }, [])


    return (
        <div>
            <p className="text-center text-primary font-bold text-2xl">Available service on {format(startDate, 'PP')}</p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-auto gap-6">
                {
                    slotData?.map(slotCardData =>
                        <AvailableAppointmentCard
                            slotCardData={slotCardData}
                            key={slotCardData.id}
                            openModal={openModal}
                        ></AvailableAppointmentCard>
                    )
                }

            </div>
            <BookingModal
                openModal={openModal}
                modalOpen={modalOpen}
                closeModal={closeModal}
                setModalOpen={setModalOpen}
                submitHandler={submitHandler}
                treatment={treatment}
                startDate={startDate} />
        </div >
    );
}

export default AvailableAppointment;