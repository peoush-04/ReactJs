import Card from "./Card";
function Tours(props){
    var tours=props.obj;
    return (
        <div className="cards-container">
            {
                    tours.map((tour)=>{
                        //passing directlt , no need of writing obj={..tour}
                        //good practise to pass "key" whenever working with map 
                        /* if u dont pass key , then during production u will face error */
                        return <Card key={tour.id} {...tour} removeTour={props.removeTour}></Card>
                    })
            }
        </div>
    );
}

export default Tours;