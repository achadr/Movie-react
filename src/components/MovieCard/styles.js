import { makeStyles } from '@material-ui/core/styles';

export const useMovieCardStyles = makeStyles(theme => ({
    root: {
      maxWidth: 345,
      minWidth: 280,
      minHeight: 400,
      marginTop: 50,
      marginRight:20
    },
    media: {
      height: 10,
      paddingTop: '100%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    actions: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
    }
  
    
  }));

export const useJaugeStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));