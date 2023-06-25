// Write your code here
import MovieSlider from '../MoviesSlider'

import './index.css'

const actionMovie = 'ACTION'
const comedyMovie = 'COMEDY'
const horrorMovie = 'HORROR'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === actionMovie,
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === comedyMovie,
  )

  const horrorMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === horrorMovie,
  )

  return (
    <div className="app-con">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-img"
      />
      <div className="movies-con">
        <h1 className="heading">Action Movies</h1>
        <MovieSlider moviesList={actionMoviesList} />
        <h1 className="heading">Comedy Movies</h1>
        <MovieSlider moviesList={comedyMoviesList} />
        <h1 className="heading">Horror Movies</h1>
        <MovieSlider moviesList={horrorMoviesList} />
      </div>
    </div>
  )
}
export default PrimeVideo
