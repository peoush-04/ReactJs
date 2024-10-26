import {FcLike} from "react-icons/fc";
function Card({course}){
    return(
        <div className="w-[30%] bg-bgDark rounded-md overflow-hidden flex flex-col gap-3 relative p-4">
            <div className="relative">
                <img src={course?.image?.url} alt={course?.image?.alt} className="w-full object-fit"></img>
                <button className="w-[30px] h-[30px] bg-white rounded-full absolute right-[5px] bottom-[8px] flex justify-center items-center"><FcLike fontSize="1.75rem"></FcLike></button>
            </div>
            
            <div className="text-white text-lg font-bold leading-6">{course?.title}</div>
            <div className="text-white">{course?.description}</div>
        </div>
    )
}

export default Card;