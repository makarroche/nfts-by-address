import { ListGroup } from "react-bootstrap";

const DetailsNFT = ({ nft, ownerAddress }) => {
  return (
    <ListGroup as="ol">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Owner Address</div>
          {ownerAddress || "No owner address"}
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Contract Address</div>
          {nft?.contract?.address || "No contract address"}
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Token id</div>
          {nft?.tokenId || "No tokenId"}
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Description</div>
          {nft?.description || "No Description"}
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default DetailsNFT;
