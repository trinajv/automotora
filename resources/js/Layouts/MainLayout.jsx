import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "@inertiajs/react";

export default function MainLayout({ children }) {
  return (
    <>
      {/* NAVBAR */}
      <Navbar bg="light" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand as={Link} href="/" className="fw-bold text-primary">
            Automotora
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="ms-auto">
              <Nav.Link as={Link} href="/" className="mx-2">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} href="/autos" className="mx-2">
                Autos
              </Nav.Link>
              <Nav.Link as={Link} href="/contacto" className="mx-2">
                Contacto
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CONTENIDO PRINCIPAL */}
      <main className="py-4">{children}</main>

      {/* FOOTER SIMPLE */}
      <footer className="text-center py-4 bg-light border-top mt-5">
        <small>© {new Date().getFullYear()} Automotora. Todos los derechos reservados.</small>
      </footer>
    </>
  );
}
