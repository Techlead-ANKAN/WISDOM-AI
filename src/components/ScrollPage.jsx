import React from "react";

import Home from "../pages/Home/Home"
import About from "../pages/About/About"
import Contact from "../pages/Contact/Contact"
import Solutions from "../pages/Solutions/Solutions";

const ScrollPage = () => {
  return (
    <div>
      <section id="home" style={{ height: '100vh' }}>
        <Home />
      </section>
      <section id="about" style={{ height: '100vh' }}>
        <About />
      </section>
      <section id="solutions" style={{ height: '100vh' }}>
        <Solutions />
      </section>
      <section id="contact" style={{ height: '100vh' }}>
        <Contact />
      </section>
    </div>
  );
};

export default ScrollPage;
