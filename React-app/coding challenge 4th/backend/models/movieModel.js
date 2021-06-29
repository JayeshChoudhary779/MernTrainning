import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema(
  {
    Title: { type: String, required: true  },
    Poster: { type: String, required: true},
    Type: { type: String, required: true },
    Year: { type: String, required: true },
    imdbID: { type: String, required: true,unique:true },
    Plot: { type: String },
  
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model('Moviedata', movieSchema);

export default Movie;