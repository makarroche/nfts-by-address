import Image from "next/image";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DetailsNFT from "./DetailsNFT";

const ModalNFT = ({ show, onHide, nft, ownerAddress }) => {
  const redirectToOpenSea = () => {
    location.replace(
      `https://opensea.io/assets/ethereum/${nft?.contract?.address}/${nft?.tokenId}`
    );
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {nft?.title || "No title"}
        </Modal.Title>
        <img
          variant="top"
          src={nft?.media[0]?.thumbnail || "./default.jpg"}
          height="50"
          width="50"
          className="ms-3"
        />
      </Modal.Header>
      <Modal.Body>
        <DetailsNFT nft={nft} ownerAddress={ownerAddress} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="mx-auto w-25"
          variant="primary"
          onClick={() => redirectToOpenSea()}
        >
          Buy Me
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalNFT;
