import React from 'react';
import {Container, Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";
import useFetch from "../hooks/useFetch";
import Title from './common/Title';
import Loader from './common/Loader';
import ExperienceMock from '../mock/experience.json';
import './styles.scss';

const Experience = () => {
    const { data, loading, error } = useFetch('/experiences');
    // Initialize object and check if it is an array for data or if data is empty
    let experiencesObjs = data && Array.isArray(data.data) && data.data.length > 0 ? data.data : ExperienceMock;

    if (!experiencesObjs) return <Loader/>;
    if (loading) return <Loader/>;
    if (error) return <div>Error: {error.message}</div>;

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
