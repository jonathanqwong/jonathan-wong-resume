import React from 'react';
import Selfie from '../images/selfie.jpeg';

const Home = ({ name, title }) => (
  <section id="about" className="min-h-screen flex items-center pt-16 px-6 bg-slate-50 dark:bg-slate-950">
    <div className="max-w-5xl mx-auto w-full py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-widest uppercase mb-3">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white leading-tight mb-6">{name}</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-8 max-w-lg">{title}</p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#experience"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-block px-6 py-3 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 dark:hover:border-blue-400 dark:hover:text-blue-400 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-4 ring-blue-100 dark:ring-blue-900">
            <img src={Selfie} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;
