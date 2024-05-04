import React from 'react';
import SkillsMock from '../mock/skills.json';
import Title from './Title';
import './styles.scss';
import {Table, TableHead, TableCell, TableRow, TableBody, Rating} from "@mui/material";

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
                            <TableCell>
                                <Rating name="read-only" value={mapProficiencyToRatingValue(skillsObj)} readOnly />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </React.Fragment>
    );
};

export default Skills;
