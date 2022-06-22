import React from "react";
import { Card,ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CardPeople = (prop) => {


  return (
   

    
    <div className="col-4 ">
      <Card style={{ width: '20rem'}} >
        <Card.Body>
          <Card.Title>{prop.name}</Card.Title>
          <ListGroup variant="flush">
            <ListGroup.Item>Color de pelo: {prop.hair_color}</ListGroup.Item>
            <ListGroup.Item>Color de ojo: {prop.eye_color}</ListGroup.Item>
            <ListGroup.Item>Altura: {prop.height}</ListGroup.Item>
            <ListGroup.Item>Genero: {prop.gender}</ListGroup.Item>
            <ListGroup.Item>Cumpleaños: {prop.birth_year}</ListGroup.Item>
           
          </ListGroup>
        </Card.Body>
      </Card>
      <br/>
    </div>

  );
};
export default CardPeople;
