import { Container, Button, Card } from "react-bootstrap";
import MainLayout from "../Layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Container className="py-5 text-center">
        <Card className="p-4 shadow-sm">
          <h1>Hola Mundo</h1>
        </Card>
      </Container>
    </MainLayout>
  );
}
