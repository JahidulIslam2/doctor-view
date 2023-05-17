import { useState } from "react";
import AppointmentBanner from "../../../components/appointmentPage/AppointmentBanner";
import AvailableAppointment from "../../../components/appointmentPage/AvailableAppointment";

const DrAppointment = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner startDate={startDate} setStartDate={setStartDate} />
            <AvailableAppointment startDate={startDate} />
        </div>
    );
}

export default DrAppointment;