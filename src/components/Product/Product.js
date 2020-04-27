import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { BASE_PATH } from "../../utils/constants";

import "./Product.scss";

export default function Product(props) {
  const { product, addProductCard } = props;
  return (
    <Col xs={3} className="product">
      <Card>
        <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
        <Card.Body> {product.name}</Card.Body>
        <Card.Text>{product.extraInfo}</Card.Text>
        <Card.Text>{product.price.toFixed(2)} € / Unidad</Card.Text>
        <Button onClick={() => addProductCard(product.id, product.name)}>
          Añadir al carrito
        </Button>
      </Card>
    </Col>
  );
}
