import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PlayerCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const PlayerCard = (props) => {
  // Props Destructuring
  const {name, image, position, age, goal, salary} = props.playerInfo;

  return (
    <div className="col-xl-4 col-md-6 py-3">
      <div>
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
            <h5>Salary:</h5>
            <h5 className="text-primary">${salary}</h5>
          </section>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-center">
          {/* Bootstrap Button Using ReactBootstrap */}
          <Button
            className="d-flex align-items-center"
            onClick={() => props.handleAddPlayer(props.playerInfo)}
          >
            {/* fontAwesome Icon */}
            <FontAwesomeIcon icon={faUserPlus} className="icon-style" />
            <p className="m-0">Add this player</p>
          </Button>
        </Card.Footer>
      </div>
    </div>
  );
};

export default PlayerCard;