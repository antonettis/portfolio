import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import ReadingProgress from "./ProgressBar";
import VideoPlayer from "./VideoPlayer";

const PortfolioItem = props => {
  const projectTypeList = props.projectType.map((projectTypes, i) => (
    <li key={i}>
      <p>{projectTypes}</p>
    </li>
  ));

  const imagesGallery = props.images.map((imageList, i) => (
    <img key={i} src={require(`../img${props.url}/${imageList}`)} alt="" />
  ));

  const videosGallery = props.videos
    ? props.videos.map((videoList, i) => (
        <VideoPlayer key={i} videoUrl={videoList} folderSrc={props.url} />
      ))
    : null;

  const mockupSrc = props.mockups ? (
    <div className="caption">
      <p>Mockups:</p>
      {props.mockups.map((mockupList, i) => (
        <a
          key={i}
          href={mockupList.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>{mockupList.website}</p>
        </a>
      ))}
    </div>
  ) : null;

  const target = React.createRef();

  return (
    <>
      <ReadingProgress target={target} />
      <Container className="portfolio-item" ref={target}>
        <div className="icon-scroll"></div>
        <h1>{props.displayName}</h1>
        <img
          src={require(`../img${props.url}/${props.mainImage}`)}
          alt={props.displayName}
        />
        <Row>
          <Col xs={4} md={2} lg={2}>
            <h4>date</h4>
            <p>{props.date}</p>
          </Col>
          <Col xs={8} md={10} lg={2}>
            <h4>project</h4>
            <ul>{projectTypeList}</ul>
          </Col>
          <Col>
            <p>{props.summary}</p>
          </Col>
        </Row>
        {imagesGallery}
        {videosGallery}
        {mockupSrc}
        <div className="vl"></div>
        <div className="projectlink">
          <Link to={props.nextProjectUrl}>
            <h3>Next Project</h3>
            <h1>{props.nextProjectName}</h1>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default PortfolioItem;
