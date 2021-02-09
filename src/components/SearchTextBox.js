import React from 'react';
import TextField from '@material-ui/core/TextField';
import store from '../store';
import {setSpecialText} from '../actions/index';

function SearchTextBox() {
  // const specialTexts = () => store.dispatch(setSpecialText())
  return (
      <div>
        <div>Search Users on First Name:</div>
        <TextField 
          type="string"
          label="name"
          onChange={(e)=> specialTexts(e.target.value)}
        />
      </div>
  );
}

export default SearchTextBox;