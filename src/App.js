import React from 'react';
import './css/App.css';
import './css/w3.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
