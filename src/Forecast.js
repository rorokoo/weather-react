import "./Styling/Forecast.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { WiCloudy } from "weather-icons-react";

export default function Forecast() {
  return (
    <div className="grid">
      <Row className="text-center">
        <Col>
          <div className="day">Sun</div>
          <WiCloudy size={70} color="#000" />
          <div className="day">19°</div>
        </Col>
        <Col>
          <div className="day">Sun</div>
          <WiCloudy size={70} color="#000" />
          <div className="day">19°</div>
        </Col>
        <Col>
          <div className="day">Sun</div>
          <WiCloudy size={70} color="#000" />
          <div className="day">19°</div>
        </Col>
        <Col>
          <div className="day">Sun</div>
          <WiCloudy size={70} color="#000" />
          <div className="day">19°</div>
        </Col>
        <Col>
          <div className="day">Sun</div>
          <WiCloudy size={70} color="#000" />
          <div className="day">19°</div>
        </Col>
      </Row>
    </div>
  );
}
