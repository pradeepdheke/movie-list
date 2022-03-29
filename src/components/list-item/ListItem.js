import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const ListItem = ({movie, fun }) => {
  return (
    <Row style ={{width: "100%"}}>
        <Col md ='3'>
        <img src= {movie?.Poster} width = "90%" alt= ""/>
        
        </Col>
        <Col>
        <h2>{movie?.Title}</h2>
        <h5>Year: {movie?.Year}</h5>
        <h5>Rating: {movie?.imdbRating}</h5>
  
      
          <div className="d-grid gap-2">
          
          <Button variant="danger" size="lg" onClick={() => fun(movie.imdbID)}>Delete</Button>
          </div>
          
         
            
      </Col>
    </Row>
  )
}