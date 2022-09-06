
export default function Task(props: any) {
    const details = props.task;




    //console.log(details)
    return (

        <div className="grid grid-cols-3 mx-[11%]">
            <div className="col-span-1">

                <div >
                    <span>
                        {details.title}
                    </span>
                </div>


                <div className="text-xs">
                    {details.description}
                </div>


            </div>
            <div className="col-span-1">

            </div>
            <div className="col-span-1 text-right " style={{ borderBottom: '1px solid ' + details.category.colour }} >
                <div className="text-xs">
                    Last edited:  {details.dateEdited}
                </div>
                <div className="text-xs">
                    Created at: {details.dateCreated}
                </div>
            </div>
        </div >
    )


}


