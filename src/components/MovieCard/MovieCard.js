import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteIcon from '@material-ui/icons/Delete';
import Jauge from './Jauge'
import { useMovieCardStyles } from './styles'



export default function RecipeReviewCard(props) {
  const classes = useMovieCardStyles();
  const {  likes = 0, dislikes = 0, category= '', title='', dislikeMovie, likeMovie, id, deleteMovie, imageUrl ='', releaseDate='' } = props
  return (
    <Card className={classes.root}>
      <CardHeader
      
        action={
          <IconButton aria-label="settings" onClick={() => deleteMovie(id)}>
            <DeleteIcon />
          </IconButton>
        }
        title={<Typography variant="title" component="h3" nowrap >
        {`${title}`}
       </Typography>}
        subheader={releaseDate}
      />
      <CardMedia
        className={classes.media}
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {category}
        </Typography>
        <Jauge percentLikes={Math.floor(100 *likes/(likes + dislikes))} />
      </CardContent>
      <CardActions className={classes.actions}>
        <IconButton aria-label="Like" onClick={() => likeMovie(id)}>
          <ThumbUpIcon />
          <Typography variant="body2" color="textSecondary" component="p" style={{ margin: "5px"}}>
         {`${likes}`}
        </Typography>
        </IconButton>
        <IconButton aria-label="Dislike" onClick={() =>  dislikeMovie(id)}>
          <ThumbDownIcon />
          <Typography variant="body2" color="textSecondary" component="p" style={{ margin: "5px"}} >
          {`${dislikes}`}
        </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
