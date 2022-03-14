import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';

import {Container, withStyles, Switch}  from '@material-ui/core';
import Header  from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import grey from '@material-ui/core/colors/grey';

function App() {

  const [meanings, setMeanings] = useState([]);
  const [words, setWords] = useState('');
  const [category, setCategory] = useState('en');
  const [lightMode, setLightMode] = useState(false);


  const apiDictionary = async() => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${words}`
        );
    
    setMeanings(data.data);
  } catch(error){
    console.log(error);
  }
}
//console.log(meanings);

  useEffect(() => {
    apiDictionary();
  },[words, category]);

  const PurpleSwitch = withStyles({
    switchBase: {
      color: grey[50],
      "&$checked": {
        color: grey[900],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  return (
    <div className="App"
    style={{
      height: '100vh', 
      backgroundColor: lightMode ? "#fff" : '#282c34', 
      color: lightMode ? "black" : "white",
      transition: 'all 0.5s linear',
      }}
      >
    
    <Container 
    maxWidth='md'
    style={{ 
      display: 'flex', 
      flexDirection:'column', 
      height: '100vh', 
      justifyContent: 'space-evenly'
    }}
    >
      <div style={{
        position: "absolute", 
        top: 0,
        right:15,
        paddingTop: 10
        }}>
        <span>{lightMode ? "Light" : "Dark"} Mode</span>
          <PurpleSwitch checked={lightMode} onChange={() => setLightMode(!lightMode)}/>
      </div>

     <Header 
     category={category} 
     setCategory={setCategory}
     words={words}
     setWords={setWords}
     lightMode={lightMode}
     />
     {meanings && 
     ( 
       <
       Definitions 
       words={words} 
       meanings={meanings} 
       category={category}
       lightMode={lightMode}
       />
     )}
   
    </Container>
    </div>
  );
}

export default App;
