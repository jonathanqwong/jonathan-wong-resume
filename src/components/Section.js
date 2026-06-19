import React from 'react';

const Section = ({ id, title, children, className = '' }) => (
  <section id={id} className={`py-20 px-6 max-w-5xl mx-auto ${className}`}>
    {title && (
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">{title}</h2>
        <div className="mt-2 h-1 w-12 bg-blue-600 dark:bg-blue-400 rounded" />
      </div>
    )}
    {children}
  </section>
);

export default Section;
