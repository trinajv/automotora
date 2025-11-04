import { Container, Alert } from "react-bootstrap";
import MainLayout from "../Layouts/MainLayout";
import CarList from "../Components/CarList";
import { mapCarsData } from "../utils/mapCarsData";

export default function Home({ data }) {
  console.log("🚗 Autos desde Laravel:", data);
  console.log("🔍 ad completo:", data.ads[0].ad);



  const cars = mapCarsData(data?.ads || []);

  return (
    <MainLayout>
      <Container className="py-5">
        <h1 className="text-center mb-4 fw-bold">
          Autos disponibles ({cars.length})
        </h1>

        {cars.length === 0 ? (
          <Alert variant="info" className="text-center">
            No hay autos disponibles por el momento.
          </Alert>
        ) : (
          <CarList cars={cars} />
        )}
      </Container>
    </MainLayout>
  );
}
