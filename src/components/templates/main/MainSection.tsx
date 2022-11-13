
import { ChangeEvent, useEffect, useState } from "react";
import DateCalendar from "../secondary/DateCalendar";
import todoList from '../../../api/TasksApi'
import Task from "../secondary/Task";
import DatePicker from "../secondary/DatePicker";

export default function MainSection() {

    const [dates, setDates] = useState([
        { day: "Monday", date: 0, longDate: new Date(), tasks: {} },
        { day: "Tuesday", date: 0, longDate: new Date(), tasks: {} },
        { day: "Wednesday", date: 0, longDate: new Date(), tasks: {} },
        { day: "Thursday", date: 0, longDate: new Date(), tasks: {} },
        { day: "Friday", date: 0, longDate: new Date(), tasks: {} },
        { day: "Saturday", date: 0, longDate: new Date(), tasks: {} },
        { day: "Sunday", date: 0, longDate: new Date(), tasks: {} },
    ]);

    const getTasksForDay = (exampleDate: Date) => {
        return allTasks.filter(task => task.dateApplied === exampleDate.toLocaleDateString()).sort((a, b) => a.order - b.order);
    }

    //d.getDate() - day + (day == 0 ? -6:1)
    const [startOfWeek, setStartOfWeek] = useState(new Date(new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() == 0 ? -6 : 1))))
    const [allTasks] = useState(todoList())
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [tasksForSelectedDate, setTasksForSelectedDate] = useState(getTasksForDay(new Date()))

    const getPreviousWeek = () => {
        setStartOfWeek(new Date(startOfWeek.setDate(startOfWeek.getDate() - 7)))
        createWeek()
    }

    const getNextWeek = () => {
        setStartOfWeek(new Date(startOfWeek.setDate(startOfWeek.getDate() + 7)))
        createWeek()
    }

    const dateSelected = (longDate: Date) => {
        setSelectedDate(longDate);
        setStartOfWeek(new Date(new Date().setDate(longDate.getDate() - longDate.getDay() + (longDate.getDay() == 0 ? -6 : 1))));
        setTasksForSelectedDate(allTasks.filter(task => task.dateApplied === longDate.toLocaleDateString()));
    }

    const createWeek = () => {
        dates.forEach((day, index) => {
            let exampleDate = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + index)
            day.longDate = exampleDate
            day.date = exampleDate.getDate();
            day.tasks = getTasksForDay(exampleDate);
        });

        return (
            <>
                <div className="grid grid-cols-2 gap-4 mb-[5%]">
                    <div className="m-auto">
                        <DatePicker month={new Date(startOfWeek).toLocaleString('en-gb', { month: 'long', year: 'numeric' })} selectedDate={selectedDate} dateSelected={dateSelected} />
                    </div>
                    <div className="m-auto">
                        <button onClick={() => dateSelected(new Date())}>Today</button>
                    </div>
                </div>

                <div className="grid md:grid-cols-9 gap-3 text-center sm:grid sm:grid-cols-1">
                    <div className="self-center m-auto" onClick={() => getPreviousWeek()}>
                        <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                        </svg>
                    </div>
                    {dates.map((day, index) => {
                        return (
                            <div onClick={() => dateSelected(new Date(day.longDate))} className="cursor-pointer" key={new Date(day.longDate).getDate()}>
                                <DateCalendar day={day} selectedDate={selectedDate} />
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

    return (
        <div className="p-3">
            {createWeek()}
            {
                <div className="mt-10">
                    {tasksForSelectedDate.length === 0 ?
                        <div className="text-center border-b-[2px] pb-3 select-none text-sm border-[#fbbd05] w-[200px] m-auto">Nothing on today</div>
                        :
                        tasksForSelectedDate.map(item => <Task key={item.id} task={item} />)}
                </div>
            }
            <a href="/task/create">Create</a>
        </div>
    )
}