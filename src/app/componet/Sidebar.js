import Avatar from "./Avatar";
import { motion } from "framer-motion";
const Cards = () => {
  return (
    <>
      <div className="w-[144px] h-[218px] rounded-lg bg-[#B9A0FF] p-2 gap-2 flex flex-col">
        <div className="w-full flex justify-between items-center">
          <div className="bg-black w-[44px] h-[14px]  rounded-lg flex justify-center items-center text-[9.2px]">
            2024
          </div>
          <div className=" text-black text-[12.2px] font-Inter">
            By <span className="font-bold text-black">Pablo</span>
          </div>
        </div>
        <div className="text-[14px] text-black  font-semibold text-center">
          Collectable Name
        </div>

        <div className="rounded-lg border-black-100">
          <img
            className="rounded-lg "
            style={{ border: "1px solid black" }}
            src="/tvOnHead.png"
          />
        </div>
      </div>
    </>
  );
};

const sidebarMotionVariants = {
  animate: {
    y: [0, -100],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "repeat",
        duration: 1.5,
        ease: "linear",
      },
    },
  },
};
const Sidebar = ({ isEvent }) => {
  return (
    <div className="flex w-[45%] h-screen  absolute right-0  text-white  animate__animated  animate__animated animate_faster bg-[#15181B]">
      <div className="bg-[#B9A0FF] w-[90px] overflow-hidden h-screen flex items-center justify-center    ">
        <motion.div
          variants={sidebarMotionVariants}
          animate="animate"
          transition={1}
          className="flex flex-col items-center justify-center h-full gap-[280px] text-black font-bold text-3xl"
        >
          {/* Rotate each span individually to make them vertical */}
          <motion.span className="whitespace-nowrap krona  rotate-90 ">
            Event: Oasis Bus tour, JLN Stadium, Delhi
          </motion.span>
          <motion.img
            src="/rollLogo.png"
            alt="logo"
            className="my-4 rotate-90"
          />
          <motion.span className="whitespace-nowrap  krona  rotate-90 ">
            Collection Live: Meta Lives, live on astrix
          </motion.span>
        </motion.div>
      </div>{" "}
      <div className="flex flex-col font-lexend  h-screen  justify-around pl-10 pr-12">
        {isEvent ? (
          <>
            <div className="w-[270px] font-lexend text-[26px] font-bold">
              Explore Youre First Event
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-[34px] font-bold ">Event Name</h1>
              <div className="flex gap-2 ">
                <div className="flex items-center justify-center gap-2 font-lexend font-semibold">
                  <img src="/location.png" />
                  Venue
                </div>
                <div className="flex items-center justify-center gap-2 font-lexend font-semibold">
                  <img src="/clock.png" />
                  04/3/2024 @19:00
                </div>
              </div>

              <small className="text-[16px] font-small font-semibold w-[50%]">
                Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi
                et sed ipsum. Pellentesque mattis condimentum ut nulla.
              </small>
            </div>
            <div className=" text-[24px] font-bold">Artist Lineup</div>
            <div className="flex ">
              <img
                src="/eventSide2.png"
                className="w-[60%] h-[80%] transform scale-90 rounded-lg"
              />
              <img
                src="/eventSide3.png"
                className="w-[70%] h-[80%] transform scale-110 rounded-lg"
              />
              <img
                src="/eventSide1.png"
                className="w-[60%] h-[80%] transform scale-90 rounded-lg "
              />
            </div>
            <div className="flex items-end justify-between ">
              <img src="/qrCode.png" />
              <div className="bg-[#FFCA5F] text-[24px] pl-4 pr-4 cursor-pointer font-bold rounded-[22px] text-black flex items-center justify-center">
                Join Waitlist
              </div>
            </div>
          </>
        ) : (
          <>
            {" "}
            <div className="w-[270px] font-lexend text-[26px] font-bold">
              Explore Youre First Collectible
            </div>
            <div className="flex flex-col gap-5">
              <div className="text-[57px]  break-words w-[180px] leading-[64px] font-extrabold">
                Meta Lives
              </div>

              <h1 className="text-[24px] font-bold ">Live in Astrix</h1>
              <small className="text-[16px] font-small font-semibold">
                Lorem ipsum dolor sit amet consectetur. Ac lorem massa in morbi
                et sed ipsum. Pellentesque mattis condimentum ut nulla.
              </small>
            </div>
            <div className="flex gap-4 items-center">
              <Avatar />
              <span className="text-[20px] font-small font-medium">
                22k People intrested.
              </span>
            </div>
            <div className="text-1xl font-semibold">Collectibles</div>
            <div className="flex gap-4 w-[120%]">
              <Cards />
              <Cards />
              <Cards />
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-[#FFCA5F] text-[24px] pl-4 pr-4 cursor-pointer font-bold rounded-[22px] text-black flex items-center justify-center">
                Join Waitlist
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
