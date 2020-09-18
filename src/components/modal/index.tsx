import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ModalContext } from "../../contexts/modal";

const ModalComponent:React.FC<Props> = React.memo(() => {
  let { handleModal, modal, modalContent } = React.useContext(ModalContext);
  
    return (
      <> 
        <Modal 
          show={modal} 
          onHide={handleModal} 
          dialogClassName="modal-90w"
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {modalContent}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => handleModal()}>
              Close
            </Button>
            <Button variant="primary" onClick={() => handleModal()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
})

export default ModalComponent;


interface Props {}