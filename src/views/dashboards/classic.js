import React from 'react';
import { Row, Col } from 'reactstrap';
import { SalesSummary, EmailCampaign, ActiveVisitors, Stats}
	from '../../components/dashboard/';

class Classic extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col xs={12}>
						<SalesSummary />
					</Col>
				</Row>
				<Row>
					<Col md="8">
						<EmailCampaign />
					</Col>
					<Col md="4">
						<ActiveVisitors />
					</Col>
				</Row>
				<Stats />
			</div>
		);
	}
}

export default Classic;
