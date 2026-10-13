import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AssistantLauncher from './components/assistant/AssistantLauncher';
import Home from './pages/Home';

const Resume = lazy(() => import('./pages/Resume'));

// Section links are router links to "/#section" so they also work from other
// routes; this scrolls to the target after each navigation.
function ScrollManager() {
  const location = useLocation();
  const firstRender = useRef(true);

  useEffect(() => {
    const isFirst = firstRender.current;
    firstRender.current = false;

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target && target.scrollIntoView) target.scrollIntoView();
      return;
    }
    if (!isFirst) window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.key, location.hash]);

  return null;
}

// Plays a short entrance when the route changes. The first page load is never
// animated, and section (hash) navigation within a page does not replay it.
function PageTransition({ children }) {
  const { pathname } = useLocation();
  const [page, setPage] = useState({ pathname, animate: false });
  if (page.pathname !== pathname) setPage({ pathname, animate: true });

  return (
    <div key={pathname} className={page.animate ? 'page-enter' : undefined}>
      {children}
    </div>
  );
}

// To deploy in Netlify remove base name and in json keep homepage:"."
function App() {
  return (
    <Router>
      <ScrollManager />
      <div className="App flex min-h-screen flex-col">
        <Navbar />
        <main id="main" className="flex-1">
          {/* The placeholder keeps the footer below the fold while a lazy route loads. */}
          <Suspense fallback={<div className="min-h-screen" />}>
            <PageTransition>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </PageTransition>
          </Suspense>
        </main>
        <Footer />
        <AssistantLauncher />
      </div>
    </Router>
  );
}

export default App;
