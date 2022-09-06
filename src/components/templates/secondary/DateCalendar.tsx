
export default function DateCalendar(props: any) {
    const { day, date, longDate, tasks } = props.day;

    //    console.log(props)
    const t = () => {

        let className = "border-b-2 pb-3 select-none text-sm  ";


        if (longDate === new Date().toLocaleDateString()) {
            className += " border-[#fbbd05]";
        }

        return className;
    }

    const handleOnMouseOver = () => {

    };

    return (
        <div onMouseOver={handleOnMouseOver} >
            <div className={t()}>
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


