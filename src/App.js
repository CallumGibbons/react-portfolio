import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Loading from './Components/Loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
