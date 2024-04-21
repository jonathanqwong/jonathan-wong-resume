import React, { useState, useEffect } from 'react';
import educationData from '../mock/education.json';

const Education = () => {
    const [educationInfo, setEducationInfo] = useState(null);
    const degree = educationInfo?.degree;
    const school = educationInfo?.school;
    const date = educationInfo?.date;

    useEffect(() => {
        setEducationInfo(educationData?.education);
        // fetch('/data.json')
        //     .then(response => response.json())
        //     .then(data => setContactInfo(educationData))
        //     .catch(error => console.error('Error fetching contact info:', error));
    }, []);

    if (!educationInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section className="education">
            <h2>Education</h2>
            <div>
                <h3>{degree}</h3>
                <p>{school}, {date}</p>
            </div>
        </section>
    );
};

export default Education;
