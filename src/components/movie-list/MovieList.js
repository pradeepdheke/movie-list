import React from 'react'
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap'
import { CustomCard } from '../card/CustomCard'

export const MovieList = ({movieList, handleOnDelete, setCategory}) => {
  return (
    <Row>
        <Col>
        <div className="filter d-flex justify-content-between py-3">
            
        <ButtonGroup aria-label="Basic example" size="lg">
  <Button variant="secondary" onClick={()=>setCategory("")}>ALL</Button>
  <Button variant="success" onClick={()=>setCategory("happy")}>HAPPY</Button>
  <Button variant="warning" onClick={()=>setCategory("lazy")}>LAZY</Button>
</ButtonGroup>
        <ButtonGroup aria-label="Basic example" size="lg">
  <Button variant="danger">GRID</Button>
  <Button variant="primary">LIST</Button>
 
</ButtonGroup>
        </div>
        <div className='d-flex justify-content-between flex-wrap'>
            {movieList.map((movie, i) => (

            <CustomCard key={i} movie = {movie} btnDelete={true} fun = {handleOnDelete}/>
            ))}

        </div>
        </Col>
    </Row>
  )
}
