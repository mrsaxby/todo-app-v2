import { useState } from 'react'
import todoList from '../../../api/TasksApi'

export default function EditTask() {
    const [allTasks] = useState(todoList())
    const id = window.location.pathname.split('/')[2]

    const [task, setTask] = useState(allTasks.find(task => task.id === parseInt(id)))


    return (
        <div className="grid grid-cols-3 mx-[11%]">
            <div className="col-span-2">
            </div>

            <div className="col-span-1 text-right "  >
                <div>
                    {task?.id}
                </div>
                <div>
                    {task?.title}
                </div>
                <div>
                    {task?.description}
                </div>
                <div>
                    {task?.dateCreated}
                </div>
                <div>
                    {task?.dateEdited}
                </div>
                <div>
                    {task?.deleted}
                </div>
                <div>
                    {task?.starred}
                </div>
                <div>
                    {task?.category.icon}
                </div>
                <div>
                    {task?.dateApplied}
                </div>

            </div>
        </div >


    )


}


