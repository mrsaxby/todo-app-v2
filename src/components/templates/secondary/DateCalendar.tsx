import { useState } from "react";

export default function DateCalendar(props: any) {
    const [hovered, setHovered] = useState(false);

    const { day, date, longDate, tasks } = props.day;
    const selectedDate = props.selectedDate;


    const decideOnBorder = () => {
        let className = "border-b-[1px] pb-3 select-none text-sm";

        if (hovered) {
            className += ' hover:border-[#fbbd05]';
        }
        if (longDate === selectedDate) {
            return className += ' border-[#fbbd05]';
        }
        if (longDate === new Date().toLocaleDateString()) {
            return className += " border-[#ff7070]";
        }

        return className;
    }



    return (
        <div onMouseEnter={() => setHovered(true)}>
            <div className={decideOnBorder()}>
                <div className="pb-1">
                    {day}
                </div>

                <div className="text-xs">
                    {date}
                </div>
            </div>
            <div className="text-xs mt-1 min-h-[16px]">
                {tasks.length !== 0 ? tasks.length : ''}
            </div>
        </div >
    )


}


