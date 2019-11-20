import React from 'react';
import {
  Card,
  CardBody
} from 'reactstrap';

class Quote extends React.Component {
  render() {
    return <div>
      <h5 className="mb-4">Create New Quote.</h5>
      <Card>
        <CardBody>
          <p>This is some text within a card block.</p>
        </CardBody>
      </Card>
    </div>;
  }
}

export default Quote;
