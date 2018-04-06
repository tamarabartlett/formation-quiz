import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { withStyles } from 'material-ui/styles';

const styles = {
  snackbar: {
    background: '#2e64b8',
    fontSize: '20px',
  }
};

function CorrectSnackBar(props) {
  const { classes, open, handleClose } = props;
  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={1500}
      onClose={handleClose}
      SnackbarContentProps={{
        classes: {
          root: classes.snackbar
        }
      }}
      message={<span>Correct!</span>}
    />
  );
}

export default withStyles(styles)(CorrectSnackBar);
