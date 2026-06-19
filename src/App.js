import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Experiences from './components/Experiences';
import Skills from './components/Skills';
import Education from './components/Education';
import ContactInfo from './components/ContactInfo';
import ErrorBoundary from './components/ErrorBoundary';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID, FIREBASE_MEASUREMENT_ID
} from './configuration/config';

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
  return (
    <ErrorBoundary fallback={<p>Something went wrong</p>}>
      <NavBar />
      <main>
        <Home name="Jonathan Wong" title="Seasoned Software Developer Engineer in Test. Tech Lover. Lifelong Student." />
        <Experiences />
        <Skills />
        <Education />
        <ContactInfo />
      </main>
      <footer className="py-8 text-center text-sm text-slate-400 dark:text-slate-600 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
        © {new Date().getFullYear()} Jonathan Wong
      </footer>
    </ErrorBoundary>
  );
}

export default App;
