export const About = () => {
  return (
    <section className='w-full mt-[38px] pl-[16px] md:flex md:justify-between' >
        <div className=' max-w-[343px]'>
            <div>
                <h1 className='text-[40px] font-extrabold text-[#13183F] leading-[51px]' >Maximize skill,
                    minimize budget
                </h1>
            </div>
            <div>
                <p className='text-[16px] font-medium text-[#83869A] mt-[26px] mb-[24px]'> Our modern courses across a range 
                    of in-demand skills will 
                    give you the knowledge 
                    you need to live the 
                    life you want.</p>
            </div>
            <div>
                <button className='w-[167px] h-[56px] rounded-[31.5px] bg-gradient-to-b from-[#FF6F48] to-[#F02AA6] font-bold text-[#ffffff] text-[16px] opacity-100 hover:opacity-50 transition-opacity duration-200'>Get Started</button>
            </div>
        </div>
        <div className=" w-[327px] h-[301px] mt-[26px] mx-auto md:hidden">
            <img className="w-full h-full " src="../../public/img.png" alt="" />
        </div>
        <div className="hidden md:block  w-[900px]  overflow-hidden">
            <img className=' md:block w-fill translate-x-[220px] -translate-y-[100px]' src="../../public/img2.png" alt="" />
         </div>
    </section>
  )
}
