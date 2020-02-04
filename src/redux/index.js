import moviesApi from '../data/movies'

const likeMovie = (dispatch) => (movieId) =>  {
    dispatch({
        type: 'LIKE_MOVIE',
        movieId,
    })
}

const dislikeMovie = (dispatch) => (movieId, movies) =>  {
    dispatch({
        type: 'DISLIKE_MOVIE',
        movieId,
    })
}

const deleteMovie = (dispatch) => (movieId) =>  {
    dispatch({
        type: 'DELETE_MOVIE',
        movieId
    })
}

const getMovies =  (dispatch) =>  () =>  {
    return moviesApi.then((result) => {
        dispatch({
            type: 'GET_MOVIES',
            movies: result,
        })
    })
   
}

const selectCategory = (dispatch) => (categories) =>  {
        getMovies(dispatch)().then(() => {
            dispatch({
                type: 'CHANGE_CATEGORY',
                categories:  categories
            })
        })
}

const nextPage = (dispatch) => () =>  {
    dispatch({
        type: 'NEXT_PAGE',
    })
}

const previousPage = (dispatch) => () =>  {
    dispatch({
        type: 'PREVIOUS_PAGE',
    })
}

const changePageSize= (dispatch) => (event) =>  {
    dispatch({
        type: 'PAGE_SIZE',
        pageSize: event.target.value
    })
}

export const actions = {
    dislikeMovie,
    likeMovie,
    deleteMovie,
    getMovies,
    selectCategory,
    previousPage,
    nextPage,
    changePageSize,

}

const ACTION_HANDLER= {
    'GET_MOVIES':(state, action) =>({
        ...state,
        movies: action.movies.filter(m => !state.deletedMovies.includes(m.id)),
        categories: [...new Set(action.movies.filter(m => !state.deletedMovies.includes(m.id)).map(m => m.category))],
    }),
    'DISLIKE_MOVIE': (state, action) =>({
        ...state,
        movies: state.movies.map(m => m.id === action.movieId ? { ...m, dislikes: m.dislikes + 1, appreciationActionDone: true, } : m),
    }),  
    'LIKE_MOVIE': (state, action) => ({
        ...state,
        movies: state.movies.map(m => m.id === action.movieId ? { ...m, likes: m.likes + 1, appreciationActionDone: true} : m),
    }),
    'DELETE_MOVIE': (state, action) => ({
        ...state,
        deletedMovies: [ ...state.deletedMovies, action.movieId],
        movies: state.movies.filter(m => m.id !== action.movieId),
        categoriesSelected: [ ...new Set(state.movies.filter(m => m.id !== action.movieId).map(m => m.category))].filter(c => state.categoriesSelected.includes(c)),
    }),
   'NEXT_PAGE': (state, action) => ({
            ...state,
            page: state.page + 1,
        }),
    'PREVIOUS_PAGE': (state, action) => ({
        ...state,
        page: state.page - 1,
    }),
    'PAGE_SIZE':(state, action) => ({
        ...state,
        pageSize: action.pageSize,
        }),
    'CHANGE_CATEGORY': (state, action) => ({
        ...state,
        categoriesSelected: action.categories,
        movies: action.categories.length === 0 ? state.movies : state.movies.filter(m => action.categories.includes(m.category))
    })
}

const defaultState = {
    movies: [],
    page: 1,
    pageSize: 1,
    categoriesSelected: [],
    categories: [],
    deletedMovies: []
}

export default function actionReducer(state = defaultState, action) {
  return ACTION_HANDLER[action.type] ? ACTION_HANDLER[action.type](state, action)  : state
}