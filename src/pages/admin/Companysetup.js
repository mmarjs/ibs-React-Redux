import React from 'react';
import {
  Card,
  CardTitle,
  Row,
  Col,
  CardBody
} from 'reactstrap';
import { connect } from 'react-redux';
import "react-table/react-table.css";

class Companysetup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    componentDidMount(){
        
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
    }
    
  render() {
      
    return <div className="setup-body">
        <Card>
            <CardTitle className="mb-0 p-3 border-bottom bg-light">
                <Row>
                    <Col sm="6">
                        <i className="mdi mdi-border-right mr-2"></i>Company Setup
                    </Col>
                </Row>
            </CardTitle>
            <CardBody>
            </CardBody>
        </Card>
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
      
  }
}

export default connect(mapStateToProps, null)(Companysetup);
