import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="bg-white flex-row justify-center w-full">
      <div className="bg-white h-[372px] relative flex items-center justify-center">
        <div className="absolute w-full h-[38px] top-0 left-0 bg-[#708fff]">
          <div className="absolute top-[9px] left-[239px] [font-family:'Inter-Regular',_Helvetica] font-normal text-white text-[16px] tracking-[0] leading-[normal] whitespace-nowrap">
            
          </div>
        </div>
        <img className="absolute h-[121px] top-[93px]" alt="Fatal error" src="fatal-error.png" />
        <div className="absolute top-[216px] [font-family:'Inter-SemiBold',_Helvetica] font-semibold text-black text-[24px] tracking-[0] leading-[normal]">
          OOPS!
        </div>
        <p className="absolute top-[251px] [font-family:'Inter-Medium',_Helvetica] font-medium text-[#504f4f] text-[13px] tracking-[0] leading-[normal]">
          There is no account found. Please click below to add your account
        </p>
        <div className="absolute w-[161px] h-[22px] top-[278px] bg-[#5f82ff] rounded-[4px]">
          <Link href="/dashboard" className="flex justify-center align-middle [font-family:'Inter-SemiBold',_Helvetica] font-semibold    text-white text-[13px] tracking-[0] leading-[normal] text-center">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}