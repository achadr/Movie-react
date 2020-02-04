import React, { useEffect } from 'react'
import MoviesCard from "../components/MovieCard/MovieCard"
import { actions } from "../redux"
import "../styles/movies.css"
import { connect } from 'react-redux'
function Movies (props) {
    const { movies, page, pageSize, getMovies, moviesFiltered, ...rest } = props
    const startIndex = pageSize*(page - 1)
    let endIndex
    let moviesData = moviesFiltered.length === 0 ? movies : moviesFiltered
    if(pageSize ===1 || pageSize >= moviesData.length) {
        endIndex = movies.length
    } else {
        endIndex = startIndex + pageSize
    }
    useEffect(() => {
       getMovies()
      }, [getMovies]);
        return (
            <div className="moviesContainer">   
                { moviesData.slice(startIndex, endIndex).map((movie, index) => (<MoviesCard key={index} {...movie}  {...rest}/>))}   
            </div>)
}
const mapStateToProps = ({ movies, page, pageSize, moviesFiltered }) => ({
    movies,
    page,
    pageSize,
    moviesFiltered,
})
const mapDispatchToProps = (dispatch) => ({
    getMovies: actions.getMovies(dispatch),
    likeMovie: actions.likeMovie(dispatch),
    dislikeMovie: actions.dislikeMovie(dispatch),
    deleteMovie: actions.deleteMovie(dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
