// Code MovieReviews Here
import React from 'react'

const formatReview = (review) => {
  return (
    <div className='review' key={review.headline}>
      <h3>{review.headline}</h3>
      <p>{review.summary_short}</p>
      { review.multimedia ? <img src={review.multimedia.src} alt={review.display_title} /> : ''}
      <br />
      <a href={review.link.url}>{review.link.suggested_link_text}</a>
    </div>
  )
}

const MovieReviews = (props) => {
  return (
    <div className='review-list'>
      <h1>{props.title}</h1>
      { props.reviews.map(review => formatReview(review)) }
    </div>
  )
}

export default MovieReviews