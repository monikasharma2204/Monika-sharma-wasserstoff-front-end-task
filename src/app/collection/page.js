"use client";
import Sidebar from "@/app/componet/Sidebar";
import Carousel from "../componet/Carasoul";
import { useState } from "react";
import { AnimatePresence, motion } from 'framer-motion';

export default function CollectionPage() {
  const [active, setActive] = useState("events");
  const collectionCarasoulArray = [
    { src: "/car1.jpg" },
    { src: "/car2.jpg" },
    { src: "/car3.jpg" },
    { src: "/car4.png" },
  ];
  const EventsCarasoulArray = [
    { src: "/event1.png" },
    { src: "/car2.jpg" },
    { src: "/event3.png" },
    { src: "/car4.png" },
  ];
  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <>
    
      <div className="flex flex-col relative justify-center items-center w-full h-screen">
       {active=="collections"?<>
       <motion.div
       key="collections"
        variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
             className="w-[70%]">
          <Carousel images={collectionCarasoulArray} hasText={false} hasCaption={true} />
        </motion.div>
        <Sidebar isEvent={false} />
       </>:<>
       <motion.div 
        key="collections"
        variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            
        className="w-[70%]">
          <Carousel images={EventsCarasoulArray} hasText={true} />
        </motion.div>
        <Sidebar  isEvent={true}/>

       </>}
       
        <div className="absolute left-8 bottom-7">
          <div className="bg-[#282B30] rounded-full flex w-72 h-10">
            <button
              onClick={() => setActive("events")}
              className={`flex-1 font-semibold text-white rounded-full transition-colors duration-300 ${
                active === "events" ? "bg-[#484E56]" : "bg-transparent"
              }`}
            >
              Events
            </button>
            <button
              onClick={() => setActive("collections")}
              className={`flex-1 font-lexend font-semibold  text-white rounded-full transition-colors duration-300 ${
                active === "collections" ? "bg-[#484E56]" : "bg-transparent"
              }`}
            >
              Collections
            </button>
          </div>
        </div>
        
      </div>
    
    </>
  );
}
