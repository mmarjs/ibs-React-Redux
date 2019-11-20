import React from 'react';
import { Row, Col } from 'reactstrap';
import { CryptoCoins, CryptoChart, CryptoOrder, CryptoExchange, CryptoTrade, CryptoTrade2, CryptoMarket }
	from '../../components/dashboard/';


class Cryptocurrency extends React.Component {
	render() {
		return (
			<div>
				<CryptoCoins />
				<CryptoChart />
				<Row>
					<Col sm="12" lg="6">
						<CryptoOrder />
					</Col>
					<Col sm="12" lg="6">
						<CryptoExchange />
					</Col>
				</Row>
				<Row>
					<Col sm={12}>
						<CryptoMarket />
					</Col>
				</Row>
				<Row>
					<Col sm={12} lg={6}>
						<CryptoTrade />
					</Col>
					<Col sm={12} lg={6}>
						<CryptoTrade2 />
					</Col>
				</Row>
			</div>
		);
	}
}

export default Cryptocurrency;
