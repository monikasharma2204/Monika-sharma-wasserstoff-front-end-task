import "../globals.css";
import Link from "next/link";
export default function CollectionLayout({ children }) {
  return (
   
    
      <div
        className="w-screen h-screen relative animate__animated  animate__animated animate_faster "
        style={{ background: "var(--Palette-Noble-Black-700, #15181B)" }}
      >
      <Link href="/"> 
      <a>
        <div className="flex z-10 cursor-pointer gap-3 items-center absolute top-5 left-8">
         <img
            src="/AstrixBranding.png"
            className="w-[58px] h-[58px]"
            alt="logo"
          />
        
          <h1 className="text-[48px]  text-[#FFCA5F] font-lexend font-bold ">
            Astrix.
          </h1>
        </div> </a> </Link>
       
        <div className="absolute h-screen flex flex-col justify-start gap-[5rem] pl-10    leading-10 top-[6rem] font-extrabold text-8xl text-[#FFFFFF33]">
          <div className="break-all w-[16.5rem] leading-[6rem] opacity-[0.4]">
            {" "}
            ASTRIX
          </div>

          <div className="break-all w-[16.5rem] leading-[6rem] opacity-[0.4]">
            COLLECTIBLE
          </div>
          
        </div>
        {children}
      </div>
    
  );
}
