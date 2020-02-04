import React from 'react';
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CategorySelect from '../components/Filter/CategorySelect';
import Pagination from "../components/Filter/Pagination"
import ElementPerPage from "../components/Filter/ElementPerPage"
import { actions } from '../redux';


const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  }
}));

function Filter(props) {
  const classes = useStyles();
  const { categoriesSelected , pageSize, page, moviesCount, categories, handleChangeCategories, handleChangePageSize, nextPage, previousPage } = props
  const totalPages = pageSize ===1 ? 1 : Math.ceil(moviesCount/pageSize)
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
        <CategorySelect categoriesSelected={categoriesSelected} categories={categories} handleChangeCategories={handleChangeCategories}/>
        <ElementPerPage pageSize={pageSize} handleChange={handleChangePageSize}/>
        <Pagination page={page} totalPages={totalPages} nextPage={nextPage} previousPage={previousPage} />
           
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = ({ categoriesSelected, page, pageSize, movies, categories}) => ({
  categoriesSelected,
  page,
  pageSize,
  moviesCount: movies.length,
  categories,
})

const mapDisptachToProps = (dispatch) => ({
  handleChangeCategories: actions.selectCategory(dispatch),
  handleChangePageSize: actions.changePageSize(dispatch),
  nextPage: actions.nextPage(dispatch),
  previousPage: actions.previousPage(dispatch),
})

export default connect(mapStateToProps, mapDisptachToProps)(Filter)