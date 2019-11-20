import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  Table
} from 'reactstrap';

import chrome from '../../../assets/images/browser/internet-logo.png';
import firefox from '../../../assets/images/browser/firefox-logo.png';
import safari from '../../../assets/images/browser/safari-logo.png';
import ie from '../../../assets/images/browser/internet-logo.png';
import opera from '../../../assets/images/browser/opera-logo.png';
import edge from '../../../assets/images/browser/internet-logo.png';

class BrowserStats extends React.Component {
  render() {
    return (
      /*--------------------------------------------------------------------------------*/
      /* Used In Wizard Page                                                            */
      /*--------------------------------------------------------------------------------*/
      <Card>
        <CardBody>
          <CardTitle>Browser Stats</CardTitle>
          <Table responsive>
            <tbody>
              <tr>
                <td style={{ width: '40px' }}><img src={chrome} alt="logo" /></td>
                <td>Google Chrome</td>
                <td align="right"><span className="badge badge-info">23%</span></td>
              </tr>
              <tr>
                <td><img src={firefox} alt="logo" /></td>
                <td>Mozila Firefox</td>
                <td align="right"><span className="badge badge-success">15%</span></td>
              </tr>
              <tr>
                <td><img src={safari} alt="logo" /></td>
                <td>Apple Safari</td>
                <td align="right"><span className="badge badge-primary">07%</span></td>
              </tr>
              <tr>
                <td><img src={ie} alt="logo" /></td>
                <td>Internet Explorer</td>
                <td align="right"><span className="badge badge-warning">09%</span></td>
              </tr>
              <tr>
                <td><img src={opera} alt="logo" /></td>
                <td>Opera mini</td>
                <td align="right"><span className="badge badge-danger">23%</span></td>
              </tr>
              <tr>
                <td><img src={edge} alt="logo" /></td>
                <td>Microsoft edge</td>
                <td align="right"><span className="badge badge-success">09%</span></td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    );
  }
}

export default BrowserStats;
