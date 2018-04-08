import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = theme => ({
  textField: {
    width: '100%'
  }
})

function FormationNameInput(props) {
  const { classes, handleChange, input } = props;
  return (
    <TextField
      className={classes.textField}
      id="formationName"
      label="Formation Name"
      margin="normal"
      autoFocus={true}
      value={input}
      onChange={handleChange}
    />
  );
}

export default withStyles(styles)(FormationNameInput);
