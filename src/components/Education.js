import React from 'react';
import {Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";
import Title from './Title';
import EducationMock from '../mock/education.json';
import CertificationsMock from '../mock/certifications.json';

import './styles.scss';

const Education = (props) => {
    let educationObjs = props.education;
    let certificationsObjs = props.certifications;

    if (!educationObjs || !certificationsObjs) {
        return <div>Loading...</div>;
    }

    // Fallback method if getEducation not loaded from supabase
    const fallbackForEducationSupabaseUnsuccessful = () => {
        if (educationObjs.length === 0) {
            educationObjs = EducationMock;
        }
    }

     // Fallback method if getCertifications not loaded from supabase
    const fallbackForCertificationsSupabaseUnsuccessful = () => {
        if (certificationsObjs.length === 0) {
            certificationsObjs = CertificationsMock;
        }
    }
    
    fallbackForEducationSupabaseUnsuccessful();
    fallbackForCertificationsSupabaseUnsuccessful();

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

            <Title>Certifications</Title>
            <Table size="small">
                <TableHead>
                    <TableRow className="table-row-header">
                        <TableCell>Institution</TableCell>
                        <TableCell>Certification</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {certificationsObjs.map((certificationObj) => (
                        <TableRow key={certificationObj.id}>
                            <TableCell>{certificationObj.institution}</TableCell>
                            <TableCell>{certificationObj.certification}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
        
    );
};

export default Education;
