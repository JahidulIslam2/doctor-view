import { format } from "date-fns";
import { useEffect, useState } from "react";

const AvailableAppointment = ({ startDate }) => {
    const [slotData, setData] = useState([])

    useEffect(() => {
        fetch('/slot.json')
            .then(res => res.json())
            .then(Data => setData(Data))

    }, [])

    console.log(slotData)
    return (
        <div>
            <p className="text-primary font-bold">You picked {format(startDate, 'PP')}</p>
            <div>
                <div>
                    {
                        slotData?.map(slot => {

                            <div >
                                <h1>Pediatric present</h1>
                                <p>time</p>
                                <p>10 space</p>
                                <button>Book Appointment</button>
                            </div>
                        })
                    }

                </div>
            </div>
        </div >
    );
}

export default AvailableAppointment;