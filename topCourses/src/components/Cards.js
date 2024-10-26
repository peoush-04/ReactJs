import Card from "./Card";
function Cards({courses}){

    // see we need to display all courses ka card , but the api has data separated in Development,Business,Design,Lifestyle and each of them are arrays which contains details of one individual course . 
    // So Object.values(courses) gives us 4 arrays Development,Business,Design,Lifestyle adn then forEach on each object .
    // Development wala array pe forEach will give individual course present in it , so store all the courses in one variable (allCourses)  
    function getAllCourses(){
        let allCourses=[];
        Object.values(courses).forEach((array)=>{
            array.forEach((course) => {
                allCourses.push(course);
            })
        })
        return allCourses;
    }
    return(
        <div className="w-11/12 max-w-[1000px] mx-auto flex justify-center flex-wrap gap-7">
            {
                /* since getAllCourses() returns array of all the courses so we can now easily use map function on it  */
                getAllCourses().map((course)=>{
                    return <Card course={course} key={course.id}></Card>
                })
            }
        </div>
    )
}

export default Cards;