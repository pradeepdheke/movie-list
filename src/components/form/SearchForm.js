import React, { useState } from 'react';

import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import { CustomCard } from '../card/CustomCard';
import { fetchMovie } from '../../helper/axiosHelper';


export const SearchForm = () => {
const [search, setSearch] = useState("");
const [movie, setMovie] = useState({});

const handleOnChange = e => {

    const {value} = e.target;
    
    setSearch(value);
};

const handleOnSubmit = async e => {
    e.preventDefault();


    const movie = await fetchMovie(search);
    setMovie(movie.data);
};

console.log(movie);

  return (
      <>
    <Form onSubmit={handleOnSubmit}>
  <Row>
      <Col></Col>
    <Col>
      <Form.Control placeholder="Search..." onChange={handleOnChange} required/>
    </Col>
    <Col>
      <Button variant = "warning" type= "submit">Search</Button>
    </Col>
  </Row>
</Form>
<Row>
    <Col className='d-flex justify-content-center'>
    {movie.Response === "True" &&  <CustomCard movie = {movie}/>}
        
    {movie.Response === "False" && (

    <Alert variant="danger">{movie.Error}</Alert>
    )}

        
    </Col>
    </Row>
      </>

  );
};
