import React, { useState, useEffect } from 'react';
import skillsData from '../mock/skills.json';
import {Grid, List, ListItem, ListItemText, styled, Typography} from "@mui/material";
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';

const Skills = (props) => {
    // const [skillsInfo, setSkillsInfo] = useState(null);
    // const skills = skillsInfo;

    console.log("skills from skills prop", props.skills);
    const skillsObj = props.skills;
    const skills = props.skills?.map((obj) => obj.skill);
    const rating = props.skills?.map((obj) => obj.rating);
    console.log("skills from props", skills);
    console.log("mapped skills: ", skills)
    console.log("mapped rating", rating);


    // useEffect(() => {
    //     setSkillsInfo(skillsData?.skills);
    //     // fetch('/data.json')
    //     //     // .then(response => response.json())
    //     //     .then(data => setContactInfo(contactInfoData))
    //     //     .catch(error => console.error('Error fetching contact info:', error));
    // }, []);
    //
    // if (!skillsInfo) {
    //     return <div>Loading...</div>;
    // }

    const Demo = styled('div')(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <section className="skills">
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
                        Skills
                    </Typography>
                    <Demo>
                        <List dense={dense}>
                            {skillsObj.map((skillObj) => (
                                <ListItem>
                                    <ListItemText
                                        primary={skillObj.skill}
                                    />
                                    <ListItemText
                                        primary={skillObj.rating}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Demo>
                </Grid>
            </Grid>
            <ul>
                {skillsObj.map((sobj) => (
                    <li>{sobj.skill}: {sobj.rating}</li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
