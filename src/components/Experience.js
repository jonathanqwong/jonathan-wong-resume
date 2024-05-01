import React, { useState, useEffect } from 'react';
import experienceData from '../mock/experience.json';
import Title from './Title';

const Experience = () => {
    const [experienceInfo, setExperienceInfo] = useState(null);
    const title = experienceInfo?.title;
    const company = experienceInfo?.company;
    const date = experienceInfo?.date;
    const responsibilities = experienceInfo?.responsibilities;

    useEffect(() => {
        setExperienceInfo(experienceData?.experience);
        // fetch('/data.json')
        //     // .then(response => response.json())
        //     .then(data => setContactInfo(contactInfoData))
        //     .catch(error => console.error('Error fetching contact info:', error));
    }, []);

    if (!experienceInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section className="experience">
            <Title>Experience</Title>
            <div>
                <h3>{title}</h3>
                <p>{company}, {date}</p>
                <ul>
                    {responsibilities.map((res, index) => (
                        <li key={index}>{res}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
