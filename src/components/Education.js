import React from 'react';
import Section from './Section';
import useFetch from '../hooks/useFetch';

const formatGradDate = (dateStr) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
};

const Education = () => {
  const { data: eduData, loading: eduLoading, error: eduError } = useFetch('/education');
  const { data: certData, loading: certLoading, error: certError } = useFetch('/certifications');
  const educationData = eduData?.data ?? [];
  const certificationsData = certData?.data ?? [];

  return (
  <Section id="education" title="Education" className="bg-slate-50 dark:bg-slate-950">
    {(eduLoading || certLoading) && <p className="text-slate-400 dark:text-slate-500">Loading...</p>}
    {(eduError || certError) && <p className="text-red-500 text-sm">Failed to load education.</p>}
    <div className="space-y-10">
      <div className="grid md:grid-cols-3 gap-6">
        {educationData.map(edu => (
          <div key={edu.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 hover:shadow-lg dark:hover:shadow-slate-900/80 transition-shadow">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-lg font-bold">{edu.university.charAt(0)}</span>
            </div>
            <h3 className="font-bold text-slate-800 dark:text-white mb-1">{edu.university}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{edu.degree}</p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{formatGradDate(edu.graduation_date)}</p>
          </div>
        ))}
      </div>

      <div>
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">Certifications</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {certificationsData.map(cert => (
            <div key={cert.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-5 flex items-center gap-4 hover:shadow-lg dark:hover:shadow-slate-900/80 transition-shadow">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex-shrink-0 flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800 dark:text-white text-sm">{cert.certification}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{cert.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
  );
};

export default Education;
