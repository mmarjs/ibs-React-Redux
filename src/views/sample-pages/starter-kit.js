import React from 'react';
import {
  Card,
  Table,
  Col,
  CardTitle,
  CardBody
} from 'reactstrap';
import { connect } from 'react-redux';

class Starterkit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      clientsData: []
    }
  }
  componentDidMount(){
  }
  
  render() {
    const headerTxt = ['User type', 'First name', 'Middle name', 'Last name', 'Name', 'Email', 'Diaplay name', 'Logo', 'Telephone', 'Contract person', 'Phone number', 'Address', 'Street address', 'County', 'Country', 'Pin number']

    const { clientsData } = this.props;
    return <div>
      <Card>
        <CardBody>
          <Col md="12">
            <Card>
              <div className="p-3">
                <CardTitle>Clients Table</CardTitle>
              </div>
              <Table bordered responsive>
                <thead>
                  <tr>
                    {headerTxt.map((header, index) => {
                      return <th scope="col" key={index}>{header}</th>
                    })}
                  </tr>
                </thead>
                <tbody>
                  {clientsData.map((client, index) => {
                    return(
                      <tr key={index}>
                        <td>{client["utype"]}</td>
                        <td>{client["fname"]}</td>
                        <td>{client["mname"]}</td>
                        <td>{client["lname"]}</td>
                        <td>{client["name"]}</td>
                        <td>{client["email"]}</td>
                        <td>{client["dname"]}</td>
                        <td>{client["logo"]["name"]}</td>
                        <td>{client["telephone"]}</td>
                        <td>{client["cperson"]}</td>
                        <td>{client["phonenum"]}</td>
                        <td>{client["address"]}</td>
                        <td>{client["saddress"]}</td>
                        <td>{client["county"]}</td>
                        <td>{client["country"]}</td>
                        <td>{client["pinnum"]}</td>
                      </tr>
                    )
                  })  
                  }
                </tbody>
              </Table>
            </Card>
          </Col>
        </CardBody>
      </Card>
    </div>;
  }
}
const mapStateToProps = (state) => {
  return {
    clientsData:  state.allClients.clients
  }
} 

export default connect(mapStateToProps, null)(Starterkit);
