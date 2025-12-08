import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function BodyTwo() {
  return (
    <div className="lg:grid grid-cols-[1fr_1fr] w-full h-fit">
      <div className="bg-black pb-28 md:pl-15 md:pr-15 sm:pt-10 lg:pt-30 ">
        <h1 className="text-center text-4xl text-white font-bold font-aldrich pt-3">
          <span className="bg-[#ff3d00]/70 inline-block p-1.5">Our</span> Core
          Values
        </h1>
        <p className="underline text-center text-white">
          “For security, safety and protection of the nation”
        </p>
        <div className="font-roboto">
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Accountabiliy
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We take responsibility for our actions and decisions, ensuring
              that every duty is carried out with integrity.
            </span>
          </div>
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Trustworthy
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We uphold honesty and reliability so that the community and
              partners can confidently depend on us.
            </span>
          </div>
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Transparent
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We operate openly, making our processes, intentions, and decisions
              visible and understandable to all.
            </span>
          </div>
          <div className="bg-[#feff00] rounded-4xl border-2 border-white pl-1.5 mb-2">
            <span
              className="inline-block bg-black text-[15px] text-white font-bold p-0.5 w-[30%] 
                         rounded-2xl mr-1.5 pl-2 -translate-y-[5px] md:w-[20%] lg:w-[30%] xl:text-[20px]"
            >
              Selflessness
            </span>
            <span className="inline-block w-[60%] text-justify text-[10px] text-black xl:text-[12px]">
              We prioritize the welfare and safety of others above personal
              gain, serving with dedication and compassion.
            </span>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block">
        <img src="/images/bgvalue.png" alt="" className="w-full h-152" />
      </div>
    </div>
  );
}
export default BodyTwo;
