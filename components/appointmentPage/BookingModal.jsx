import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";

const BookingModal = ({ setModalOpen, modalOpen, openModal, closeModal, submitHandler, treatment, startDate }) => {
    const { name, slots } = treatment;


    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data)
        submitHandler();
    }

    return (
        <div>

            {
                modalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen bg-darkblue bg-opacity-50">
                        <div className="bg-white w-full md:w-1/2 lg:w-[511px] lg:h-[500px] rounded-lg p-6 mx-auto sm:mx-2">
                            <div className="flex justify-between items-center mb-4
                            ">
                                <h2 className="text-xl font-bold uppercase">{name}</h2>
                                <button className="text-bubble-gum bg-darkblue  rounded-full hover:text-opacity-80" onClick={closeModal} type="reset">
                                    <svg
                                        className="w-8 h-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            {/* modal content */}


                            <form onSubmit={handleSubmit(onSubmit)} className="mt-12 flex flex-col ">

                                <div className="mb-4 pt-0">
                                    <input type="text" name="selectedDate" defaultValue={format(startDate, 'PP')} disabled {...register("selectedDate")} className="px-3 py-3 placeholder-midnight relative bg-silver rounded text-sm  shadow outline-none focus:outline-none focus:ring w-full" />
                                </div>
                                <div className="mb-4 pt-0">
                                    <select name="inputSelection" {...register("inputSelection", { require: true })} className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-silver rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full">
                                        <option value="">Choose an option</option>
                                        {slots.length ? slots.map(slot => <option value="selectedSlot">{slot}</option>) : 'There are no slots available'}
                                    </select>
                                </div>
                                <div className="mb-4 pt-0">
                                    <input type="text" name="userName" {...register("userName", { require: true })} placeholder="Your Full Name" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-silver  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                </div>
                                <div className="mb-4 pt-0">
                                    <input type="text" name="userNumber" {...register("userNumber", { require: true })} placeholder="Phone Number" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-silver  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                </div>
                                <div className="mb-4 pt-0">
                                    <input type="email" {...register("userEmail", { require: true })} placeholder="Write E-mail" name="userEmail" className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-silver  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full" />
                                </div>

                                <div className="mt-6 content-end">
                                    <button type="submit" className="w-full bg-primary hover:bg-tahiti text-white font-semibold py-2 px-4 rounded-lg">Submit</button>

                                </div>
                            </form>

                        </div>
                    </div>
                )
            }

        </div>
    );
}

export default BookingModal;