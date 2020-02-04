const movies = [
  {
    id: '1',
    releaseDate: 'June 5, 2018',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91mVejWhLqL._RI_.jpg'
  }, {
    id: '2',
    releaseDate: 'March 22, 2018',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/65/Midnight_Sun_2017.jpg/220px-Midnight_Sun_2017.jpg'
  }, {
    id: '3',
    releaseDate: 'June 5, 2018',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    imageUrl: 'https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg'
  }, {
    id: '4',
    releaseDate: 'March 9, 2018',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    imageUrl: 'https://fr.web.img4.acsta.net/c_215_290/pictures/18/03/22/16/48/2454348.jpg'
  }, {
    id: '5',
    releaseDate: 'November 14, 2018',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    imageUrl: 'https://fr.web.img6.acsta.net/c_215_290/pictures/18/11/27/14/25/1451897.jpg'
  }, {
    id: '6',
    releaseDate: 'October 26, 1994',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    imageUrl: 'https://p6.storage.canalblog.com/64/63/1349409/116003634.jpg'
  }, {
    id: '7',
    releaseDate: 'October 26, 1994',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    imageUrl: 'https://p6.storage.canalblog.com/64/63/1349409/116003634.jpg'
  }, {
    id: '8',
    releaseDate: 'January 31, 1996',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    imageUrl: 'https://fr.web.img3.acsta.net/c_215_290/medias/nmedia/18/35/91/33/19255605.jpg'
  }, {
    id: '9',
    releaseDate: 'July 21, 2010',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    imageUrl: 'https://media.senscritique.com/media/000004710747/source_big/Inception.jpg'
  }, {
    id: '10',
    releaseDate: 'October 8, 2014',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    imageUrl: 'https://fr.web.img5.acsta.net/pictures/14/09/11/17/05/508784.jpg' },
]

export default new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
