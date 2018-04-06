import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid'

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
    margin: 'auto',
    marginTop: '10%',
  },
  button: {
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10%',
  },
  textField: {
    width: '100%'
  }
})


class QuizCard extends Component {
  handleChange = (event) => {
    const input = event.target.value
    this.props.handleInputChange(input)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.checkFormation()
  }

  render(){
    const { classes, checkFormation, getAnswer, letter, input } = this.props

    return (
      <Card className={classes.card}>
        <CardContent>
          <form
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}>
            <Grid
              container
              justify="space-around"
              className={classes.root}>
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
                <TextField
                  className={classes.textField}
                  id="formationName"
                  label="Formation Name"
                  margin="normal"
                  autoFocus={true}
                  value={input}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  className={classes.button}
                  variant="raised"
                  size="small"
                  onClick={checkFormation}>
                  Check
                </Button>
                <Button
                  className={classes.button}
                  variant="raised"
                  size="small"
                  onClick={getAnswer}>
                  Get Answer
                </Button>
              </Grid>
            </Grid>
          </form>
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
