import React from 'react';
import { Container, Table, TableHead, TableCell, TableRow, TableBody } from "@mui/material";
import useFetch from "../hooks/useFetch";
import Title from './common/Title';
import Loader from './common/Loader';
import EducationMock from '../mock/education.json';
import CertificationsMock from '../mock/certifications.json';
import './styles.scss';

const Education = () => {
    const { data: certificationsData, loading: certificationsLoading, error: certificationsError } = useFetch('/certifications');
    const { data: educationData, loading: educationLoading, error: educationError } = useFetch('/education');
    // Initialize object and check if it is an array for data or if data is empty
    let certificationsObjs = Array.isArray(certificationsData) ? certificationsData : [];
    let educationObjs = Array.isArray(educationData) ? educationData : [];

    if (!educationObjs || !certificationsObjs) return <Loader/>;
    if (certificationsLoading) return <Loader/>;
    if (certificationsError) return <div>Error: {certificationsError.message}</div>;
    if (educationLoading) return <Loader/>;
    if (educationError) return <div>Error: {educationError.message}</div>;

    // Fallback method if getCertifications not loaded from api
    const fallbackForCertificationsResponseUnsuccessful = () => {
        if (certificationsObjs.length === 0) {
            certificationsObjs = CertificationsMock;
        }
    }

    // Fallback method if getEducation not loaded from api
    const fallbackForEducationResponseUnsuccessful = () => {
        if (educationObjs.length === 0) {
            educationObjs = EducationMock;
        }
    }

    fallbackForCertificationsResponseUnsuccessful();
    fallbackForEducationResponseUnsuccessful();

    return (
        <>
            <Title>Education</Title>
            <Container className="component-container">
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
            </Container>

            <Title>Certifications</Title>
            <Container className="component-container">
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
            </Container>
        </>

    );
};

export default Education;
