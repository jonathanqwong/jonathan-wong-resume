import React, { useState, useEffect } from 'react';
import ExperienceMock from '../mock/experience.json';
import Title from './Title';
import './styles.scss';
import {Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";

const Experience = (props) => {
    let experiencesObjs = props.experiences;

    if (!experiencesObjs) {
        return <div>Loading...</div>;
    }

    // Fallback method if getExperience not loaded from supabase
    const fallbackForExperienceSupabaseUnsuccessful = () => {
        if (experiencesObjs.length === 0) {
            experiencesObjs = ExperienceMock;
        }
    }

    const preventDefault = (event) => {
        event.preventDefault();
    }
    
    fallbackForExperienceSupabaseUnsuccessful();

    return (
        <React.Fragment>
            <Title>Certifications</Title>
            <Table size="small">
                <TableHead>
                    <TableRow className="table-row-header">
                        <TableCell>Title</TableCell>
                        <TableCell>Company</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Date</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {experiencesObjs.map((experienceObj) => (
                        <TableRow key={experienceObj.id}>
                            <TableCell>{experienceObj.title}</TableCell>
                            <TableCell>{experienceObj.company}</TableCell>
                            <TableCell>{experienceObj.description}</TableCell>
                            <TableCell>{experienceObj.start_date} - {experienceObj.end_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
        
    );
};

export default Experience;
