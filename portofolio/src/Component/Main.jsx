import React from "react";
import img from "../asset/img/1.jpg";
const skillsRate = {
  React: { sky: 4, slate: 1 },
  Nodejs: { sky: 3, slate: 2 },
  Express: { sky: 3, slate: 2 },
  MongoDb: { sky: 3, slate: 2 },
  MySql: { sky: 3, slate: 2 },
};
const result = Object.keys(skillsRate).map((rate, idx) => (
  <div className="flex justify-between w-1/2 mx-auto">
    <span className=" text-xl font-inter font-semibold" key={idx}>
      {rate}
    </span>
    <div className="">
      {Array.from({ length: skillsRate[rate].sky }).map((_) => (
        <div className="inline-block ring-gray-900/10 w-3 h-3 bg-sky-400 rounded-full"></div>
      ))}
      {Array.from({ length: skillsRate[rate].slate }).map((_) => (
        <div className="inline-block ring-gray-900/10 w-3 h-3 bg-slate-400 rounded-full"></div>
      ))}
    </div>
  </div>
));
export default function Main() {
  return (
    <div className="">
      <div
        className="bg-cover bg-no-repeat ml-auto max-w-full h-[440px] "
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="flex flex-col justify-center items-start w-full h-full bg-gradient-to-l from-transparent via-zinc-700/80 to-zinc-900">
          <span className="ml-5 text-7xl font-inter shadow-lg  text-slate-50 ">
            Muhamad Irsad
          </span>
          <span className="ml-5 text-5xl font-inter shadow-lg  text-slate-50 ">
            Web Development
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full mt-10  border-b  mx-auto">
        <span className="w-1/2 text-center mx-auto mt-5 mb-5 text-4xl font-inter font-medium text-slate-900 ">
          About me
          <hr className="w-full h-1 mt-2 bg-gradient-to-bl from-sky-400 to-sky-500 border-0" />
        </span>
        <p className="w-3/4 mx-auto text-xl font-inter text-center  text-slate-500 mb-4">
          Saya telah menjalani pelatihan fullstack developer di www.eduwork.id
          dan saat ini saya memiliki konsultan pribadi yang akan membantu saya
          saat bekerja. Dengan menghire saya perusahaan anda akan mendapatkan
          bantuan konsultan melalui saya.
        </p>
      </div>
      <div className="flex flex-col w-full mt-10  border-b mx-auto pb-8 ">
        <span className="w-1/2 text-center mx-auto mt-5 mb-5 text-4xl font-inter font-medium text-slate-900 ">
          Experiens
          <hr className="w-full h-1 mt-2 bg-gradient-to-bl from-sky-400 to-sky-500 border-0" />
        </span>
        <div className="flex xl:flex-row items-center md:flex-col">
          <div className="relative px-5 pt-10 pb-8 bg-white/20 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
            <div className="absolute top-1 left-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="absolute top-1 right-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="absolute bottom-1 left-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="absolute bottom-1 right-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <span className=" block font-inter text-xl mb-3">
              Fullstack Web Developer ( Intership )
            </span>
            <p className="w-full text-lg mx-auto font-inter text-slate-800">
              Disini saya belajar menjadi fullstack web developer di bimbing
              oleh mentor bernama Edy Hartono selama 3 bulan
            </p>
            <span className="block font-inter text-base w-full text-right">
              Eduwork.id | Jan 2021- jan 2021
            </span>
          </div>
          <div className="relative px-6 pt-10 pb-8 bg-white/20 shadow-xl ring-1 ring-gray-900/5 sm:max-w-lg sm:mx-auto sm:rounded-lg sm:px-10">
            <div className="absolute top-1 left-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="absolute top-1 right-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="absolute bottom-1 left-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <div className="absolute bottom-1 right-1 ring-1 ring-gray-900/10 w-2 h-2 bg-slate-400 rounded-full"></div>
            <span className=" block font-inter text-xl mb-3">
              Digitalent ( Beasiswa )
            </span>
            <p className="text-lg mx-auto font-inter text-slate-800">
              Mengikuti program beasiswa dari Indosat Ooredoo untuk mencetak
              developer/programmer muda Indonesia yang siap bersaing di dunia
              ekonomi digital.
            </p>
            <span className="block font-inter text-base w-full text-right">
              idcamp.indosatooredoo.com | jul 2021 - jul 2021
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3fullmt-10   border-b  mx-auto">
        <span className="w-1/2 text-center mx-auto mt-5 mb-5 text-4xl font-inter font-medium text-slate-900 ">
          Education
          <hr className="w-full h-1 mt-2 bg-gradient-to-bl from-sky-400 to-sky-500 border-0" />
        </span>
        <span className="w-3/4 mx-auto text-xl font-inter text-center  text-slate-500 mb-4">
          <li>January 2020 - Mei 2021 : SMK Negeri 1 Pacet</li>
          <li>January 2021 - sekarang : mentoring eduwork.id</li>
        </span>
      </div>
      <div className="flex flex-col w-3fullmt-10   border-b mx-auto">
        <span className="w-1/2 text-center mx-auto mt-5 mb-5 text-4xl font-inter font-medium text-slate-900 ">
          Skills
          <hr className="w-full h-1 mt-2 bg-gradient-to-bl from-sky-400 to-sky-500 border-0" />
        </span>
        <div></div>
        {result}
      </div>
      <div className="flex flex-col w-3fullmt-10   border-b  mx-auto">
        <span className="w-1/2 text-center mx-auto mt-5 mb-5 text-4xl font-inter font-medium text-slate-900 ">
          Contact
          <hr className="w-full h-1 mt-2 bg-gradient-to-bl from-sky-400 to-sky-500 border-0" />
        </span>
        <a
          href="https://www.flaticon.com/free-icons/facebook"
          title="facebook icons"
        >
          Facebook icons created by Pixel perfect - Flaticon
        </a>
        <p className="w-3/4 text-xl mx-auto font-inter text-center text-slate-500 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          voluptates id. Similique qui sunt delectus. Iste saepe nihil ex quam!
          Nesciunt temporibus impedit voluptatibus
        </p>
      </div>
      <div className="w-52 h-56 transform hover:[rotateY(180deg)] mx-auto mt-10 bg-gradient-to-bl from-sky-400 to-sky-500  rounded-lg shadow-sm"></div>
      <div className="h-96"></div>
    </div>
  );
}
