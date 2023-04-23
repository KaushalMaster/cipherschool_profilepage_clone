import React, { useState } from "react";
import "./Popup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal, ModalHeader, ModalTitle } from "react-bootstrap";
function Popup() {
  const [modal, setmodal] = useState(false);
  return (
    <div>
      <Modal
        size="lg"
        isOpen={modal}
        toggle={() => {
          setmodal(!Modal);
        }}
      >
        <ModalHeader
          toggle={() => {
            setmodal(!Modal);
          }}
        >
          <ModalTitle>Sign-In</ModalTitle>
        </ModalHeader>
      </Modal>
      <Button
        className="btn mt-3"
        style={{
          backgroundColor: "#0b3629",
          color: "white",
        }}
        onClick={() => {
          setmodal(true);
        }}
      >
        Sign-In
      </Button>
    </div>
  );
}

export default Popup;
