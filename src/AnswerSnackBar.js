import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';
import { withStyles } from 'material-ui/styles';

const styles = {
  snackbar: {
    background: '#E76535',
    // border: 'solid #67c258 3px',
    fontSize: '20px',
  }
};

class AnswerSnackBar extends Component {
  shouldComponentUpdate(nextProps){
    if (this.props.name !== nextProps.name) {
      return false
    }
    return true
  }

  render () {
    const { classes, open, handleClose, name } = this.props;
    return (
      <Snackbar
        className={classes.snackbar}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={2000}
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
}

export default withStyles(styles)(AnswerSnackBar);
