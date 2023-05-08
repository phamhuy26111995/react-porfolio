import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const services = [
  {
    name: "Back-end Java Development",
    description:
      "Develop API to send data in JSON format. My spirit work is not just to make it run but also to make it maintainable and run with the best performance, and the important thing is the experience of users.",
    link: "Learn more",
  },
  {
    name: "Front-end React Development",
    description:
      "Although my experience in front-end development is still less, I try to improve my skills day by day to bring the best experience in UI/UX for my users ",
    link: "Learn more",
  },
  {
    name: "Deploy product",
    description:
      "With all my knowledge about the system, my work is not in development. I also can deploy my product. Although my expertise in this major is still limited, I try to get better day by day",
    link: "Learn more",
  },
];

const Services = () => {
  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text and img  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1  lg:bg-bottom  n mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">What I do.</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              I am a Web Developer with 2 years of experience
            </h3>
            <button className="btn btn-sm">See my work</button>
          </motion.div>
          {/* {services} */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <div>
              {services.map((service, index) => {
                const { name, description, link } = service;
                return (
                  <div
                    className="border-b border-white/20  py-[20px] flex"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {name}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                  
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
