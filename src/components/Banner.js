import React from "react";
import Blob from "./Blob";
import JavaFile from "../assets/java.pdf";
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section className="min-h-[85vh] lg:min-h-[78] flex items-center" id="home">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px]"
            >
              PHAM <span>HUY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white text-2xl">I am a </span>
              <Typed
                className="text-2xl text-gradient"
                strings={[
                  "Back-end Java Developer",
                  "Front-end React Developer",
                ]}
                typeSpeed={100}
                backSpeed={100}
                loop
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              I am a Full-stack developer with two years of experience as Web
              Developer and four years working in the IT industry. With my
              knowledge, I am working to create a product and want to make my
              product the best possible. I also spend my free time learning new
              technologies and making small projects to improve and upgrade
              myself. Therefore, my goal is to be the best version of myself
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <Link smooth="true" spy="true" to="contact">
                <button className="btn btn-lg">Contact me</button>
              </Link>
              <a href={JavaFile} className="text-gradient btn-link" download>
                Download My CV
              </a>
            </motion.div>

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://www.linkedin.com/in/huy-pham26111995/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://github.com/phamhuy26111995" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/phamhuy19951126"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </motion.div>
          </div>
          <motion.div
            className="hidden lg:flex flex-1 lg:max-w-[1000px]"
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            whileInView={"show"}
          >
            <Blob />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
