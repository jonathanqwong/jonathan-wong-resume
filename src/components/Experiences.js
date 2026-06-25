import React from 'react';
import Section from './Section';
import useFetch from '../hooks/useFetch';

const formatDate = (dateStr) => {
	if (!dateStr) return 'Present';
	const [year, month] = dateStr.split('-');
	return new Date(year, month - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const Experiences = () => {
	const { data, loading, error } = useFetch('/experiences');
	const experienceData = data?.data ?? [];

	return (
		<Section id="experience" title="Experience" className="bg-slate-50 dark:bg-slate-950">
			{loading && <p className="text-slate-400 dark:text-slate-500">Loading...</p>}
			{error && <p className="text-red-500 text-sm">Failed to load experiences.</p>}
			<div className="relative">
				<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700 md:-translate-x-px" />
				<div className="space-y-12">
					{experienceData.map((job, i) => (
						<div key={job.id} className={`relative md:flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
							<div className="hidden md:block absolute left-1/2 top-6 w-3 h-3 rounded-full bg-blue-600 dark:bg-blue-400 ring-4 ring-white dark:ring-slate-950 -translate-x-1.5" />

							<div className={`md:w-1/2 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
								<div className="bg-white dark:bg-slate-800 rounded-xl shadow-md dark:shadow-slate-900/50 p-6 hover:shadow-lg dark:hover:shadow-slate-900/80 transition-shadow">
									<div className="flex items-start justify-between mb-3 gap-4">
										<div>
											<h3 className="text-lg font-bold text-slate-800 dark:text-white">{job.title}</h3>
											<p className="text-blue-600 dark:text-blue-400 font-semibold text-sm">{job.company}</p>
										</div>
										<span className="text-xs text-slate-400 dark:text-slate-500 whitespace-nowrap mt-1">
                    {formatDate(job.start_date)} – {formatDate(job.end_date)}
                  </span>
									</div>
									{(() => {
										// jsonb returning array containing object
										// unwrap the array first (desc[0]) before calling Object.values()
										const src = Array.isArray(job.description) ? job.description[0] : job.description;
										if (!src || typeof src !== 'object') return null;
										return (
										  <ul className="space-y-1.5 mt-3">
										    {Object.values(src).map((bullet, j) => (
										      <li key={j} className="text-sm text-slate-600 dark:text-slate-300 flex gap-2">
										        <span className="text-blue-400 dark:text-blue-500 mt-0.5 flex-shrink-0">›</span>
										        {bullet}
										      </li>
										    ))}
										  </ul>
										);
									})()}
								</div>
							</div>

							<div className="hidden md:block md:w-1/2" />
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

export default Experiences;
