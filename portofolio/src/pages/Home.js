import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Component/Profile";
import Main from "../Component/Main";
import Sidebar from "../Component/Sidebar";
import bg from "./../asset/svg/about.svg";
export default function Home() {
  return (
    <div className="">
      <div className="flex flex-row">
        {/* SIDEBAR */}
        <div className=" basis-1/5 bg-zinc-800 h-auto">
          <Sidebar />
        </div>
        {/* MAIN */}
        <div className="basis-4/5 bg-gradient-to-l from-slate-200 via-slate-50  to-slate-200 h-fit bg-contain">
          <Main />
          <div className="bg-blend-darken"></div>
        </div>
      </div>
    </div>
  );
}
