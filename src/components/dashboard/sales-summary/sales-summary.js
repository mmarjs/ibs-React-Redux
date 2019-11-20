import React from "react";
import {
	Card,
	CardBody,
	CardTitle,
	Col,
	Row,
	Input
} from 'reactstrap';
import * as S from '../';
import { Line } from 'react-chartjs-2';

//Line chart
let lineData = {
	labels: [1, 2, 3, 4, 5, 6, 7, 8],
	datasets: [{
		label: 'Income',
		borderWidth: 1,
		backgroundColor: 'rgba(94,114,228,.1)',
		borderColor: 'rgb(94,114,228)',
		pointBorderColor: 'rgb(94,114,228)',
		pointBackgroundColor: 'rgb(94,114,228)',
		data: [0, 15, 6, 11, 25, 9, 18, 24]
	}, {
		label: 'Outcome',
		borderWidth: 1,
		backgroundColor: 'rgba(79,195,247,.1)',
		borderColor: 'rgb(79,195,247)',
		pointBorderColor: 'rgb(79,195,247)',
		pointBackgroundColor: 'rgb(79,195,247)',
		data: [0, 8, 11, 22, 8, 10, 5, 21]
	}]
};

class SalesSummary extends React.Component {
	render() {
		return (
			<Card>
				<CardBody>
					<div className="d-md-flex align-items-center">
						<div>
							<CardTitle>Earnings Summary</CardTitle>
						</div>
						<div className="ml-auto d-flex no-block align-items-center">
							<div className="dl">
								<Input type="select" className="custom-select">
									<option value="0">Monthly</option>
									<option value="1">Daily</option>
									<option value="2">Weekly</option>
									<option value="3">Yearly</option>
								</Input>
							</div>
						</div>
					</div>
					<Row>
						<Col lg="4">
							<h1 className="mb-0 mt-4">KES 68,900,820</h1>
							<h6 className="font-light text-muted">Current Month Earnings</h6>
							<h3 className="mt-4 mb-0">287</h3>
							<h6 className="font-light text-muted">Current Month Sales</h6>
							<a className="btn btn-info my-3 p-3 px-4" href="/">Last Month Summary</a>
						</Col>
						<Col lg="8">
							<div className="campaign ct-charts">
								<div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 250 }}>
									<Line data={lineData} options={{ maintainAspectRatio: false, legend: { display: false, labels: { fontFamily: "Nunito Sans" } }, scales: { yAxes: [{ stacked: true, gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }], xAxes: [{ gridLines: { display: false }, ticks: { fontFamily: "Nunito Sans" } }] } }} />
								</div>
							</div>
						</Col>
					</Row>
				</CardBody>
				<CardBody className="border-top">
					<Row className="mb-0">
						<Col lg="3" md="6">
							<S.Statistics
								textColor="orange"
								icon="wallet"
								title="Wallet Balance"
								subtitle="$3,567.53"
							/>
						</Col>
						<Col lg="3" md="6">
							<S.Statistics
								textColor="cyan"
								icon="star-circle"
								title="Referral Earnings"
								subtitle="$769.08"
							/>
						</Col>
						<Col lg="3" md="6">
							<S.Statistics
								textColor="info"
								icon="shopping"
								title="Estimate Sales"
								subtitle="5489"
							/>
						</Col>
						<Col lg="3" md="6">
							<S.Statistics
								textColor="primary"
								icon="currency-usd"
								title="Earnings"
								subtitle="$23,568.90"
							/>
						</Col>
					</Row>
				</CardBody>
			</Card>
		);
	}
}

export default SalesSummary;
