import { useState } from "react";

const AvailableAppointmentCard = ({ slotCardData, openModal }) => {
    const { name, slots } = slotCardData;

    return (
        <div className="">

            <div div className="max-w-md mx-auto bg-white rounded shadow-md" >

                <div className="px-4 py-4 text-center space-y-1.5">
                    <h3 className="text-xl font-semibold mb-2">{name}</h3>
                    <p className="text-gray-600">{slots.length > 0 ? slots[0] : "Try Another day"}</p>
                    <p className="text-metal">{slots.length} {slots.length > 1 ? "spaces Available" : "Space Available"}</p>
                    <button className="bg-primary hover:bg-tahiti disabled:bg-darkblue font-semibold py-2 px-4 rounded uppercase text-white active:bg-tahiti"
                        onClick={() => openModal(slotCardData)} disabled={slots.length === 0}>Book appointment</button>

                </div>
            </div >
        </div >
    );
}

export default AvailableAppointmentCard;