import React, { Component } from 'react';
import './App.css';
import QuizCard from './QuizCard.js'
import FormationAppBar from './FormationAppBar.js'
import StyledSnackBar from './StyledSnackBar.js'
import { withStyles } from 'material-ui/styles';

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
    const randIndex = Math.floor(Math.random() * formations.length);
    const formation = formations[randIndex];
    this.state = {
      open: false,
      letter: formation.letter,
      name: formation.name,
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

    return (
      <div className="App">
        <FormationAppBar />
        <QuizCard
          checkFormation={this.checkFormation}
          handleInputChange={this.handleInputChange}
          letter={letter}
          name={name}
          input={input}/>
        <StyledSnackBar
          open={open}
          handleClose={this.handleClose}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
