import React from 'react';
import PropTypes from 'prop-types';
import {Form, Button, Modal} from 'react-bootstrap';

export default class extends React.Component {
  static propTypes = {
    formData: PropTypes.object.isRequired,
    onSend: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  confirm = () => {
    this.hideModal();
    this.props.onSend();
  }

  render() {
    let formFields = [];

    for(let name in this.props.formData) {
      let field = this.props.formData[name];
      formFields.push(
        <Form.Group key={name} controlId={'order-form-' + name}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control type="text" value={field.value} onChange={(e) => this.props.onChange(name, e.target.value)}></Form.Control>
        </Form.Group>
      );
    }
    return (
      <div>
        <h2>Order</h2>
        <hr/>
        <Form>
          {formFields}
        </Form>
        <Button variant="warning" onClick={this.props.onBack}>
          Back to cart
        </Button>
        <Button className='ml-1' variant="primary" onClick={this.showModal}>
          Apply order
        </Button>
        <>
          <Modal show={this.state.show} backdrop="static">
            <Modal.Header>
              <Modal.Title>Check information</Modal.Title>
            </Modal.Header>
            <Modal.Body>Content</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.hideModal}>
                Return
              </Button>
              <Button variant="primary" onClick={this.confirm}>
                Apply
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      </div>
    );
  }
};