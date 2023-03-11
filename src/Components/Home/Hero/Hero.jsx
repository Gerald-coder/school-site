import React from "react";
import Title from "../../COmmon/Title/Title";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <article className="row">
            <Title
              subtitle="WELCOME TO ACADEMIA"
              title="best online education"
            />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
              laudantium, alias iusto cum suscipit itaque hic asperiores animi
              saepe quasi eum quia a est sequi at consectetur quidem nesciunt
              fuga.
            </p>
            <div className="button">
              <button className="primary-btn primary">
                GET STARTED NOW<i className="fa fa-arrow-right"></i>
              </button>
              <button className="primary">
                VIEW COUSRE<i className="fa fa-arrow-right "></i>
              </button>
            </div>
          </article>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
