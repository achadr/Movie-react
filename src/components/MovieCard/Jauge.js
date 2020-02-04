import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import { useJaugeStyles } from './styles'



export default function LinearDeterminate(props) {
  const { percentLikes } = props
  const classes = useJaugeStyles();

  return (
    <div className={classes.root}>
      <LinearProgress variant="determinate" value={percentLikes} />
    </div>
  );
}