import React from 'react';
import './HeaderStyle.css';
import { TextField, createMuiTheme, ThemeProvider, MenuItem} from '@material-ui/core';

import categories from '../../data/category';

const Header = ({ setCategory, category, words, setWords, lightMode}) => {

  const darkTheme = createMuiTheme({
    palette: {
      primary: {
        main: lightMode ? "#000" : '#fff',
      },
      mode: lightMode? "light" : 'dark',
    },
  });

 const handleChange = (language) => {
     setCategory(language);
     setWords('');
 }

  return (
    <div className="header">
        <span className="title">{words ? words : "Word Hunt"}</span>
        <div className="inputs">
          <ThemeProvider theme={darkTheme}>
          <TextField 
          className="search"
          label="Search a Word" 
          id="standard-basic" 
          value={words}
          onChange={(e) => setWords(e.target.value)}
          />
          </ThemeProvider>
          <TextField
          className="search"
          select
          label="language"
          variant="standard"
          value={category}
          onChange={(e) => handleChange(e.target.value)}
        >
          {categories.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
                </MenuItem>
          ))}
           
        
        </TextField>
        </div>
    </div>
  )
}

export default Header;