import { Fragment, useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";

const MessageAlert = () => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);

  return (
    <Fragment>
      <Container>
        <Modal show={show}>
          <Modal.Header>
            <Modal.Title>New Offers</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default MessageAlert;
