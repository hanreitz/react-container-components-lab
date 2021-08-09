import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'UHYEC2qix9yFpYD1ODcM7mwkkjlSWiBY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

export class LatestMovieReviewsContainer extends Component {
  state = {
    reviews: []
  }

  getReviews = () => {
    fetch(URL)
    .then(resp => resp.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }
  
  componentDidMount(){
    this.getReviews()
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews} title='Latest NYT Movie Reviews' />
      </div>
    )
  }
}

export default LatestMovieReviewsContainer

