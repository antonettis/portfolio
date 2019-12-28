import React from "react";
import { Row, Col } from "react-bootstrap";
import Projects from "./projects.json";
import { Link } from "react-router-dom";
import WaterWave from "react-water-wave";

class LandingPage extends React.Component {
  constructor(props, prevState) {
    super(props);
    this.state = {
      activeSlide: 0,
      previousSlide: "",
      zIndexRipple: "90"
    };
  }

  render() {
    return (
      <Row className="content homepage">
        <Col xs={{ span: 10, offset: 1 }} lg={{ span: 10, offset: 1 }}>
          <div className="coord">
            <a
              href="https://goo.gl/maps/6gsWDXBXcj5sqtkY9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="coord">55.966885° N, -3.188179° E</h3>
            </a>
          </div>
          <div className="main-menu">
            {Projects.projects.map((projectList, i) => (
              <Row className="menu-item" key={i}>
                <Col xs={1} lg={1}>
                  <h6>{`0${i + 1}`}</h6>
                </Col>
                <Col>
                  <Link
                    to={projectList.url}
                    onMouseEnter={() =>
                      this.setState(prevState => {
                        return {
                          activeSlide: i,
                          previousSlide: prevState.activeSlide,
                          zIndexRipple: "-1"
                        };
                      })
                    }
                    onMouseOut={() => this.setState({ zIndexRipple: "90" })}
                  >
                    <h1>{projectList.displayName}</h1>
                  </Link>
                </Col>
              </Row>
            ))}
          </div>
        </Col>
        <div className="preview">
          <div
            className="preview-image"
            // style={{
            //   backgroundImage: `url(${require(`../img${Projects.projects[this.state.activeSlide].url}.jpg`)})`
            // }}
          >
            <Link to={Projects.projects[this.state.activeSlide].url}>
              <WaterWave
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  zIndex: this.state.zIndexRipple
                  // backgroundImage: `url(${require(`../img${Projects.projects[this.state.activeSlide].url}.jpg`)})`
                }}
                imageUrl={require(`../img${Projects.projects[this.state.activeSlide].url}.jpg`)}
                interactive={true}
                dropRadius={10}
                perturbance={0.03}
              />
              {Projects.projects.map((projectList, i) => (
                <img
                  key={i}
                  src={require(`../img${projectList.url}.jpg`)}
                  alt={projectList.displayName}
                  className={`${
                    this.state.activeSlide === i ? "is-visible" : "is-hidden"
                  }`}
                />
              ))}
            </Link>
          </div>
        </div>
      </Row>
    );
  }
}

export default LandingPage;
