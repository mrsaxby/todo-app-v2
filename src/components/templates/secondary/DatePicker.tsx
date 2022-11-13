import { useState } from "react";
import DatePickerTile from "../../thirdly/DatePickerTile";

export default function DatePicker(props: any) {
    const [displayPicker, setDisplayPicker] = useState(true);
    const [monthSelected, setMonthSelected] = useState(props.month);
    const month = props.month;
    const selectedDate = props.selectedDate;
    const showHideClassName = displayPicker ? "modal display-block" : "modal display-none";
    const dateSelected = props.dateSelected;

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const years = [
        new Date().getFullYear() - 1,
        new Date().getFullYear(),
        new Date().getFullYear() + 1
    ];

    const changeMonth = () => {
        setDisplayPickerMonth(!displayPickerMonth)
    }

    const changeYear = () => {
        setDisplayPickerYear(!displayPickerYear)

    }

    const [displayPickerYear, setDisplayPickerYear] = useState(false);
    const [displayPickerMonth, setDisplayPickerMonth] = useState(false);

    const renderCalendar = () => {
        let setUpCalendar = [];
        const numberOfDatesOfMonth = new Date(2022, 9, 0).getDate();
        for (let i = 1; i < numberOfDatesOfMonth; i++) {
            setUpCalendar.push(new Date(2022, 8, i))
        }
        return (
            <div>
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
            </div >
        )
    }

    return (
        <div className="grid grid-cols-2 gap-4">
            <div>
                <div className="text-center" onClick={() => setDisplayPicker(!displayPicker)}>
                    {month}
                </div>
                {displayPicker ?
                    <div className={showHideClassName}>
                        {renderCalendar()}
                    </div>
                    : ''
                }
            </div>
            <div>
                {displayPicker ?
                    <div>
                        <div onClick={() => changeMonth()}>
                            <div className="border-b-[2px] p-3 select-none text-sm border-[#fbbd05]">Month</div>
                            <div>
                                {displayPickerMonth ?
                                    months.map(month =>
                                        <div>{month}</div>
                                    )
                                    : ''
                                }
                            </div>
                        </div>
                        <div onClick={() => changeYear()}>
                            <div className="border-b-[2px] p-3 select-none text-sm border-[#fbbd05]">Year</div>
                            <div>
                                {displayPickerYear ?
                                    years.map(year =>
                                        <div>{year}</div>
                                    )
                                    : ''
                                }
                            </div>
                        </div>
                    </div>
                    :
                    ''}
            </div>
        </div>
    )
}


