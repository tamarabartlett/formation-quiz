import React from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = {
  root: {
    flexGrow: 1,
    background: '#D11259'
  },
};

function FormationAppBar(props) {
  const { classes } = props;
  return (
    <div className="FormationAppBar">
      <AppBar
        classes={{root: classes.root}}
        position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            8 Way Formation Quiz
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

FormationAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FormationAppBar);
