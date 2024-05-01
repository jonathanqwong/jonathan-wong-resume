import React, { useState, useEffect } from 'react';
import EducationMock from '../mock/education.json';
import Title from './Title';
import './styles.scss';

import {Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";

const Education = (props) => {
    let educationObjs = props.education;

    if (!educationObjs) {
        return <div>Loading...</div>;
    }

    // Fallback method if getEducation not loaded from supabase
    const fallbackForEducationSupabaseUnsuccessful = () => {
        if (educationObjs.length === 0) {
            educationObjs = EducationMock;
        }
    }

    const preventDefault = (event) => {
        event.preventDefault();
    }
    
    fallbackForEducationSupabaseUnsuccessful();

    return (
        <React.Fragment>
            
            <Title>Education</Title>
            <Table size="small">
                <TableHead>
                    <TableRow className="table-row-header">
                        <TableCell>University</TableCell>
                        <TableCell>Degree</TableCell>
                        <TableCell>Graduation Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {educationObjs.map((educationObj) => (
                        <TableRow key={educationObj.id}>
                            <TableCell>{educationObj.university}</TableCell>
                            <TableCell>{educationObj.degree}</TableCell>
                            <TableCell>{educationObj.graduation_date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
};

export default Education;
