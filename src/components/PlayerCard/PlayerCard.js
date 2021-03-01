import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PlayerCard = (props) => {
  const {name, image, position, age, goal, salary} = props.playerInfo;
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
          <section className="d-flex justify-content-between">
            <b>Position:</b>
            <span>{position}</span>
          </section>
          <section className="d-flex justify-content-between">
            <b>Age:</b>
            <span>{age}</span>
          </section>
          <section className="d-flex justify-content-between">
            <b>Goals:</b>
            <span>{goal}</span>
          </section>
          <section className="d-flex justify-content-between">
            <h3>Salary:</h3>
            <span className="display-4 text-primary">${salary}</span>
          </section>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          <Button>Add this player</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default PlayerCard;