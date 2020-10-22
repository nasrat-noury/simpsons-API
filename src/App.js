import React from 'react';
import './App.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';


const sampleCharacter = {
  
    quote: "They taste like...burning.",
    character: "Ralph Wiggum",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
    
};







class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      perso: sampleCharacter
    };
    this.getPerso = this.getPerso.bind(this);
  }


  getPerso() {
    
    axios.get("https://simpsons-quotes-api.herokuapp.com/quotes")
      
      .then(response => response.data)
      
      .then(data => {
        this.setState({
          perso: data[0],
        });
    });
  }

  render() {
    return ( 
      
      <div className="App">
        <button type="button" onClick={this.getPerso}>Change Character</button>
        { <QuoteCard perso={this.state.perso} /> }
      
      </div>
     
    );
  }
}

export default App;
