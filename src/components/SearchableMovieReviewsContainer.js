import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'UHYEC2qix9yFpYD1ODcM7mwkkjlSWiBY';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export class SearchableMovieReviewsContainer extends Component {
  state={
    reviews: [],
    searchTerm: ''
  }
  
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  searchReviews = event => {
    event.preventDefault()
    const searchURL = URL + this.state.searchTerm
    fetch(searchURL)
    .then(resp => resp.json())
    .then(reviews => {
      this.setState({
        reviews: reviews.results
      })
    })
  }

  render() {
    return (
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.searchReviews}>
          <input type='text' onChange={this.handleChange} name='searchTerm' />
          <button>Search NYT Movie Reviews</button>
        </form>
        {this.state.reviews.length > 0 ? <MovieReviews reviews={this.state.reviews} title='Search Results'/> : '' }
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
