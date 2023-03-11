import React from "react";
import { coursesCard } from "../../dummyData";
import "./course.css";

function CourseCard() {
  return (
    <>
      <section className="courseCard">
        <div className="container grid2">
          {coursesCard.map((val) => (
            <main className="items">
              <div className="content flex">
                <div className="left">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                </div>
                <div className="text">
                  <h1>{val.coursesName}</h1>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <label htmlFor="">(5.0)</label>
                  </div>
                  <div className="details">
                    {val.courTeacher.map((teacher) => (
                      <>
                        <main className="box">
                          <div className="dimg">
                            <img src={teacher.dcover} alt="" />
                          </div>
                          <div className="para">
                            <h4>{teacher.name}</h4>
                          </div>
                        </main>
                        <span>{teacher.totalTime}</span>
                      </>
                    ))}
                  </div>
                </div>
              </div>
              <div className="price">
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div>
              <button className="outline-btn">ENROLL NOW !</button>
            </main>
          ))}
        </div>
      </section>
    </>
  );
}

export default CourseCard;
