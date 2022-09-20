import { useState } from 'react'
import todoList from '../../../api/TasksApi'


export default function CreateTask() {
    const [allTasks, setTasks] = useState(todoList())
    const [loading, setLoading] = useState("");


    let categories = [
        { id: 1, type: "Sun", icon: "\u2600" },
        { id: 2, type: "Phone", icon: "\u260f" },
        { id: 3, type: "Shamrock", icon: "\u2618" },
        { id: 4, type: "Radioactive", icon: "\u2622" },
        { id: 5, type: "Peace", icon: "\u262e" },
        { id: 6, type: "Yin Yang", icon: "\u262f" },
        { id: 7, type: "Happy Face", icon: "\u263a" },
        { id: 8, type: "Sad Face", icon: "\u2639" },
        { id: 9, type: "Music", icon: "\u266b" },
        { id: 10, type: "Scales", icon: "\u2696" }
    ];


    return (
        <>
            <input type="text" placeholder='Title' autoComplete='off' />


            <select id="category">
                <option value="---">---</option>
                {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.icon}</option>)}
            </select>

            <input type="color" onChange={e => {
                console.log(e.target.value);
            }} />


            <button onClick={() => {
                let obj = {
                    "id": 3,
                    "title": "Go to the shop",
                    "description": "buy salad",
                    "dateCreated": "13/05/2022, 16:55:02",
                    "dateEdited": "19/05/2022, 15:56:10",
                    "deleted": false,
                    "starred": false,
                    "category": {
                        "id": 7,
                        "type": "Happy Face",
                        "icon": "☺",
                        "colour": "#60fc93"
                    },
                    "dateApplied": "07/09/2022",
                    "order": 2
                };
                todoList().push(obj)

                //       fs.writeFileSync('data/todoList.json', JSON.stringify(todoList));

            }}>Create Task</button>

        </>

    )


}