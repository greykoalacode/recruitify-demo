import React from 'react';
import './App.scss';
import Footer from './Components/Footer';
import Form from './Components/Form';
import NavBar from './Components/NavBar';
import TabBar from './Components/TabBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <TabBar />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
