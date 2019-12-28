import React from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

class ErrorContainer extends React.Component {
  render() {
    return (
      <Container className="error-container">
        <h1>There is</h1>
        <h1>nothing</h1>
        <h1>to see here.</h1>
        <Link to="/">
          <h3>back to homepage</h3>
        </Link>
      </Container>
    );
  }
}

export default ErrorContainer;
