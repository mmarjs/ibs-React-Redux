import React from 'react';
import {
  Card,
  CardBody
} from 'reactstrap';

class Quotes extends React.Component {
  render() {
    return <div>
      <h5 className="mb-4">Quotes.</h5>
      <Card>
        <CardBody>
          <p>This is some text within a card block.</p>
        </CardBody>
      </Card>
    </div>;
  }
}

export default Quotes;
