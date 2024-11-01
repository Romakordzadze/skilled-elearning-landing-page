import { Card } from "./Card"

export const CardsSection = () => {
  return (
    <section className=" bg-gradient-to-b pb-[80px] from-white to-[#f0f1ff] px-[16px] flex flex-col gap-[16px] md:grid md:grid-cols-2 xl:grid xl:grid-cols-3 items-center">
      <div className=" px-[28px] py-[25px] text-[#ffff] w-[343px] h-[120px] rounded-[10px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6]
       md:w-full md:h-[259px] ">
        <p className=" text-[24px] font-extrabold leading-[32px] md:mt-[56px] md:mr-[32px] ">Check out our most popular courses!</p>
      </div>
        <Card />
    </section>

  )
}
