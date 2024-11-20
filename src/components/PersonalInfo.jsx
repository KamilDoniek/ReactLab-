//import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import RatingBar from './RatingBar';
import { useContext } from 'react';
import AppContext from '../data/AppContext';
import { redirect } from 'react-router-dom';
// function PersonInfo ({id, name, birth, eyes,rating,dispatch}) {
    // const [rating,setRating] = useState(0);

    // const handleRate = () => {
    //   if (rating === 10) {
    //     setRating(1);
    //   } else if (rating === 0) {
    //     setRating(10); 
    //   } else {
    //     setRating(rating + 1); 
    //   }
    // }
    // eslint-disable-next-line react/prop-types
    function PersonInfo({ id, name, birth, eyes, rating }) {
      const context = useContext(AppContext);
      const dispatch = context.dispatch;
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <ListGroup variant="flush">
                <ListGroup.Item>Id: {id}</ListGroup.Item>
                <ListGroup.Item>Data urodzin: {birth}</ListGroup.Item>
                <ListGroup.Item>Kolor oczu: {eyes}</ListGroup.Item>
                <ListGroup.Item><RatingBar  rating={rating}></RatingBar></ListGroup.Item>

      </ListGroup>
      <Button variant="primary"  className="me-2" 
        onClick={e => redirect("/lab4/edit")}>Edit</Button>
      
        <Button 
            variant="danger"
           
            className="ms-1"onClick={(e)=>dispatch({
              type:"delete",
              id:id
            })} >
          Delete
        </Button>

      </Card.Body>
    </Card>
    );
}

export default PersonInfo;