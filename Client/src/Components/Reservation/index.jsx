import { useState } from 'react';
import Calender from 'react-calendar'

// eslint-disable-next-line react/prop-types
const Index = ({ display }) => {
    const [value, onChange] = useState(new Date());

    const handleDateChange = (newValue) => {
        // newValue will be the selected date(s) from the calendar
        console.log('Selected date(s):', newValue);

        // You can use this value to perform further actions or update your state, if needed
        onChange(newValue);
    };


    const isSelectedDate = (date) => {
        return date.getDate() === value.getDate() && date.getMonth() === value.getMonth() && date.getFullYear() === value.getFullYear();


    };

    const tileClassNames = ({ date, view }) => {
        if (view === 'month') {
            // Apply custom class for the selected date
            if (isSelectedDate(date)) {
                return 'bg-primary text-secondary  rounded-full';
            }

        }
        return '';
    };




    return (
        <div
            className={`h-1/2 w-3/6 absolute md:top-20 md:left-65 ${display ? 'flex' : 'hidden '}  `}
        >
            <div className="flex flex-col bg-secondary justify-center items-center ">
                <h1 className="text-3xl w-1/2 font-bold text-primary" onClick={() => console.log(display)} >
                    Make A Reservation Today
                </h1>
                <img src="/images/calender.svg" alt="" className=" w-2/3 " />

            </div>
            <div className='w-full flex flex-col items-center justify-evenly bg-secondary ' >
                <Calender
                    onChange={handleDateChange}
                    value={value}
                    tileClassName={tileClassNames}
                    className="text-primary font-primary font-bold p-3 "
                />
                <h2 className='self-start p-12 text-primary '  >Confirm The Selected date(s): <span className='font-black' >{value.toLocaleDateString()}</span></h2>
            </div>
        </div>
    )
}

export default Index