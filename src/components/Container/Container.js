import { Row, Col } from "antd";

export default function Container({ children }) {
  return (
    <>
      <Row>
        <Col xs={24} md={{ span: 12, offset: 6 }}>
          {children}
        </Col>
      </Row>
    </>
  );
}
