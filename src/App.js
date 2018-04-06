import React, { Component } from 'react';
import './App.css';
import QuizCard from './QuizCard.js'
import FormationAppBar from './FormationAppBar.js'
import { withStyles } from 'material-ui/styles';

import Snackbar from 'material-ui/Snackbar';

const formations = [
  {letter: 'A', name: 'caterpillar'},
  {letter: 'B', name: 'stairstep'},
  {letter: 'C', name: 'hourglass'},
  {letter: 'D', name: 'hopediamond'},
];

const styles = {
  card: {
    minWidth: 275,
    width: '75%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      letter: "Z",
      name: "z",
      input: "",
    }
    this.checkFormation = this.checkFormation.bind(this)
  }

  handleClick = state => () => {
   this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleInputChange = (input) => {
    this.setState({input: input});
  }

  checkFormation = () => {
    let inputText = this.state.input.toLowerCase().replace(" ","")
    if (inputText === this.state.name) {
      this.setState({ open: true });
      const randIndex = Math.floor(Math.random() * formations.length);
      const formation = formations[randIndex];
      this.setState({ letter: formation.letter, name: formation.name, input:"" });
    }
  }

  render() {
    const { open, letter, name, input } = this.state;
    const { classes } = this.props;

    return (
      <div className="App">
        <FormationAppBar />
        <QuizCard
          checkFormation={this.checkFormation}
          handleInputChange={this.handleInputChange}
          letter={letter}
          name={name}
          input={input}/>
        <Snackbar
          className={classes.snackbar}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={1500}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Correct!</span>}
        />
      </div>
    );
  }
}

export default withStyles(styles)(App);
