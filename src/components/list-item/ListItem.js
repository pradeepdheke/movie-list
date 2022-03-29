import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'

export const ListItem = ({movie, fun, btnDelete}) => {
  return (
    <Row style ={{width: "100%"}}>
        <Col md ='3'>
        <img src= {movie?.Poster} width = "100%" alt= ""/>
        
        </Col>
        <Col>
        <h3>{movie?.Title}</h3>
        <h3>{movie?.Year}</h3>
        <h3>{movie?.imdbRating}</h3>
  
      
          <div className="d-grid gap-2">
          
          <Button variant="danger" size="lg" onClick={() => fun(movie.imdbID)}>Delete</Button>
          </div>
          
         
            
      </Col>
    </Row>
  )
}