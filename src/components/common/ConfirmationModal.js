import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';


export default class ConfirmationModal extends Component {
    render() {
        return (
            <div>
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Do you want to delete?</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        You cannot undo this action.
                    </Modal.Body>

                    <Modal.Footer>
                        <Button
                            onClick={this.props.onCancel.bind(this)}>
                            Cancel
                        </Button>
                        <Button
                            bsStyle="primary"
                            onClick={this.props.onDelete.bind(this)}>
                            Delete
                        </Button>
                    </Modal.Footer>

                </Modal.Dialog>
            </div>
        );
    }
}
