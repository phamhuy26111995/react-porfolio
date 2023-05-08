import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const SubWork = (props) => {
  const { currentIndex, setCurrentIndex, listLength } = props;
  return (
    <div className="relative">
    
        {parseInt(currentIndex) > 0 && (
          <AiOutlineLeft
            onClick={() => setCurrentIndex(parseInt(currentIndex) - 1)}
            className="absolute left-0 top-[50%] text-[40px]  translate-x-[-60px] cursor-pointer"
          />
        )}
        {parseInt(currentIndex) < listLength - 1 && (
          <AiOutlineRight
            onClick={() => setCurrentIndex(parseInt(currentIndex) + 1)}
            className="absolute right-0 top-[50%] text-[40px]  translate-x-[60px] cursor-pointer"
          />
        )}


      <div className="flex flex-col lg:flex-row gap-x-10">
        {/* {image column 1} */}
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
        >
          <div>
            <h2 className="h2 leading-tight text-accent">
              My Latest <br />
              Work.
            </h2>
            <p className="max-w-sm mb-16">
                {props.content}
            </p>
            {/* <button className="btn btn-sm">View all projects</button> */}
          </div>
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={props.img1}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">{props.work}</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-white text-3xl">{props.title}</span>
            </div>
          </div>
        </motion.div>
        {/* {image column 2} */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex-1 flex flex-col justify-between"
        >
          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={props.img2}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">{props.work2}</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-white text-3xl">{props.title2}</span>
            </div>
          </div>

          <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
            <img
              className="group-hover:scale-125 transition-all duration-500"
              src={props.img3}
              alt=""
            />
            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
              <span className="text-gradient">{props.work3}</span>
            </div>
            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
              <span className="text-white text-3xl">{props.title3}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SubWork;
