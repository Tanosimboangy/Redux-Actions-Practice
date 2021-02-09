import React from 'react';
import TextField from '@material-ui/core/TextField';

function SpecialTextBox({ specialText }) {
  return (
      <div>
        <div>Enter Special Text:</div>
        <TextField onChange={(e)=>{
            if(specialText){
              specialText(e.target.value);
            }
        }} />
      </div>
  );
}
export default SpecialTextBox;