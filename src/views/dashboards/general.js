import React from 'react';
import { Card, CardBody, CardTitle, Row, Col } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Stats, RecentComment, Chat, OrderStatus, Visits, SalesRatio, CampaignOverview }
	from '../../components/dashboard/';

import img1 from '../../assets/images/users/1.jpg';
import img4 from '../../assets/images/users/4.jpg';
import img5 from '../../assets/images/users/5.jpg';

class General extends React.Component {
	render() {
		return (
			<div>
				<Row>
					<Col sm={12} lg={6}>
						<CampaignOverview />
					</Col>
					<Col sm={12} lg={6}>
						<Row>
							<Col sm={12} md={6}>
								<Visits />
							</Col>
							<Col sm={12} md={6}>
								<SalesRatio />
							</Col>
							<Col sm={12}>
								<OrderStatus />
							</Col>
						</Row>
					</Col>
				</Row>
				<Stats />
				<Row>
					<Col lg={6}>
						<Card>
							<CardBody>
								<CardTitle>Recent Comments</CardTitle>
							</CardBody>
							<div className="comment-widgets scrollable" style={{ height: '560px' }}>
								<PerfectScrollbar>
									<RecentComment
										image={img1}
										badge="Pending"
										badgeColor="primary"
										name="James Anderson"
										comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
										date="April 14, 2016"
									/>
									<RecentComment
										image={img4}
										badge="Approved"
										badgeColor="success"
										name="Michael Jorden"
										comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
										date="April 14, 2016"
									/>
									<RecentComment
										image={img5}
										badge="Rejected"
										badgeColor="danger"
										name="Johnathan Doeting"
										comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
										date="April 14, 2016"
									/>
									<RecentComment
										image={img1}
										badge="Pending"
										badgeColor="primary"
										name="James Anderson"
										comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
										date="April 14, 2016"
									/>
									<RecentComment
										image={img4}
										badge="Approved"
										badgeColor="success"
										name="Michael Jorden"
										comment="Lorem Ipsum is simply dummy text of the printing and type setting industry."
										date="April 14, 2016"
									/>
								</PerfectScrollbar>
							</div>
						</Card>
					</Col>
					<Col lg={6}>
						<Chat />
					</Col>
				</Row>
			</div>
		);
	}
}

export default General;
