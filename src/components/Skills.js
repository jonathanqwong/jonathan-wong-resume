import React from 'react';
import { Container, Table, TableHead, TableCell, TableRow, TableBody, Rating } from "@mui/material";
import useFetch from "../hooks/useFetch";
import Title from './common/Title';
import Loader from './common/Loader';
import SkillsMock from '../mock/skills.json';
import './styles.scss';

const Skills = () => {
    const { data, loading, error } = useFetch('/skills');
    let skillsObjs = data;

    if (!skillsObjs) return <Loader/>;
    if (loading) return <Loader/>;
    if (error) return <div>Error: {error.message}</div>;

    // Fallback method if getSkills not loaded from api
    const fallbackForSkillsResponseUnsuccessful = () => {
        if (skillsObjs.length === 0) {
            skillsObjs = SkillsMock;
        }
    }

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

    fallbackForSkillsResponseUnsuccessful();

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
