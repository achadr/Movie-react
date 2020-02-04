import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    color:"#FFF",
  },
  select: {
    color:"white"
  }
}));

export default function ControlledOpenSelect(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { handleChange, pageSize } = props

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
   
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          className={classes.select}
          onOpen={handleOpen}
          value={pageSize}
          onChange={handleChange}
        >
          <MenuItem value={1}>Tout</MenuItem>
          <MenuItem value={4}>4 par page</MenuItem>
          <MenuItem value={8}>8 par page</MenuItem>
          <MenuItem value={12}>12 page</MenuItem>
        </Select>
      </FormControl>
   
  );
}
