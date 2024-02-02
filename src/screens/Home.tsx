import React from "react";
import bgGirl from "../../assets/bgGirlPic.png";
import Nav from "../../components/shared/Nav";
import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div
    className=" px-5 py-3 w-full "
    >
      <Nav/>
      <article
      className=" h-[10vmax] flex flex-end  items-end   "
      >
        <h1
        className="font-bold text-6xl text-white w-full ml-[9%] "
        >
          {" < "} <span className=" text-text-color w-full  ">Top Decoders</span> {" / >"}
        </h1>
      </article>
      <section
      className=" flex items-center justify-between m-24 h-[24vmin]  w-full mx-[32px] "
      >
        <ul
        className=" flex flex-col items-center justify-center gap-y-4 "
        >
          <Link to={`/softwareDevQuiz`}
          className="  w-full text-center text-white p-7 text-lg border font-semibold border-text-color rounded-xl "
          >
            Software development
          </Link>
          <Link to={`/dsQuiz`}
            className=" w-full text-center text-white p-7 text-lg border font-semibold border-text-color rounded-xl "
          >
            Data Science
          </Link>
          <li
          className=" text-center w-full text-white p-7 text-lg border font-semibold border-text-color rounded-xl "
          >
            Cyber Security
          </li>
        </ul>
        <div
        className=""
        style={{backgroundColor:"#142035"}}
        >
          <img src={bgGirl} alt="" className="" />
        </div>
      </section>
    </div>
  )
}
