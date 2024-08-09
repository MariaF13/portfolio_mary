import { Container, Row, Col } from "react-bootstrap";

export const Footer: React.FC = () => {
    return (
      <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <p>Developed by Maria Mendonça</p>
          </Col>
        </Row>
      </Container>
    </footer>
    )
  
}

export default Footer