import React from 'react';
import DoDoApp from './DoDoApp';
// import Navbar from './Navbar';
// import Form from './Form';
// import PageContent from './PageContent';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    // <ThemeProvider>
    //   <LanguageProvider>
    //     <PageContent>
    //       <Navbar />
    //       <Form />
    //     </PageContent>
    //   </LanguageProvider>
    // </ThemeProvider>
    <DoDoApp />
  );
}


// (accumulatedValue, nextItem) => nextAccumulatedValue
// takes two values and "reduces" them down to one value

// In our case, the two values provided to a reducer are:
  // - the current state
  // - an action that (may) update the state

// (state, action) => nextState
