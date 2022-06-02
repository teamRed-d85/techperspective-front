import { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class NewSurveyModal extends Component {
  handleConfirm = (e) => {
    e.preventDefault();
    this.props.closeNewSurveyModal();
    this.props.createNewSurvey();

  }
  render() {
    return (
      <>
        <Modal show={this.props.showNewSurveyModal} onHide={this.props.closeNewSurveyModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Survey</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Please confirm all submissions are in for this survey, once marked complete, this survey will no longer be available.
            <Form>
              <Form.Group>
                <Form.Label>Survey Name</Form.Label>
                <Form.Control type="text" placeholder="Enter survey name" />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={this.props.closeNewSurveyModal}>
              Cancel
            </Button>
            <Button variant="success" onSubmit={this.handleConfirm}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default NewSurveyModal;