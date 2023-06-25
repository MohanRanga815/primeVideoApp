// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const settings = {
    data: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }
  const {moviesList} = props
  return (
    <>
      <Slider {...settings}>
        {moviesList.map(eachItem => (
          <MovieItem key={eachItem.id} movieDetails={eachItem} />
        ))}
      </Slider>
    </>
  )
}

export default MoviesSlider