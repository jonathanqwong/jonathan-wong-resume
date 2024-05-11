import React from 'react';
import {Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";
import Title from './Title';
import ExperienceMock from '../mock/experience.json';
import './styles.scss';

const Experience = (props) => {
    let experiencesObjs = props?.experiences;

    if (!experiencesObjs) {
        return <div>Loading...</div>;
    }

    // Fallback method if getExperience not loaded from supabase
    const fallbackForExperienceSupabaseUnsuccessful = () => {
        if (experiencesObjs.length === 0) {
            experiencesObjs = ExperienceMock;
        }
    }

    fallbackForExperienceSupabaseUnsuccessful();
    
    return (
        <div>
            <Title>Experience</Title>
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
                        <TableRow key={experienceObj?.id}>
                            <TableCell>{experienceObj.title}</TableCell>
                            <TableCell>{experienceObj?.company}</TableCell>
                            <TableCell>{experienceObj?.description || ''}</TableCell>
                            <TableCell>{experienceObj?.start_date ? experienceObj?.start_date + ' - ' + experienceObj?.end_date : ''}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    );
};

export default Experience;
