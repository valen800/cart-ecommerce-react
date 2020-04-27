import React from "react";
import { Container, Row } from "react-bootstrap";
import Product from "../Product";
import Loading from "../Loading";

export default function Products(props) {
  const {
    addProductCard,
    products: { result, loading, error },
  } = props;
  return (
    <Container>
      <Row>
        {loading || !result ? (
          <Loading />
        ) : (
          result.map((product, index) => (
            <Product product={product} addProductCard={addProductCard} />
          ))
        )}
      </Row>
    </Container>
  );
}
