import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'


const formations = [
  {letter: 'A', name: 'caterpillar'},
  {letter: 'B', name: 'setairstep'},
  {letter: 'C', name: 'hour glass'},
  {letter: 'D', name: 'hope diamond'},
];

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '80%',
    display: 'block',
    marginTop: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '3px solid #67c258',
    color: '#2e64b8',
  },
  formationLetter: {
    width: '80%',
  },
})


class QuizCard extends Component {
  constructor (props) {
    super(props)
    this.state = { letter: "A", name: "caterpillar", input:"" }
  }

  checkFormation = () => {
    console.log(this.state.input)
    let input = this.state.input.toLowerCase().replace(" ","")
    if (input === this.state.name) {
      console.log("WOot")

      const randIndex = Math.floor(Math.random() * formations.length);
      const formation = formations[randIndex];

      this.setState({ letter: formation.letter, name: formation.name, input:"" });
    }
  }

  handleChange = (event) => {
    this.setState({ input: event.target.value })

    if (event.key === 'Enter') {
      console.log(event.key)
      event.preventDefault();
    }

  }

  render(){
    const { letter } = this.state
    const { classes } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            justify="space-around"
            className={classes.root}
            >
            <Grid item xs={6} sm={3}>
              <Typography
                className={classes.formationLetter}
                align="center"
                variant="headline"
                component="h2">
                {letter}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={6}>
              <form
                className={classes.container}
                noValidate
                autoComplete="off">
                <TextField
                  id="formationName"
                  label="Formation Name"
                  value={this.state.input}
                  margin="normal"
                  onChange={this.handleChange}
                />
              </form>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button size="small" onClick={this.checkFormation}>Change Formation</Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    )
  }
}

QuizCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

const StyledQuizCard = withStyles(styles)(QuizCard);

export default StyledQuizCard
