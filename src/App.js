import React, { Component } from 'react';
import './App.css';
import QuizCard from './QuizCard.js'
import FormationAppBar from './FormationAppBar.js'
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
  render() {
    return (
      <div className="App">
        <FormationAppBar />
        <QuizCard/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
