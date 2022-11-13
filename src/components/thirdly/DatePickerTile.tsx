import { useState } from "react";

export default function DatePickerTile(props: any) {
    const dateOnCalendar = props.props
    const dateSelected = props.dateSelected
    const selectDate = props.selectedDate.toLocaleDateString()
    //console.log(props.selectedDate.toLocaleDateString())

    const [hovered, setHovered] = useState(false);

    const className = () => {
        let className = 'border-b-[1px] select-none inline-block w-[2em] text-center mb-2 pb-2';

        if (hovered) {
            className = 'border-b-[1px] select-none inline-block w-[2em] text-center mb-2 pb-2 hover:border-[#fbbd05]';
        }

        //Date picked
        if (dateOnCalendar.toLocaleDateString() === selectDate) {
            return className = 'border-b-[2px] select-none inline-block w-[2em] text-center mb-2 pb-2 border-b-[#fbbd05]';
        }
        //Todays Date
        if (dateOnCalendar.toLocaleDateString() === new Date().toLocaleDateString()) {
            return className = "border-b-[1px] select-none inline-block w-[2em] text-center mb-2 pb-2 border-[#ff7070]";
        }

        return className;
    }

    return (
        <div className={className()} onMouseEnter={() => setHovered(true)} onClick={() => dateSelected(dateOnCalendar)} >
            {dateOnCalendar.getDate()}
        </div>
    )
}