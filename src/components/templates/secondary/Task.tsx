import { useState } from "react";

export default function Task(props: any) {
    const details = props.task;
    const [hovered, setHovered] = useState(false);

    const decideOnBorder = () => {
        if (hovered) {
            return { borderRight: '2px solid ' + details.category.colour };
        }
        return { borderRight: '1px solid ' + details.category.colour };
    }

    return (
        <a href={"/task/" + details.id} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
            <div className="grid grid-cols-3 mx-[11%] my-[2%] p-4" style={decideOnBorder()}>
                <div className="col-span-2">
                    <div >
                        <span>
                            {details.title}
                        </span>
                    </div>
                    <div className="text-xs">
                        {details.description}
                    </div>
                </div>
                <div className="col-span-1 text-right">
                    <div className="text-xs">
                        Last edited:  {details.dateEdited}
                    </div>
                    <div className="text-xs">
                        Created at: {details.dateCreated}
                    </div>
                </div>
            </div>
        </a>
    )


}


