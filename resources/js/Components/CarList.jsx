import { Row, Col } from "react-bootstrap";
import CarCard from "./CarCard";

export default function CarList({ cars }) {
  if (!Array.isArray(cars)) {
    console.error("CarList recibió algo que no es un array:", cars);
    return <p>Error: datos no válidos.</p>;
  }

  return (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {cars.map((car, index) => (
        <Col key={index}>
          <CarCard car={car} />
        </Col>
      ))}
    </Row>
  );
}
