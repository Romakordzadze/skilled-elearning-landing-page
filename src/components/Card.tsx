import {CardsConfing} from "../confings/CardsConfing";

export const Card = () => {
  return (
    <>
    
        {CardsConfing.map((item) =>(
            <>
        <div className="pl-[28px] w-full h-[259px] rounded-[10px] bg-[white]">
            <div className="mb-[24px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] rounded-[100%] w-[56px] h-[56px] ">
                <img className="mx-auto pt-[15px]" src={item.img} alt="" />
            </div>
            <h1 className="mb-[16px] text-[20px] font-extrabold">{item.title}</h1>
            <p className="mb-[26px] text-[16px] font-medium text-[#83869A]">{item.information}</p>
            <h1 className="text-[18px] text-[#F74780] font-bold opacity-100 hover:opacity-50 transition-opacity duration-200 cursor-pointer">Get Started</h1>
        </div>
             </>
        ))}
    
    </>
  )
}
