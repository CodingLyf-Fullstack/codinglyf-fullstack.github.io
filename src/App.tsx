import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <About />
        <Projects />
        <Contact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;