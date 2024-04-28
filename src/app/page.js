"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function Home() {
  const [animate,setAnimate] = useState(false)
  const router = useRouter();
  const handleClick = () => {

    setAnimate(true)

    setTimeout(()=>{
      router.push("/collection");

    },500)
  };
  return (
    <main className=" ">
      <div  onClick={handleClick} className={ animate?"animate__animated  animate__slideOutUp animate_faster  cursor-pointer bg-landingBg w-full h-screen flex flex-col justify-center items-center relative" :" bg-landingBg cursor-pointer w-full h-screen flex flex-col justify-center items-center relative"} >
        <header className="flex gap-3 items-center absolute top-16 left-10">
          <img src="/logo.png" className="w-[48px] h-[40px]" alt="logo" />
          <h1 className="text-[44px] font-Space-Grotesk font-bold ">Astrix.</h1>
        </header>

        <div className="font-lexend text-[48px] font-bold uppercase w-[900px] overflow-hidden h-auto flex flex-col gap-4 justify-center">
          <span className="flex items-center">
            We{" "}
            <div className="container">
              {" "}
              <img src="/balloons.png" className="" />{" "}
            </div>
            <div className="next-element"> organize the</div>{" "}
          </span>
          <span className="flex items-center">
            {" "}
            connection
            <div className="container">
              {" "}
              <img src="nature.png" className="" />{" "}
            </div>
          </span>
          <span className="flex items-center">
            <div className="container-undo">
              {" "}
              <img src="/crowdTwo.png" className="" />
            </div>
            <div className="next-element-undo">
              between <img src="/singer.png" className="inline h-10" /> music{" "}
            </div>
          </span>
          <span className="flex items-center">
            {" "}
            artist 
            <div className="container">
            <img
              src="/concert.png"
              className="inline h-10"
            />
            </div>
            <div className="next-element">
            culture{" "}
            </div>
             <div className="container-undo next-element"><img src="/crowd.png" className="inline h-10 w-[110px]" />{" "}</div>
            
          </span>
          <span className="flex items-center">
            {" "}
            <div className="container-undo"> <img src="/flower.png" className="inline h-10" /> </div>
           <div className="next-element-undo"> art{" "} <img src="/pumpkin.png" className="inline h-10" />  & collections.</div>
            
          </span>
        </div>
      </div>
    </main>
  );
}
