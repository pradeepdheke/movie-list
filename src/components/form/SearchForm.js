import React, { useState } from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';



export const SearchForm = ({getMovie}) => {
const [search, setSearch] = useState("");


const handleOnChange = e => {

    const {value} = e.target;
    
    setSearch(value);
};


const handleOnSubmit = async e => {
    e.preventDefault();
    getMovie(search);
    setSearch("");
};
  return (
      <>
    <Form onSubmit={handleOnSubmit}>
  <Row>
      <Col></Col>
    <Col>
      <Form.Control placeholder="Search..." onChange={handleOnChange} value={search} required/>
    </Col>
    <Col>
      <Button variant = "warning" type= "submit">Search</Button>
    </Col>
  </Row>
</Form>

      </>

  );
};
