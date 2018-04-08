import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid'
import Switch from 'material-ui/Switch';
import { FormControlLabel } from 'material-ui/Form';
import FormationPicture from './FormationPicture.js'
import FormationNameInput from './FormationNameInput.js'

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
  answerButton: {
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10%',
    backgroundColor: '#FC885D',
    color: 'white'
  },
  correctButton: {
    marginLeft: '10px',
    marginRight: '10px',
    marginTop: '10%',
    backgroundColor: '#4A7AC8',
    color: 'white'
  },
  checked: {
    color: "#67c258",
    '& + $bar': {
      backgroundColor: "#67c258",
    },
  },
  bar: {},
  media: {
    height: 275,
  },
  noMedia: {
    height: 0,
  },
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
    const {
      classes,
      checkFormation,
      getAnswer,
      letter,
      input,
      image,
      picturesChecked,
      handlePictureCheckedSlider
    } = this.props

    let mediaClass=classes.noMedia
    if(picturesChecked){
      mediaClass=classes.media
    }

    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            justify="space-around"
            className={classes.root}>
            <Grid item xs={6} sm={3}>
              <FormControlLabel
                control={
                  <Switch
                    checked={picturesChecked}
                    onChange={handlePictureCheckedSlider}
                    value="checkedF"
                    classes={{
                      checked: classes.checked,
                      bar: classes.bar,
                    }}
                  />
                }
                label="Pictures"
              />
            </Grid>
            <Grid item xs={6} sm={9}>
            </Grid>
          </Grid>
          <form
            noValidate
            autoComplete="off"
            onSubmit={this.handleSubmit}>
            <Grid
              container
              justify="space-around"
              className={classes.root}>
              <Grid item xs={6} sm={3}>
              <FormationPicture
                image={image}
                formationLetter={letter}
                mediaClass={mediaClass}
                formationLetterClass={classes.formationLetter}
              />

              </Grid>
              <Grid item xs={6} sm={6}>
                <FormationNameInput
                  handleChange={this.handleChange}
                  input={input} />
              </Grid>
              <Grid item xs={12} sm={3}>
                <Button
                  className={classes.correctButton}
                  variant="raised"
                  size="small"
                  onClick={checkFormation}>
                  Check
                </Button>
                <Button
                  className={classes.answerButton}
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

export default withStyles(styles)(QuizCard);
