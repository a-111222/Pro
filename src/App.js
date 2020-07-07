import React from 'react';
import './Main.scss'
import About from './component/About'
import Nav from './component/Nav';
import Services from './component/Services';
import Portofolio from './component/Portofolio';
import Skills from './component/Skills';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <Services/>
      <Portofolio/>
      <Skills/>
      <Footer/>
    </div>
  );
}

export default App;
