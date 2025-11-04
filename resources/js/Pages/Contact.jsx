import { useForm } from "@inertiajs/react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import MainLayout from "../Layouts/MainLayout";

export default function Contact({ errors, flash }) {
    const { data, setData, post, processing, reset } = useForm({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("contact.send"), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MainLayout>
            <Container className="py-5">
                <Row className="justify-content-center">
                    <Col md={8} lg={6}>
                        <h2 className="fw-bold text-center mb-4">
                            Contáctanos
                        </h2>

                        {flash?.success && (
                            <Alert variant="success" className="text-center">
                                {flash.success}
                            </Alert>
                        )}
                        {errors.error && (
                            <Alert variant="danger" className="text-center">
                                {errors.error}
                            </Alert>
                        )}

                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    isInvalid={!!errors.name}
                                    placeholder="Tu nombre completo"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    isInvalid={!!errors.email}
                                    placeholder="ejemplo@correo.com"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                    isInvalid={!!errors.phone}
                                    placeholder="+56912345678"
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.phone}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Mensaje</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    name="message"
                                    rows={4}
                                    value={data.message}
                                    onChange={(e) =>
                                        setData("message", e.target.value)
                                    }
                                    isInvalid={!!errors.message}
                                    placeholder="Escribe tu consulta aquí..."
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.message}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <div className="text-center">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    disabled={processing}
                                    className="px-5"
                                >
                                    {processing
                                        ? "Enviando..."
                                        : "Enviar mensaje"}
                                </Button>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </MainLayout>
    );
}
