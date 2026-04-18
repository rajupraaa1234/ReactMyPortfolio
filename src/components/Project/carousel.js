import React, { useState } from "react";
import { motion } from "framer-motion";
import edutech from "../../assets/Edutech_img-scaled.jpg"
import finance from "../../assets/finanace.jpg"
import bank from "../../assets/bank.jpg"
import astrologer from "../../assets/astrologer.png"
 
export function ShowcaseCarousel() {
    const [index, setIndex] = useState(0);
  
    const items = [
      {
        title: "Edutech App",
        description: "An AI-powered personalised adaptive online Maths learning platforms that effectively allows students to advance at their own pace",
        image: edutech,
        live: "https://play.google.com/store/apps/details?id=com.mindspark.edicine&hl=en_IN",
        code: "#",
      },
      {
        title: "Finance App",
        description: "Built a finance application to simplify expense tracking and financial insights",
        image: finance,
        live: "https://play.google.com/store/apps/details?id=com.mycash.moneytap.app&hl=en_IN"
      },
      {
        title: "Banking App",
        description: "Built a banking application that simplifies transactions, account management, and user interactions.",
        image: bank,
        live: "https://play.google.com/store/apps/details?id=com.grppl.android.shell.CMBlloydsTSB73"
      },
      {
        title: "Astrologer App",
        description: "Developed an astrology app providing daily insights, horoscopes, and personalized predictions",
        image: astrologer,
        live: "https://play.google.com/store/apps/details?id=com.astrology.panditji&hl=en_IN"
      },
    ];
  
    const next = () => setIndex((prev) => (prev + 1) % items.length);
    const prev = () => setIndex((prev) => (prev - 1 + items.length) % items.length);
  
    const current = items[index];
  
    return (
      <div className="py-16 px-4 text-center text-white overflow-x-hidden">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Things I have developed in several domains
        </h2>
        <div className="relative w-full max-w-[90%] sm:max-w-sm mx-auto">
          
          {/* Card */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-4 md:p-6"
          >
            

          <div className="flex justify-center">
             <img
              src={current.image}
              alt={current.title}
              width={'50%'}
              height={'50%'}
              className="w-full max-w-full h-[150px] sm:h-[220px] object-cover rounded-2xl"
            />
          </div>
   
  
            <h3 className="text-lg md:text-2xl font-semibold mt-4">
              {current.title}
            </h3>
  
            <p className="text-gray-300 text-sm md:text-base mt-2">
              {current.description}
            </p>
  
            {/* Buttons */}
            <div className="mt-5 flex flex-col sm:flex-row justify-center gap-2">
              {current.live && (
                <a href={current.live} target="_blank" rel="noreferrer">
                  <button className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/40">
                    Live
                  </button>
                </a>
              )}
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-12 mt-6">
            <button
              onClick={prev}
              className="px-5 py-2 rounded-full bg-white/10 hover:bg-indigo-500 transition backdrop-blur-md border border-white/20 hover:scale-105"
            >
              ←
            </button>

            <button
              onClick={next}
              className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition shadow-lg shadow-indigo-500/40 hover:scale-105"
            >
              →
            </button>
          </div>
        </div>
  
        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {items.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`cursor-pointer rounded-full transition-all duration-300 ${
                i === index
                  ? "w-3 h-3 bg-white scale-125 shadow-md"
                  : "w-2.5 h-2.5 bg-white/60"
              }`}
            />
          ))}
        </div>

        <br/>
        <br/>
      </div>
    );
  }