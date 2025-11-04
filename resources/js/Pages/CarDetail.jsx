import { Container, Row, Col, Button, Badge } from "react-bootstrap";
import MainLayout from "../Layouts/MainLayout";
import { formatNumber } from "../utils/formatNumber";

export default function CarDetail({ car, error }) {
    if (error) {
        return (
            <MainLayout>
                <Container className="py-5 text-center">
                    <h2>{error}</h2>
                    <Button href="/" variant="secondary" className="mt-3">
                        ← Volver al listado
                    </Button>
                </Container>
            </MainLayout>
        );
    }

    if (!car) return null;

    const image =
        Array.isArray(car.photos) && car.photos.length > 0
            ? car.photos[0]
            : "https://via.placeholder.com/600x400?text=Sin+imagen";

    return (
        <MainLayout>
            <Container className="py-5">
                <Row className="align-items-start">
                    <Col md={6} className="mb-4 position-relative">
                        <img
                            src={image}
                            alt={car.brand}
                            className="img-fluid rounded shadow-sm w-100"
                            style={{ objectFit: "cover", maxHeight: "400px" }}
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src =
                                    "https://via.placeholder.com/600x400?text=Sin+imagen";
                            }}
                        />
                        {car.ribbon && (
                            <Badge
                                bg="none"
                                style={{
                                    backgroundColor: car.ribbonColor,
                                    color: car.ribbonTextColor,
                                    position: "absolute",
                                    top: "10px",
                                    left: "10px",
                                    padding: "6px 10px",
                                    borderRadius: "6px",
                                    fontSize: "0.75rem",
                                    fontWeight: "600",
                                }}
                            >
                                {car.ribbon}
                            </Badge>
                        )}
                    </Col>

                    <Col md={6}>
                        <h2 className="fw-bold mb-3">{car.brand + " " + car.model}</h2>
                        <ul className="list-unstyled mb-4">
                            <li>
                                <strong>Año:</strong> {car.year}
                            </li>
                            <li>
                                <strong>Versión:</strong> {car.version}
                            </li>
                            <li>
                                <strong>Kilometraje:</strong>{" "}
                                {car.mileage.toLocaleString()} km
                            </li>
                            <li>
                                <strong>Motor:</strong> {car.engine} cc
                            </li>
                            <li>
                                <strong>Transmisión:</strong> {car.transmission}
                            </li>
                            <li>
                                <strong>Combustible:</strong> {car.fuel}
                            </li>
                        </ul>
                        <h4 className="text-primary mb-4">
                            {formatNumber(car.price)}
                        </h4>
                        <p>
                            <strong>Vendedor:</strong> {car.seller}
                        </p>
                        <Button variant="success" className="me-2">
                            Contactar vendedor
                        </Button>
                        <Button href="/" variant="outline-secondary">
                            ← Volver al catálogo
                        </Button>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
}
