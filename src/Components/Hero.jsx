import heroImg from '../assets/profile.jpg';
import { FaGithubSquare, FaInstagram, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import React from 'react';

const Hero = () => {
  return (
    <div className='bg-purple-200 py-20 min-h-screen relative'>
        <div className='align-element grid md:grid-cols-2 items-center gap-8' style={{ marginTop: '50px' }}>
            <article>
                <h1 className='text-5xl font-bold tracking-wider' style={{ marginTop: '20px' }}>I'm <span className='text-purple-800 text-7xl'>Neha</span></h1>
            
            <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>Web Developer</p>
            <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>Turning ideas into interactive reality</p>
            <div className='flex gap-x-4 mt-4'>
              <a href='https://github.com/neha-ghardwal'>
                <FaGithubSquare className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
              </a>
              <a href='https://www.linkedin.com/in/nehaghardwal/'>
                <FaLinkedin className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
              </a>
              <a href='#'>
                <FaInstagram className='h-8 w-8 text-slate-700 hover:text-black duration-300' />
              </a>
            </div>
            <button className="border-2 border-purple-800 rounded-lg px-4 py-2 mt-4 text-purple-800 hover:bg-purple-800 hover:text-white transition duration-300">
              Get in Touch
            </button>
            </article>
            <article className='hidden md:block' style={{ marginTop: '50px' }}>
            <img src={heroImg} className='h-350 w-350 lg:w-400 lg:h-400 lg:mx-32 rounded-full border-purple-900 border-8 hover:scale-105 ' />
            </article>
        </div>
        <div style={{ position: 'absolute', bottom: '120px', right: '80px', display: 'flex', gap: '20px' }}>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
        </div>
        <div style={{ position: 'absolute', bottom: '80px', right: '80px', display: 'flex', gap: '20px' }}>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
          <div className='w-3 h-3 rounded-full bg-purple-800'></div>
        </div>
    </div>
  );
};

export default Hero;
