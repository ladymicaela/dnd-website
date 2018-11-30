import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const ShowIt = (input) => {}

class App extends Component {
  render() {
    //const numbers = [1,2,3,4,5,6,7,8]
    const ability = {
      name: "Strength",
      value: 14,
      proficiencies: [
        "Athletics",
        "Boobs"
      ],
    }
    return (
      <div>
        {/*
          numbers.map((value, index) => {
            return <p>{value}</p>
          })
        */}
        {ability.name}
        <p>{ability.value}</p>
        {ability.proficiencies.map((x) => {
          return <p>{x}</p>
        })}
      </div>
    );
  }
}

export default App;
