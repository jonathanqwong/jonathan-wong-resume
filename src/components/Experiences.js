import React from 'react';
import {Container, Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";
import useFetch from "../hooks/useFetch";
import Title from './Title';
import ExperienceMock from '../mock/experience.json';
import './styles.scss';

const Experience = () => {
    const { data, loading, error } = useFetch('/experiences');
    let experiencesObjs = data;

    if (!experiencesObjs) return <div>Loading...</div>;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    // Fallback method if getExperience not loaded from supabase
    const fallbackForExperienceResponseUnsuccessful = () => {
        if (experiencesObjs.length === 0) {
            experiencesObjs = ExperienceMock;
        }
    }

    fallbackForExperienceResponseUnsuccessful();

    return (
        <>
            <Title>Experience</Title>
            <Container className="component-container">
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
            </Container>
        </>

    );
};

export default Experience;
