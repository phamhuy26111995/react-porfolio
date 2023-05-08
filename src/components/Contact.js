import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from 'react-hot-toast';
import Loader from "./Loader";
import {SERVICE_ID , TEMPLATE_ID, PUBLIC_KEY} from '../data/EmailJS';

const notifyFail = () => toast.error('Email is invalid');
const notifyFailToUseEmail = () => toast.error('Fail to send messages');
const notifySuccess = () => toast.success('Thank you for your message ! I will contact you soon');

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const { user_email } = form.current;

    if (!regexEmail.test(user_email.value)) {
      notifyFail();
      clearInput();
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);
      setIsLoading(false);
      notifySuccess();
      clearInput();
    } catch (e) {
      console.log(e);
      notifyFailToUseEmail();
      clearInput();
      return;
    }


  };

  const clearInput = () => {
    const { user_email, user_name, message } = form.current;
    user_email.value = '';
    user_name.value = '';
    message.value = '';
  }

  return (
    <section id="contact" className="py:16 lg:section">

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <motion.div
            className="flex-1"
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <div>
              <h4
                className="text-xl uppercase text-accent font-medium mb-2
              tracking-wide
              "
              >
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work together
              </h2>
            </div>
          </motion.div>
          <motion.form
            onSubmit={(e) => sendMessage(e)}
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            ref={form}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all"
              type="text"
              placeholder="Your email"
              name="user_email"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus: border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            <button disabled={isLoading} className="btn btn-sm w-[170px]">{isLoading ? <Loader color={"dark:fill-gray-300"} /> : "Send message"}</button>
          </motion.form>
        </div>

      </div>
     <Toaster
      toastOptions={{
        className: '',
        style: {
          background : 'linear-gradient( 92.23deg, #ff56f6 21.43%, #b936ee 50.63%, #3bace2 100%, #406aff 117.04%',
          color: 'white',
          fontWeight : 'bold'
        },
      }}
     
     />
    </section>
  );
};

export default Contact;
