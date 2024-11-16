import Card from 'react-bootstrap/Card';


const Element = ({name,id}) => {

    return (
    <Card key={id} style={{ width: '18rem' }} className="border mb-3 p-3 ms-3">
      <Card.Title>{name}</Card.Title>
    </Card>    
    );
}

export default Element;