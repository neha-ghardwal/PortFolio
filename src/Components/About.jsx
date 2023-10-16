import React from 'react';

const About = () => {
  return (
    <section className='bg-purple-200 py-20' id='about'>
      <article className='align-element font-bold grid text-4xl font-serif text-purple-950 py-20 tracking-wider'>
        <div className="flex items-center">
          <span>About</span>
          <div className="mx-4 h-1 bg-sky-950 flex-grow">
          </div>
        </div>
        <p className=' mt-8 ml-4 text-lg text-slate-700 capitalize tracking-wide font-light'>
          An adept and dynamic web developer with a profound mastery of Python, coupled with an intermediate proficiency in Data Structures and Algorithms (DSA). With a passion for crafting innovative and efficient solutions, I bring a blend of technical expertise and creativity to every project. Equipped with a comprehensive understanding of web development frameworks and a keen eye for detail, I am dedicated to delivering seamless, user-centric experiences that redefine the digital landscape.
        </p>
        
      </article>
      
    </section>
  );
};

export default About;
