import Movie from '../models/movie.js'

export function getMovies(req, res) {
  Movie.find({}).sort({name:1}).exec(function(err, movies) {
    if(err) {
      res.status(400).send(err)
    } else {
      res.json(movies)
    }
  })
}

export function addMovie(req, res) {
  let movie = new Movie(req.body)
  movie.save((err) => {
    if( err ) {
      let errorsArr = [];
      for (let prop in err.errors) {
        if( err.errors.hasOwnProperty(prop) ) {
          errorsArr.push(err.errors[prop].message)
        }
      }
      return res.status(400).json(errorsArr)
    } else {
      return res.json(movie);
    }
  })
}

export function deleteMovie(req, res) {
  Movie.findOneAndRemove({'_id': req.params.id}, function(err, movie) {
    if(err) {
      res.status(400).send(err)
    } else {
      res.json(movie)
    }
  })
}

export function loadMovie(req, res) {
  Movie.findOne({'_id': req.params.id}, function(err, movie) {
    if(err) {
      res.status(400).send(err)
    } else {
      res.json(movie)
    }
  })
}

export function uploadMovies(req, res) {
  if ( req.body.data == undefined ) {
    return res.status(400).json({err: 'U should choose text file'})
  }
  try {
    var buf = new Buffer(req.body.data.replace(/^data:text\/\w+;base64,/, ""),'base64')
    var textData = buf.toString('utf-8')
    var partials = textData.trim().split('\n\n')
    var resultArray = []
    for( var i = 0; i < partials.length; i++ ) {
      var nameMatch = partials[i].match(/Title:(.*)/),
          yearMatch = partials[i].match(/Release Year:(.*)/),
          formatMatch = partials[i].match(/Format:(.*)/),
          actorsMatch = partials[i].match(/Stars:(.*)/)
      resultArray.push({
        name: nameMatch[1].trim(),
        year: yearMatch[1].trim(),
        format: formatMatch[1].trim(),
        actors: actorsMatch[1].trim().split(',').map(function(part){
          return part.trim();
        })
      })
    }
  } catch(err) {
    return res.status(400).json({err: 'Wrong file type or content'})
  }


  Movie.insertMany(resultArray, function(err, movies) {
    if(err) {
      res.status(400).send(err)
    } else {
      res.json(movies)
    }
  })
}
