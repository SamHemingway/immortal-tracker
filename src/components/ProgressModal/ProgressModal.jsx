import React from "react";
import styled from "styled-components/macro";
import Modal from "../Primitives/Modal";
import ProgressInput from "../ProgressInput";

export default function ProgressModal({ modalOpen, setModalOpen, modalTitle }) {
  return (
    <Modal
      modalOpen={modalOpen}
      setModalOpen={setModalOpen}
      modalTitle={modalTitle}
      style={{ top: "30px" }}
    >
      <ProgressInput setInputOpen={setModalOpen} />
    </Modal>
  );
}

const FactionImage = styled.img`
  max-inline-size: 5rem;
  position: absolute;

  filter: drop-shadow(3px 0 0 white) drop-shadow(0 3px 0 white)
    drop-shadow(-3px 0 0 white) drop-shadow(0 -3px 0 white);
`;
