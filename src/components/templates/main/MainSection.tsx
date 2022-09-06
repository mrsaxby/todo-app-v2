
import { useEffect, useState } from "react";
import DateCalendar from "../secondary/DateCalendar";

import todoList from '../../../api/TasksApi'


export default function RightSection() {

    const [dates, setDates] = useState([
        { day: "Monday", date: 0, longDate: '', tasks: {} },
        { day: "Tuesday", date: 0, longDate: '', tasks: {} },
        { day: "Wednesday", date: 0, longDate: '', tasks: {} },
        { day: "Thursday", date: 0, longDate: '', tasks: {} },
        { day: "Friday", date: 0, longDate: '', tasks: {} },
        { day: "Saturday", date: 0, longDate: '', tasks: {} },
        { day: "Sunday", date: 0, longDate: '', tasks: {} },
    ]);

    const [startOfWeek, setStartOfWeek] = useState(new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + 1)))
    const [allTasks] = useState(todoList())



    const [selectedDate, setSelectedDate] = useState(new Date().toDateString())
    const [tasksForSelectedDate, setTasksForSelectedDate] = useState(allTasks.filter(task => task.dateApplied === selectedDate).sort((a, b) => a.order - b.order))

    const getTasksForDay = (longDate: string) => allTasks.filter(task => task.dateApplied === longDate).sort((a, b) => a.order - b.order);




    const createWeek = () => {
        dates.forEach((day, index) => {
            let exampleDate = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + index)
            day.longDate = exampleDate.toLocaleDateString()
            day.date = exampleDate.getDate();
            day.tasks = getTasksForDay(day.longDate);
        });

        return (
            <>
                {new Date(startOfWeek).toLocaleString('en-gb', { month: 'long', year: 'numeric' })}
                <div className="grid md:grid-cols-9 gap-3 text-center sm:grid sm:grid-cols-1">

                    <div className="self-center m-auto" onClick={() => getPreviousWeek()}>
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </div>
                    {dates.map((day, index) => {
                        return (
                            <div onClick={() => dateSelected(day.longDate)} className="cursor-pointer">
                                <DateCalendar day={day} index={index} />
                            </div>
                        )
                    })}
                    <div className="self-center m-auto" onClick={() => getNextWeek()}>
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>

                    </div>
                </div>
            </>

        );
    }


    const getPreviousWeek = () => {
        setStartOfWeek(new Date(startOfWeek.setDate(startOfWeek.getDate() - 7)))
        createWeek()
    }

    const getNextWeek = () => {
        setStartOfWeek(new Date(startOfWeek.setDate(startOfWeek.getDate() + 7)))
        createWeek()
    }



    const dateSelected = (longDate: string) => {
        ///  console.log(longDate)
        setSelectedDate(longDate);
        setTasksForSelectedDate(allTasks.filter(task => task.dateApplied === longDate))
    }




    return (
        <div className="p-3">

            {createWeek()}

            {/* 
            <div className="mt-10">
                {tasksForSelectedDate.length === 0 ?
                    <div className="text-center">Nothing on today</div>
                    :
                    tasksForSelectedDate.map(item => <Task task={item} />)}

            </div>
 */}



        </div>
    )


}


