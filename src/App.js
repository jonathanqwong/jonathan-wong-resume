import React, {useEffect, useState} from 'react';
import { createClient } from "@supabase/supabase-js";
// import { SUPABASE_URL, SUPABASE_KEY } from './configuration/config';
import { SUPABASE_URL, SUPABASE_KEY, FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from './configuration/config';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Header from './components/Header';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Import Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
    const name = "Jonathan Wong";
    const title = "Software Developer Engimeer in Test. Tech Lover. Lifelong Student.";

    const [skills, setSkills] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        getSkills();
        getEducation();
    }, []);
      
    async function getSkills() {
        const { data } = await supabase.from("skills").select();
        setSkills(data);
    }

    async function getEducation() {
        const { data } = await supabase.from("education").select();
        setEducation(data);
    }

    // Define components in an object
    const components = {
        null: () => <Header name={name} title={title}/>,
        Contact: () => <ContactInfo/>,
        Education: () => <Education education={education}/>,
        Experience: () => <Experience/>,
        Skills: () => <Skills skills={skills}/>,
    };

    return (
        <Router>
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Jonathan Wong's Resume
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
