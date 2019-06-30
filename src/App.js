import React from 'react';
import './css/App.css';
import './css/w3.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from './components/Footer';
import SimpleSlider from './components/SimpleSlider'


function App() {
  return (
    <div className="App">
      <Nav />
      <SimpleSlider />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
