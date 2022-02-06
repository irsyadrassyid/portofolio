import React from "react";
import profile from "./../asset/img/profile.jpg";
import about from "./../asset/svg/about.svg";
import contact from "./../asset/svg/contact.svg";
import education from "./../asset/svg/education.svg";
import skills from "./../asset/svg/skills.svg";
import experiment from "./../asset/svg/experiment.svg";
export default function Sidebar() {
  return (
    <div className="fixed top-20 w-1/5 h-screen flex flex-col items-center">
      <div
        className="w-40 h-40 bg-no-repeat bg-contain rounded-full "
        style={{ backgroundImage: `url(${profile})` }}
      ></div>

      <div className="py-10  space-y-2 divide-y divide-zinc-700 text-2xl text-slate-100 font-sans ">
        <div className=" hover:text-gray-500 active:text-sky-500">
          <img className="inline-flex mx-8 " src={about} alt="" />
          <span>About me</span>
        </div>
        <div className=" hover:text-gray-500 active:text-sky-500">
          <img className=" inline-flex mx-8" src={experiment} alt="" />
          <span>Experiens</span>
        </div>
        <div className=" hover:text-gray-500 active:text-sky-500">
          <img className=" inline-flex mx-8" src={education} alt="" />
          <span>Education</span>
        </div>
        <div className=" hover:text-gray-500 active:text-sky-500">
          <img className=" inline-flex mx-8" src={skills} alt="" />
          <span>Skills</span>
        </div>
        <div className=" hover:text-gray-500 active:text-sky-500">
          <img className=" inline-flex mx-8" src={contact} alt="" />
          <span>Contact</span>
        </div>
      </div>
    </div>
  );
}
