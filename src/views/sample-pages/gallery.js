import React from 'react';
import {
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Modal,
  ModalHeader,
  CardColumns
} from 'reactstrap';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/weatherbg.jpg';
import img8 from '../../assets/images/background/img5.jpg';
import img9 from '../../assets/images/background/img5.png';

class Gallery extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
      modal4: false,
      modal5: false,
      modal6: false,
      modal7: false,
      modal8: false,

      modal11: false,
      modal12: false,
      modal13: false,
      modal14: false,
      modal15: false,
      modal16: false,
      modal17: false,

    };

    this.toggle = this.toggle.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);

    this.toggle11 = this.toggle11.bind(this);
    this.toggle12 = this.toggle12.bind(this);
    this.toggle13 = this.toggle13.bind(this);
    this.toggle14 = this.toggle14.bind(this);
    this.toggle15 = this.toggle15.bind(this);
    this.toggle16 = this.toggle16.bind(this);
    this.toggle17 = this.toggle17.bind(this);

  }

  toggle() {
    this.setState({
      modal1: !this.state.modal1
    });
  }

  toggle2() {
    this.setState({
      modal2: !this.state.modal2
    });
  }

  toggle3() {
    this.setState({
      modal3: !this.state.modal3
    });
  }

  toggle4() {
    this.setState({
      modal4: !this.state.modal4
    });
  }

  toggle5() {
    this.setState({
      modal5: !this.state.modal5
    });
  }

  toggle6() {
    this.setState({
      modal6: !this.state.modal6
    });
  }

  toggle7() {
    this.setState({
      modal7: !this.state.modal7
    });
  }

  toggle8() {
    this.setState({
      modal8: !this.state.modal8
    });
  }

  toggle11() {
    this.setState({
      modal11: !this.state.modal11
    });
  }
  toggle12() {
    this.setState({
      modal12: !this.state.modal12
    });
  }
  toggle13() {
    this.setState({
      modal13: !this.state.modal13
    });
  }
  toggle14() {
    this.setState({
      modal14: !this.state.modal14
    });
  }
  toggle15() {
    this.setState({
      modal15: !this.state.modal15
    });
  }
  toggle16() {
    this.setState({
      modal16: !this.state.modal16
    });
  }
  toggle17() {
    this.setState({
      modal17: !this.state.modal17
    });
  }



  render() {
    return <div>
      <h5 className="mb-4">Gallery</h5>
      <Row>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img1} alt="Card image cap" onClick={this.toggle} />
            <Modal isOpen={this.state.modal1} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>
                <i className="mdi mdi-camera-iris"></i> Image 1
              </ModalHeader>
              <img src={img1} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img2} alt="Card image cap" onClick={this.toggle2} />
            <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className}>
              <ModalHeader toggle={this.toggle2}>
                <i className="mdi mdi-camera-iris"></i> Image 2
              </ModalHeader>
              <img src={img2} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img3} alt="Card image cap" onClick={this.toggle3} />
            <Modal isOpen={this.state.modal3} toggle={this.toggle3} className={this.props.className}>
              <ModalHeader toggle={this.toggle3}>
                <i className="mdi mdi-camera-iris"></i> Image 3
              </ModalHeader>
              <img src={img3} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img4} alt="Card image cap" onClick={this.toggle4} />
            <Modal isOpen={this.state.modal4} toggle={this.toggle4} className={this.props.className}>
              <ModalHeader toggle={this.toggle4}>
                <i className="mdi mdi-camera-iris"></i> Image 4
              </ModalHeader>
              <img src={img4} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img5} alt="Card image cap" onClick={this.toggle5} />
            <Modal isOpen={this.state.modal5} toggle={this.toggle5} className={this.props.className}>
              <ModalHeader toggle={this.toggle5}>
                <i className="mdi mdi-camera-iris"></i> Image 5
              </ModalHeader>
              <img src={img5} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img6} alt="Card image cap" onClick={this.toggle6} />
            <Modal isOpen={this.state.modal6} toggle={this.toggle6} className={this.props.className}>
              <ModalHeader toggle={this.toggle6}>
                <i className="mdi mdi-camera-iris"></i> Image 6
              </ModalHeader>
              <img src={img6} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img4} alt="Card image cap" onClick={this.toggle7} />
            <Modal isOpen={this.state.modal7} toggle={this.toggle7} className={this.props.className}>
              <ModalHeader toggle={this.toggle7}>
                <i className="mdi mdi-camera-iris"></i> Image 7
              </ModalHeader>
              <img src={img4} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <CardImg top width="100%" src={img1} alt="Card image cap" onClick={this.toggle8} />
            <Modal isOpen={this.state.modal8} toggle={this.toggle8} className={this.props.className}>
              <ModalHeader toggle={this.toggle8}>
                <i className="mdi mdi-camera-iris"></i> Image 8
              </ModalHeader>
              <img src={img1} alt="" width="100%" />
            </Modal>
            <CardBody className="text-center">
              <CardTitle>Project title</CardTitle>
              <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <h5 className="mb-4 mt-4">Other Gallery</h5>
      <CardColumns>
        <Card>
          <CardImg top width="100%" src={img7} alt="Card image cap" onClick={this.toggle11} />
          <Modal isOpen={this.state.modal11} toggle={this.toggle11} className={this.props.className}>
            <ModalHeader toggle={this.toggle11}>
              <i className="mdi mdi-camera-iris"></i> Image 7
            </ModalHeader>
            <img src={img7} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={img9} alt="Card image cap" onClick={this.toggle12} />
          <Modal isOpen={this.state.modal12} toggle={this.toggle12} className={this.props.className}>
            <ModalHeader toggle={this.toggle12}>
              <i className="mdi mdi-camera-iris"></i> Image 9
            </ModalHeader>
            <img src={img9} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={img8} alt="Card image cap" onClick={this.toggle13} />
          <Modal isOpen={this.state.modal13} toggle={this.toggle13} className={this.props.className}>
            <ModalHeader toggle={this.toggle13}>
              <i className="mdi mdi-camera-iris"></i> Image 8
            </ModalHeader>
            <img src={img8} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={img3} alt="Card image cap" onClick={this.toggle14} />
          <Modal isOpen={this.state.modal14} toggle={this.toggle14} className={this.props.className}>
            <ModalHeader toggle={this.toggle14}>
              <i className="mdi mdi-camera-iris"></i> Image 3
            </ModalHeader>
            <img src={img3} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={img4} alt="Card image cap" onClick={this.toggle15} />
          <Modal isOpen={this.state.modal15} toggle={this.toggle15} className={this.props.className}>
            <ModalHeader toggle={this.toggle15}>
              <i className="mdi mdi-camera-iris"></i> Image 4
            </ModalHeader>
            <img src={img4} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={img6} alt="Card image cap" onClick={this.toggle16} />
          <Modal isOpen={this.state.modal16} toggle={this.toggle16} className={this.props.className}>
            <ModalHeader toggle={this.toggle16}>
              <i className="mdi mdi-camera-iris"></i> Image 6
            </ModalHeader>
            <img src={img6} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src={img9} alt="Card image cap" onClick={this.toggle17} />
          <Modal isOpen={this.state.modal17} toggle={this.toggle17} className={this.props.className}>
            <ModalHeader toggle={this.toggle17}>
              <i className="mdi mdi-camera-iris"></i> Image 9
            </ModalHeader>
            <img src={img9} alt="" width="100%" />
          </Modal>
          <CardBody className="text-center">
            <CardTitle>Project title</CardTitle>
            <CardSubtitle className="mb-0">subtitle of project</CardSubtitle>
          </CardBody>
        </Card>
      </CardColumns>
    </div>;
  }
}

export default Gallery;
