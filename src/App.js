import React, {useEffect, useState} from 'react';
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_URL, SUPABASE_KEY } from './configuration/config';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

function App() {
    const name = "John Doe";
    const title = "Frontend Developer";
    console.log("SUPABASE_URL", SUPABASE_URL);
    console.log("SUPABASE_KEY", SUPABASE_KEY);
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getSkills();
    }, []);

    async function getSkills() {
        const { data } = await supabase.from("skills").select();
        setSkills(data);
    }

    // Define components in an object
    const components = {
        null: () => <Header
            name={name} title={title}
        />,
        Contact: () => <ContactInfo/>,
        Education: () => <Education/>,
        Experience: () => <Experience/>,
        Skills: () => <Skills skills={skills}/>,
    };

    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Resume
                        </Typography>
                        <Button component={Link} to="/" color="inherit">Home</Button>
                        <Button component={Link} to="/contact" color="inherit">Contact</Button>
                        <Button component={Link} to="/education" color="inherit">Education</Button>
                        <Button component={Link} to="/experience" color="inherit">Experience</Button>
                        <Button component={Link} to="/skills" color="inherit">Skills</Button>
                    </Toolbar>
                </AppBar>
                <Routes>
                    <Route path="/" element={<Header name={name} title={title} />} />
                    {Object.entries(components).map(([path, Component]) => (
                        <Route key={path} path={`/${path.toLowerCase()}`} element={<Component />} />
                    ))}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
