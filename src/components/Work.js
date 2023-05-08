import React, { useState } from "react";
import SubWork from "./SubWork";
import Img1 from "../assets/admin_torog.PNG";
import Img2 from "../assets/eztoro.PNG";
import Img3 from "../assets/easyorder.PNG";
import Img4 from "../assets/mamapho-easyorder.PNG";
import Img5 from "../assets/merchant.PNG";
import Img6 from "../assets/t-market.PNG";

const content1 = `I am working on Front-end also Back-end of these projects. With my knowledge of the system,
 I can deploy products by myself to the QA environment
 -------
 `;

const content2 = `I am working on Front-end also Back-end of these projects. With my knowledge of the system,
I can deploy products by myself to the QA environment
-------
`;

const SubWorkList = [
  <SubWork
    content={content1}
    work="Fullstack development"
    work2="Fullstack development"
    work3="Fullstack development"
    title="Admin Portal"
    title2="Eztoro website"
    title3="EasyOrder Nescafe"
    img1={Img1}
    img2={Img2}
    img3={Img3}
  />,
  <SubWork
    content={content2}
    work="Fullstack development"
    work2="Fullstack development"
    work3="Fullstack development"
    title="EasyOrder Mamapho"
    title2="Merchant Portal"
    title3="T-Market Portal (Eztoro Admin Page)"
    img1={Img4}
    img2={Img5}
    img3={Img6}
  />,
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="work" className="section">
      <div className="container mx-auto">
        {React.cloneElement(SubWorkList[currentIndex], {
          listLength: SubWorkList.length,
          currentIndex: currentIndex,
          setCurrentIndex: setCurrentIndex,
        })}
      </div>
    </section>
  );
};

export default Work;
