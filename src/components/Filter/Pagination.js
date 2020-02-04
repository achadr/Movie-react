import React from 'react'
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        color:"white"
    }
}))
export default function Pagination(props) {
        const classes= useStyles()
        const { page, totalPages, nextPage, previousPage} =props
        return (
        <div className="pagination" >
            <IconButton aria-label="Dislike" onClick={previousPage} disabled={ page === 1}>
            <NavigateBeforeIcon className={classes.button} />
            <Typography className={classes.button} variant="body2" component="p">
            Précedent
            </Typography>
            </IconButton>
            <Typography className={classes.button} variant="body2" component="p">
            {`${page}/${totalPages}`}
            </Typography>
            <IconButton aria-label="Dislike" onClick={nextPage} disabled={ page === totalPages}>
            <Typography className={classes.button} variant="body2" component="p">
                Suivant
            </Typography>
            <NavigateNextIcon className={classes.button} />
        </IconButton>
        </div>
        )
    }
