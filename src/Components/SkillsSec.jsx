import React from 'react';
import SectionTitle from './SectionTitle';
import { FaHtml5, FaJs, FaNodeJs, FaPython, FaReact, FaGithub } from 'react-icons/fa';
import javascriptIcon from '../assets/javascript.ico';
import htmlIcon from '../assets/html5.ico';
import pyIcon from '../assets/python.ico';
import reactIcon from '../assets/react.ico';
import nodeIcon from '../assets/node-js.ico';
import mongoIcon from '../assets/mongodb.ico';
import sqlIcon from '../assets/mysql.ico';


const SkillsSec = () => {
  return (
    <section className='py-20 align-element' id='skills'>
      <SectionTitle text='tech stack' />
      <div className="py-20 grid grid-cols-4 gap-2">
        <div className="w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
            <img src={htmlIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>HTML</h4>
        </div>
        <div className="w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
          <img src={javascriptIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>JavaScript</h4>
        </div>
        <div className="w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
        <img src={nodeIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>NodeJs</h4>
        </div>
        <div className="w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
        <img src={reactIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>ReactJs</h4>
        </div>
      </div>

      <div className="py-0.5 grid grid-cols-3 gap-5">
        <div className="mx-10 w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
        <img src={pyIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>Python</h4>
        </div>
        <div className="w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
        <img src={mongoIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>Mongodb</h4>
        </div>
        <div className="w-40 h-40 bg-slate-200 rounded-lg flex flex-col justify-center items-center">
        <img src={sqlIcon} alt="HTML Icon" className="h-14 w-14" />
          <h4 className='mt-2 font-bold'>MySql</h4>
        </div>
      </div>
    </section>
  );
};

export default SkillsSec;
