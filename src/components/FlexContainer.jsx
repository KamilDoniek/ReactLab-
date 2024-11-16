import Element from "./Element";
import { Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function FlexContainer ({Element,data}) {

    return (

        <div className="container">
          <Row>
      
            {data.map((item) => (
              <Col xs={12} sm={6} md={4} lg={3} key={item.id}>
                <Element {...item}/>
              </Col>
            ))}
          </Row>
        </div>
      );
    };


export default FlexContainer;

