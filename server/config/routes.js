import * as movieController from '../controllers/movie.js'
import bodyParser from 'body-parser'
import busboy from 'connect-busboy'
// import { getMovies }  from '../controllers/movie.js'

// console.log(getMovies);
export default function(app) {
  //movies api
  app.route('/api/upload_movies')
    .post(
      movieController.uploadMovies
    )


  app.route('/api/movies')
    .get(
      movieController.getMovies
    )
    .post(
      bodyParser.urlencoded({extended: true}),
      movieController.addMovie
    )
    .put(
    )

  app.route('/api/movies/:id')
    .get(
      movieController.loadMovie
    )
    .put()
    .delete(
      bodyParser.urlencoded({extended: true}),
      movieController.deleteMovie
    )


  //
}
