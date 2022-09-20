import { useState } from "react";
import DatePickerTile from "../../thirdly/DatePickerTile";

export default function DatePicker(props: any) {
    const [displayPicker, setDisplayPicker] = useState(true);
    const [monthSelected, setMonthSelected] = useState(props.month);
    const month = props.month;
    const selectedDate = props.selectedDate;
    const showHideClassName = displayPicker ? "modal display-block" : "modal display-none";
    const dateSelected = props.dateSelected;


    const changeMonth = () => {
        console.log('');
    }

    const changeYear = () => {
        console.log('');
    }





    const renderCalendar = () => {

        let setUpCalendar = [];
        const numberOfDatesOfMonth = new Date(2022, 8, 0).getDate();
        for (let i = 1; i < numberOfDatesOfMonth; i++) {
            setUpCalendar.push(new Date(2022, 9, i))
        }
        return (
            <div>
                <div onClick={() => changeMonth()}>
                    Month
                </div>
                <div onClick={() => changeYear()}>
                    Year
                </div>
                <div>
                    {setUpCalendar.map((date, index) => {
                        return (
                            <>
                                {index % 7 == 0 ? <div /> : ''}
                                <DatePickerTile props={date} selectedDate={selectedDate} dateSelected={dateSelected} />
                            </>
                        )
                    })}
                </div>
            </div>

        )

    }


    return (
        <div>

            {displayPicker ?
                <div className={showHideClassName}>
                    {renderCalendar()}


                </div>


                : ''
            }

            <div onClick={() => setDisplayPicker(!displayPicker)}>
                {month}
            </div>

        </div >
    )


}


