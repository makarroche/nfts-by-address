import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ModalNFT from "./ModalNFT";

const CardNFT = ({ nft, ownerAddress }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <Card
        style={{ width: "18rem" }}
        className="text-dark m-4"
        onClick={() => setModalShow(true)}
      >
        <Card.Img
          variant="top"
          src={nft?.media[0]?.thumbnail || "./default.jpg"}
          height="250px"
        />
        <Card.Body>
          <Card.Title>{nft?.title || "No title"}</Card.Title>
          <Card.Text>Standard: {nft?.tokenType || "No token type"}</Card.Text>
        </Card.Body>
      </Card>
      <ModalNFT
        show={modalShow}
        onHide={() => setModalShow(false)}
        nft={nft}
        ownerAddress={ownerAddress}
      />
    </>
  );
};

export default CardNFT;
