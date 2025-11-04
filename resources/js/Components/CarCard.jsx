import { Card, Button, Badge } from "react-bootstrap";
import { formatNumber } from "../utils/formatNumber";
import { Link } from "@inertiajs/react";

export default function CarCard({ car }) {
  return (
    <Card className="h-100 shadow-sm border-0 position-relative">
      {/* Ribbon */}
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

      {/* Imagen */}
      <Card.Img
        variant="top"
        src={car.image}
        alt={car.title}
        loading="lazy"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
          backgroundColor: "#f2f2f2",
        }}
      />

      {/* Contenido */}
      <Card.Body>
        <Card.Title className="fs-6 fw-semibold text-truncate">
          {car.title}
        </Card.Title>

        <Card.Text>
          <small className="text-muted d-block">
            Año {car.year} — {car.version}
          </small>
          <small className="text-muted d-block">{car.mileage}</small>
          <strong>{formatNumber(car.price)}</strong>
          <small className="d-block text-muted mt-1">{car.seller}</small>
        </Card.Text>

        <Link
          href={`/auto/${car.brand?.toLowerCase()}/${car.title?.split(" ")[0]?.toLowerCase()}/${car.id}`}
          className="btn btn-primary w-100"
        >
          Ver detalle
        </Link>

      </Card.Body>
    </Card>
  );
}
