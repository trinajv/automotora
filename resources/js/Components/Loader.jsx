import { Spinner } from "react-bootstrap";

export default function Loader({ message = "Cargando..." }) {
  return (
    <div className="text-center my-5">
      <Spinner animation="border" role="status" />
      <p className="mt-2">{message}</p>
    </div>
  );
}
