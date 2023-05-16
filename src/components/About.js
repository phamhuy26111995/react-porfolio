import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Link } from "react-scroll";

const ABOUT_CONTENT =
  "My goal is not just to be a developer but also to become an expert in software development, includes analyst client's businesses, building and deploying product";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section id="about" className="section" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 bg-about bg-center bg-contain bg-no-repeat h-[640px] mix-blend-lighten"
          ></motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">About me</h2>
            <h3 className="h3">
              I am a Back-end and Front-end Developer
            </h3>
            <p className="mb-6">{ABOUT_CONTENT}</p>
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={2} duration={2} /> : null}
                </div>
                <div className="font-family text-sm tracking-[2px]">
                  Years of <br />
                  Experience in software development
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={4} duration={2} /> : null}
                </div>
                <div className="font-family text-sm tracking-[2px]">
                  Years of <br />
                  Experience in IT industry
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient">
                  {inView ? <CountUp start={0} end={10} duration={2} /> : null}+
                </div>
                <div className="font-family text-sm tracking-[2px]">
                  Project <br />
                  Completed
                </div>
              </div>
            </div>

            <div className="flex gap-x-8 items-center">
              <Link smooth="true" spy="true" to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
