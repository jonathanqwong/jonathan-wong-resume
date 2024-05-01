import React from 'react';
import SkillsMock from '../mock/skills.json';
import Title from './Title';
import './styles.scss';
import {Table, TableHead, TableCell, TableRow, TableBody} from "@mui/material";

const Skills = (props) => {
    let skillsObjs = props.skills;

    if (!skillsObjs) {
        return <div>Loading...</div>;
    }

    // Fallback method if getSkills not loaded from supabase
    const fallbackForSkillsSupabaseUnsuccessful = () => {
        if (skillsObjs.length === 0) {
            skillsObjs = SkillsMock;
        }
    }

    const preventDefault = (event) => {
        event.preventDefault();
    }

    fallbackForSkillsSupabaseUnsuccessful();

    return (
        <React.Fragment>
            <Title>Skills</Title>
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
                            <TableCell>{skillsObj.rating}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
};

export default Skills;
