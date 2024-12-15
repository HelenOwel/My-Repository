import React, { useEffect, useState } from "react";
import pec from "../assets/Ada.png";
import meme from "../assets/girl.png";
import jane from "../assets/lulu.png";
import { FaQuoteLeft } from "react-icons/fa";

function Testimonial() {
  const [count, setCount] = useState(0);

  const testy = [
    {
      id: 1,
      image: pec,
      description:
        "I absolutely love your design! It's visually stunning, incredibly creative, and highly user-friendly. The attention to detail",
      name: "Angel Robert",
      occupation: "Designer",
    },
    {
      id: 2,
      image: meme,
      description:
        "Helen Owel created a sleek, functional design that perfectly met our needs. Highly professional and easy to work with!",
      name: "Mercy James",
      occupation: "Chef",
    },
    {
      id: 3,
      image: jane,
      description:
        "Helen Owel delivered a stunning and user-friendly design that exceeded our expectations. Their creativity, professionalism, and timely delivery made the entire process seamless. Highly recommend!",
      name: "Lucien Abang",
      occupation: "Field Assitant",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount === testy.length - 1 ? 0 : prevCount + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [testy.length]);

  return (
    <div className="mt-24 bg-red-600 w-full pb-[20px] mb-[50px] pt-[50px]  md:pt-[80px]">
         <div className="flex justify-center items-center text-8xl text-pink-400 pb-14" >
       <FaQuoteLeft />
       </div>
   
      <div className="md:w-[800px]  pt-[95px] mx-auto relative overflow-x-hidden">
    
        <div
          className="flex transition-transform duration-500  ease-in-out  "
          style={{ transform: `translateX(-${count * 100}%)` }}
        >
          {testy.map((item, index) => (
            <div key={item.id} className="flex-none w-full ">
             
              <div className="bg-white rounded-full w-full  flex items-center justify-center  relative">
             
                <div className="  ">
                  <div className="absolute  -top-28 md:right-[45%] right-[37%] rounded-full  pt-4">
                    <div className="border-8 px-2 py-3 border-dotted rounded-full w-[100px] h-[100px]  ">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[100px] h-[100px] rounded-full  bg-white"
                      />
                    </div>
                  </div>
                  <p className="mt-14 mx-5 md:w-[760px]  text-center">{item.description}</p>
                  <h3 className="mx-5 py-1 text-red-600 font-semibold text-center">{item.name}</h3>
                  <p className="mx-12 text-center">{item.occupation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 pt-3 items-center">
        {testy.map((_, index) => (
          <span
            key={index}
            className={`h-4 w-4 rounded-full ${count === index ? "bg-black" : "bg-white"}`}
            onClick={() => setCount(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
