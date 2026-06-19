import React from 'react';
import Section from './Section';
import skillsData from '../mock/skills.json';

const categoryOrder = ['Testing', 'Languages', 'Frameworks', 'Tools'];

const Skills = () => {
  const grouped = categoryOrder.reduce((acc, cat) => {
    acc[cat] = skillsData.filter(s => s.category === cat);
    return acc;
  }, {});

  return (
    <Section id="skills" title="Skills">
      <div className="grid md:grid-cols-2 gap-8">
        {categoryOrder.map(category => (
          <div key={category} className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6">
            <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">{category}</h3>
            <div className="flex flex-wrap gap-2">
              {grouped[category].map(s => (
                <span
                  key={s.id}
                  className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-sm rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  {s.skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
