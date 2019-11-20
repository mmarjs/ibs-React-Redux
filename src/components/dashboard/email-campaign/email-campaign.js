import React from "react";

import {
	Row,
	Col,
	Card,
	CardBody,
	CardTitle,
	CardSubtitle,
	Input,
	ListGroup,
	ListGroupItem
} from 'reactstrap';

import Chart from 'react-c3-component';
import 'c3/c3.css';

class EmailCampaign extends React.Component {
	render() {
		return (
			/*--------------------------------------------------------------------------------*/
			/* Used In Dashboard-1 [Classic]                                                  */
			/*--------------------------------------------------------------------------------*/
			<Card className="card-hover">
				<CardBody>
					<div className="d-md-flex align-items-center">
						<div>
							<CardTitle>Product Uptake Ratio</CardTitle>
							<CardSubtitle>Product Uptake Ratio</CardSubtitle>
						</div>
						<div className="ml-auto align-items-center">
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
					<Row className="mt-4">
						<Col lg="6">
							<div>
								<Chart
									style={{ height: '290px', width: '100%' }}
									config={{
										data: {
											columns: [
												['General', 45],
												['Medical', 15],
												['Life', 27],
												['Pensions', 18],
											],

											type: 'donut',
											tooltip: {
												show: true
											}
										},
										donut: {
											label: {
												show: false
											},
											title: "Ratio",
											width: 35,
										},
										legend: {
											hide: true
										},
										color: {
											pattern: ['#40c4ff', '#2961ff', '#ff821c', '#7e74fb']
										}
									}}
								/>
							</div>
						</Col>
						<Col lg="6">
							<h1 className="display-6 mb-0 font-medium">45%</h1>
							<span>Highest Product Uptake</span>
							<ListGroup>
								<ListGroupItem className="border-0 mt-3 p-0"><i className="fas fa-circle mr-1 text-cyan font-12"></i> General Insurance <span className="float-right">45%</span></ListGroupItem>
								<ListGroupItem className="border-0 mt-3 p-0"><i className="fas fa-circle mr-1 text-info font-12"></i> Medical Insurance <span className="float-right">14%</span></ListGroupItem>
								<ListGroupItem className="border-0 mt-3 p-0"><i className="fas fa-circle mr-1 text-orange font-12"></i> Life Insurance <span className="float-right">25%</span></ListGroupItem>
								<ListGroupItem className="border-0 mt-3 p-0"><i className="fas fa-circle mr-1 text-primary font-12"></i> Pensions <span className="float-right">17%</span></ListGroupItem>
							</ListGroup>
						</Col>
					</Row>
				</CardBody>
			</Card>


		);
	}
}

export default EmailCampaign;
