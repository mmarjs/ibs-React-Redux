import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardBody, Form, Input, Row, Col, Button } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Message from './message';

import user1 from '../../../assets/images/users/1.jpg';
import user2 from '../../../assets/images/users/2.jpg';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chats: [{
				username: "Kevin Hsu",
				content: "Hello World!",
				img: user1,
				id: 1
			}, {
				username: "Alice Chen",
				content: "Love it! :heart:",
				img: user1,
				id: 2
			}, {
				username: "Kevin Hsu",
				content: "Check out my Github at https://github.com/WigoHunter",
				img: user1,
				id: 3
			}, {
				username: "KevHs",
				content: "Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.",
				img: user2,
				id: 4
			}, {
				username: "Kevin Hsu",
				content: "So",
				img: user1,
				id: 5
			}, {
				username: "Kevin Hsu",
				content: "Chilltime is going to be an app for you to view videos with friends",
				img: user1,
				id: 6
			}, {
				username: "Kevin Hsu",
				content: "You can sign-up now to try out our private beta!",
				img: user1,
				id: 7
			}, {
				username: "Alice Chen",
				content: "Definitely! Sounds great!",
				img: user1,
				id: 8
			}]
		};
		this.submitMessage = this.submitMessage.bind(this);
	}

	componentDidMount() {
		this.scrollToBot();
	}

	componentDidUpdate() {
		this.scrollToBot();
	}

	scrollToBot() {
		ReactDOM.findDOMNode(this.chats).scrollTop = ReactDOM.findDOMNode(this.chats).scrollHeight;
	}

	submitMessage(e) {
		e.preventDefault();
		this.setState({
			chats: this.state.chats.concat([{
				username: "Kevin Hsu",
				content: <span>{ReactDOM.findDOMNode(this.msg).value}</span>,
				img: user2
			}])
		}, () => {
			ReactDOM.findDOMNode(this.msg).value = "";
		});
	}

	render() {
		const username = "Kevin Hsu";
		const { chats } = this.state;
		return (
			/*--------------------------------------------------------------------------------*/
			/* Used In Dashboard-1 [Classic] && Dashboard-4 [General]                         */
			/*--------------------------------------------------------------------------------*/
			<Card>
				<CardBody>
					<h5 className="mb-4">Recent Chats</h5>
					<div className="chat-box" style={{ height: '475px' }}>
						<PerfectScrollbar>
							<ul className="chat-list p-4" ref={(e) => { this.chats = e; }}>
								{
									chats.map((chat, index) =>
										<Message key={index} chat={chat} user={username} />
									)
								}
							</ul>
						</PerfectScrollbar>
					</div>
					<div className="border-top pt-4">
						<Form onSubmit={(e) => this.submitMessage(e)}>
							<Row>
								<Col xs="9">
									<div className="input-field mt-0 mb-0">
										<Input placeholder="Type and enter" ref={(f) => { this.msg = f; }} className="form-control border-0" type="text" />
									</div>
								</Col>
								<Col xs="3">
									<Button className="btn btn-circle btn-lg btn-cyan float-right text-white" type="submit" value="submit"><i className="fas fa-paper-plane"></i></Button>
								</Col>
							</Row>
						</Form>
					</div>
				</CardBody>
			</Card>
		);
	}
}

export default Chat;