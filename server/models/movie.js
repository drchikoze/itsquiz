import mongoose, { Schema } from 'mongoose'

const MovieSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    max: 2017,
    min: 1895,
  },
  format: {
    type: String,
    required: true,
    enum: ['VHS', 'DVD', 'Blu-Ray']
  },
  actors: [{
    type: String,
    required: true,
  }]
})

const Movie = mongoose.model('Movie', MovieSchema)
export default Movie
