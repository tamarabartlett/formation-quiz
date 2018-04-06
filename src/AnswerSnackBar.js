import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import { withStyles } from 'material-ui/styles';

const styles = {
  snackbar: {
    background: '#E76535',
    fontSize: '20px',
  }
};

function AnswerSnackBar(props) {
  const { classes, open, handleClose, name } = props;
  return (
    <Snackbar
      className={classes.snackbar}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      onClose={handleClose}
      SnackbarContentProps={{
        classes: {
          root: classes.snackbar
        }
      }}
      message={name}
    />
  );
}

export default withStyles(styles)(AnswerSnackBar);
