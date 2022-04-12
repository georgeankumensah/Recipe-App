import React from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/form';
import AboutPage from './pages/AboutPage';

const API_KEY = '8315a7b3a6msh5bb7c1c05e95070p1d2f48jsn87eafe098e81';

class App extends React.Component {
  getRecipe = (e) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();
    const api_call = "mycookbook-io1.p.rapidapi.com";
    console.log(recipeName);
  }
  render(){

    return (
      <div className="App">
        <Header/>
        <Form getRecipe={this.getRecipe}/>
        <AboutPage/>
      </div>
  );
  }
}

export default App;
