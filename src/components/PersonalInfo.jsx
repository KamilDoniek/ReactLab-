import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



function PersonInfo ({id, name, birth, eyes}) {
    const [rating,setRating] = useState(0);

    const handleRate = () => {
      if (rating === 10) {
        setRating(1);
      } else if (rating === 0) {
        setRating(10); 
      } else {
        setRating(rating + 1); 
      }
    }
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
                <ListGroup.Item>Id: {id}</ListGroup.Item>
                <ListGroup.Item>Data urodzin: {birth}</ListGroup.Item>
                <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
                <ListGroup.Item>rating {rating}</ListGroup.Item>

      </ListGroup>
        <Button variant="primary" onClick={handleRate}>
          rate
          </Button>
          <Button variant="primary">
          Edit
          </Button>
        <Button 
            variant="danger"
           
            className="ms-1">
          Delete
        </Button>

      </Card.Body>
    </Card>
    );
}

export default PersonInfo;