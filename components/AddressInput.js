import { useState } from "react";
import { Button, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const AddressInput = ({ onClick }) => {
  const [address, setAddress] = useState("");

  return (
    <Form>
      <Row>
        <Form.Group className="mb-3 mt-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Type an address</Form.Label>
          <Form.Control
            onChange={(e) => setAddress(e.target.value)}
            type="publicKey"
            placeholder="Example: 0xb794f5ea0ba39494ce839613fffba74279579268"
            required
          />
        </Form.Group>
      </Row>
      <Row className="justify-content-center">
        <Button
          className="w-25"
          variant="primary"
          onClick={() => onClick(address, true)}
        >
          Show me NFT!
        </Button>
      </Row>
    </Form>
  );
};

export default AddressInput;
