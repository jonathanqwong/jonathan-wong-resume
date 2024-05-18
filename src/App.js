import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';     // HashRouter - https://stackoverflow.com/questions/51974369/what-is-the-difference-between-hashrouter-and-browserrouter-in-react

import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID } from './configuration/config';
import NavBar from './components/NavBar';
import Home from './components/Home';
import ContactInfo from './components/ContactInfo';
import Education from './components/Education';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import ErrorBoundary from './components/ErrorBoundary';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
    const title = "Seasoned Software Developer Engineer in Test. Tech Lover. Lifelong Student.";

    // Define components in an object
    const components = {
        About: () => <Home name={name} title={title}/>,
        Contact: () => <ContactInfo/>,
        Education: () => <Education/>,
        Experiences: () => <Experiences/>,
        Skills: () => <Skills/>,
    };

    return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={components.About()} />
                <Route path="/about" element={components.About()} />
                {Object.entries(components).map(([path, Component]) => (
                    <Route key={path} path={`/${path.toLowerCase()}`} element={<Component />} />
                ))}
            </Routes>
        </Router>
    </ErrorBoundary>
    );
}

export default App;

