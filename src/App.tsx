import { useStore } from "./hooks/useStore";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AUTO_LENGUAGE } from "./constants";
import "./App.css";
import { ArrowsIcon } from "./components/icons";
import LanguageSelector from "./components/LanguageSelector";

function App() {
  const {
    fromLanguage,
    toLanguage,
    interchangeLanguages,
    setFromLanguage,
    setToLanguage,
  } = useStore();

  return (
    <Container fluid>
      <h1>Google Translate</h1>
      <Row>
        <Col>
          <LanguageSelector
            type="from"
            value={fromLanguage}
            onChange={setFromLanguage}
          />
          {fromLanguage}
        </Col>
        <Col>
          <Button
            variant="link"
            onClick={interchangeLanguages}
            disabled={fromLanguage === AUTO_LENGUAGE}
          >
            <ArrowsIcon />
          </Button>
        </Col>
        <Col>
          <LanguageSelector
            type="to"
            value={toLanguage}
            onChange={setToLanguage}
          />
          {toLanguage}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
