import React, { Component } from 'react';
import './App.css';
import QuizCard from './QuizCard.js'
import FormationAppBar from './FormationAppBar.js'
import Formations from './Formations.js'
import CorrectSnackBar from './CorrectSnackBar.js'
import AnswerSnackBar from './AnswerSnackBar.js'
import { withStyles } from 'material-ui/styles';

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
    const randIndex = Math.floor(Math.random() * Formations.length);
    const formation = Formations[randIndex];
    this.state = {
      openCorrect: false,
      openAnswer: false,
      letter: formation.letter,
      name: formation.name,
      input: "",
    }
    this.checkFormation = this.checkFormation.bind(this)
  }

  handleCorrectClick = state => () => {
   this.setState({ openCorrect: true, ...state });
  };

  handleAnswerClick = state => () => {
   this.setState({ openAnswer: true, ...state });
  };

  handleCorrectClose = () => {
    this.setState({ openCorrect: false });
  };

  handleAnswerClose = () => {
    this.setState({ openAnswer: false });
  };

  handleInputChange = (input) => {
    this.setState({input: input});
  }

  checkFormation = () => {
    let inputText = this.state.input.toLowerCase().replace(" ","")
    if (inputText === this.state.name.toLowerCase().replace(" ","")) {
      this.setState({ openCorrect: true });
      this.resetFormation()
    }
  }

  getAnswer = () => {
    this.setState({ openAnswer: true });
    this.resetFormation()
  }

  resetFormation = () => {
    const randIndex = Math.floor(Math.random() * Formations.length);
    const formation = Formations[randIndex];
    this.setState({ letter: formation.letter, name: formation.name, input:"" });
  }

  render() {
    const { openCorrect, openAnswer, letter, name, input } = this.state;

    return (
      <div className="App">
        <FormationAppBar />
        <QuizCard
          checkFormation={this.checkFormation}
          getAnswer={this.getAnswer}
          handleInputChange={this.handleInputChange}
          letter={letter}
          input={input}/>
        <CorrectSnackBar
          open={openCorrect}
          handleClose={this.handleCorrectClose}/>
        <AnswerSnackBar
          open={openAnswer}
          name={name}
          handleClose={this.handleAnswerClose}/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
