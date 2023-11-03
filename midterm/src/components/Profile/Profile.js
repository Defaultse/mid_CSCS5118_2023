import React, { useState } from 'react';
import { Card, Image, Row, Col, Form, Button } from 'react-bootstrap';

function Profile() {
  const [name, setName] = useState('Sub Zero');
  const [occupation, setOccupation] = useState('Software Engineer');
  const [location, setLocation] = useState('Almaty, KZ');
  const [isEditing, setIsEditing] = useState(false);
  const avatar = 'https://pbs.twimg.com/media/DFByKQeWsAAdRZj.jpg';

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOccupationChange = (e) => {
    setOccupation(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Card>
      <Card.Header>
        <div className="d-flex align-items-center">
          <Image src={avatar} roundedCircle style={{ width: '10em', height: '10em' }} />
          <h1 className="ms-3">
            {isEditing ? (
              <Form.Control
                type="text"
                value={name}
                onChange={handleNameChange}
              />
            ) : (
              name
            )}
          </h1>
        </div>
      </Card.Header>
      <Card.Body>
        <Row>
          <Col>Profession:</Col>
          <Col>
            {isEditing ? (
              <Form.Control
                type="text"
                value={occupation}
                onChange={handleOccupationChange}
              />
            ) : (
              occupation
            )}
          </Col>
        </Row>
        <Row>
          <Col>Location:</Col>
          <Col>
            {isEditing ? (
              <Form.Control
                type="text"
                value={location}
                onChange={handleLocationChange}
              />
            ) : (
              location
            )}
          </Col>
        </Row>
        <div className="mt-3">
          {isEditing ? (
            <Button onClick={handleSave} variant="primary">Save</Button>
          ) : (
            <Button onClick={() => setIsEditing(true)} variant="info">Edit</Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Profile;
