import { useState } from "react";

export default function DateCalendar(props: any) {
    const [hovered, setHovered] = useState(false);
    const { day, date, longDate, tasks } = props.day;
    const selectedDate = props.selectedDate;

    const decideOnBorder = () => {
        let className = "border-b-[1px] pb-3 select-none text-sm";

        if (hovered) {
            className = 'border-b-[1px] pb-3 select-none text-sm hover:border-[#fbbd05]';
        }
        // Date Picked
        if (longDate.toLocaleDateString() === selectedDate.toLocaleDateString()) {
            return className = 'border-b-[2px] pb-3 select-none text-sm border-[#fbbd05]';
        }
        //Todays Date
        if (longDate.toLocaleDateString() === new Date().toLocaleDateString()) {
            return className = "border-b-[1px] pb-3 select-none text-sm border-[#ff7070]";
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
        </div>
    )
}
