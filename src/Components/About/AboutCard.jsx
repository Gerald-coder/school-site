import React from "react";
import Title from "../COmmon/Title/Title";
import { homeAbout } from "../../dummyData";
import Awrapper from "./Awrapper";
import "./about.css";

function AboutCard() {
  console.log(homeAbout[1].cover);
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Title
              subtitle="Learn Anything"
              title="why you should learn online"
            />
            <div className="items">
              {homeAbout.map((val) => (
                <div key={val.id} className="item flexSB">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
}

export default AboutCard;
