import React from 'react';
import { Container, Table, TableHead, TableCell, TableRow, TableBody, Rating } from "@mui/material";
import useFetch from "../hooks/useFetch";
import Title from './common/Title';
import Loader from './common/Loader';
import SkillsMock from '../mock/skills.json';
import './styles.scss';

const Skills = () => {
    const { data, loading, error } = useFetch('/skills');
    // Initialize object and check if it is an array for data or if data is empty
	const skillsObjs = data && Array.isArray(data.data) && data.data.length > 0 ? data.data : SkillsMock;

    if (!skillsObjs) return <Loader/>;
    if (loading) return <Loader/>;
    if (error) return <div>Error: {error.message}</div>;

    const mapProficiencyToRatingValue = (skillsObj) => {
        switch (skillsObj.rating) {
            case 'Knowledge':
                return 1;
            case 'Working Knowledge':
                return 2;
            case 'Proficient':
                return 3;
            case 'Very Proficient':
                return 4;
            case 'Expert':
                return 5;
            default:
                return 0;
        }
    };

    return (
        <>
            <Title>Skills</Title>
            <Container className="component-container">
                <Table size="small">
                    <TableHead>
                        <TableRow className="table-row-header">
                            <TableCell>Skill</TableCell>
                            <TableCell>Proficiency</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {skillsObjs.map((skillsObj) => (
                            <TableRow key={skillsObj.id}>
                                <TableCell>{skillsObj.skill}</TableCell>
                                <TableCell>
                                    <Rating name="read-only" value={mapProficiencyToRatingValue(skillsObj)} readOnly />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Container>
        </>
    );
};

export default Skills;
