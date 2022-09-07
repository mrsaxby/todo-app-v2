
export default function Task(props: any) {
    const details = props.task;




    //console.log(details)
    return (
        <a href={"/task/" + details.id}>
            <div className="grid grid-cols-3 mx-[11%] my-[2%]">
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
                    <div className="text-xs " style={{ borderBottom: '1px solid ' + details.category.colour }}>
                        Created at: {details.dateCreated}
                    </div>
                </div>
            </div>
        </a>
    )


}


