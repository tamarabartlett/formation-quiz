import React from 'react';
import Card, { CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

function FormationPicture(props) {
  const { image, mediaClass, formationLetter, formationLetterClass } = props;
  return (
    <div className="FormationPicture">
      <Typography
        className={formationLetterClass}
        align="center"
        variant="headline"
        component="h2">
        {formationLetter}
      </Typography>
      <CardMedia
        className={mediaClass}
        image={image}
      />
    </div>
  );
}

export default FormationPicture;
