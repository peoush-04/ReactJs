import Card from "./Card";
function Tours(props){
    var tours=props.obj;
    return (
        <div className="cards-container">
            {
                    tours.map((tour)=>{
                        //passing directlt , no need of writing obj={..tour}
                        return <Card {...tour} removeTour={props.removeTour}></Card>
                    })
            }
        </div>
    );
}

export default Tours;