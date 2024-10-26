function Filter({filterData}){
    return(
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center">
            {
                filterData.map((data)=>{
                    return (<button key={data.id} className="bg-bgDark text-white text-lg px-2 py-1 rounded-md hover:bg-opacity-50">{data.title}</button>)
                })
            }
        </div>
    )
}

export default Filter;