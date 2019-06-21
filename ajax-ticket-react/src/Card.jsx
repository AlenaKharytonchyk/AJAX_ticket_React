import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  const {item} = props;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={item.poster_path}
          title={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="div">
          <div className="content">
            <h1>{item.title}</h1>
            <ul>
            <li className="vote"><span>votes:</span>{item.vote_average}</li>
            <li className="genres"><span>genres:</span>{item.genres}</li>
            <li className="tagline"><span>tagline:</span>{item.tagline}</li>
            <li className="release"><span>release date:</span>{item.release_date}</li>
            <li className="runtime"><span>runtime:</span>{item.runtime}</li>
            <li className="overview"><span>storyline:</span>{item.overview}</li>
            <li className="budget"><span>budget:</span>$ {item.budget}</li>
            </ul>
          </div> 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}