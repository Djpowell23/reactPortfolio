import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const PortfolioWrapper = styled.section`
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;

  h2 {
    margin-top: 1rem;
  }
  .btn {
    margin-top: 1rem;
    width: 100%;
  }
  .project-sidebar {
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
    border-radius: 5px;
  }
  .list-group-item {
    :hover {
      cursor: pointer;
      border: 2px solid red;
    }
  }
`;

class Portfolio extends Component {
  state = {
    projectTitle: "",
    image: "",
    code: "",
    site: "",
    techUsed: [],
    description: ""
  };

  componentDidMount() {
    console.log("state:", this.state);
  }

  //   May need to create api for projects to get this to work
  handleProjectClick = event => {
    event.preventDefault();
    const project = event.target;
    const projectObj = {
      projectTitle: project.title,
      code: project.code,
      site: project.site
    };
    this.setState(projectObj);
    console.log("event.target:", project);
  };

  render() {
    return (
      <PortfolioWrapper>
        <Row>
          <Col md="3" className="project-sidebar">
            <h2>Projects</h2>
            <hr></hr>
            <ul className="list-group">
              <li
                className="list-group-item"
                onClick={this.handleProjectClick}
                title="Clicking Bad"
                site="https://djpowell23.github.io/clickingBad/"
                code="https://github.com/Djpowell23/clickingBad"
              >
                Clicking Bad
              </li>
              <li className="list-group-item">Postivism</li>
              <li className="list-group-item">Tunedea</li>
              <li className="list-group-item">clickingBad</li>
            </ul>
          </Col>
          <Col md="9">
            <h2>Project Title</h2>
            <hr></hr>
            <p className="project-description">
              Say Hay is an iOS application developed to help you keep in touch
              with friends, family and associates. In this fast paced world we
              often do not have time to chat with all the firends that we have
              stored in our phones. At one time, long ago, it was the goal of
              social media to help solve this problem. However, it seems that
              social media has become more media and less social. Say Hay is
              intended to get back to the roots of using technology to improve
              our social interactions and help us connect with the people that
              we want to communicate with.
            </p>
            <hr></hr>
            <Row>
              <Col md="6" className="tech-used">
                <h2>Technologies Used</h2>
                <hr></hr>
                <ul className="list-group">
                  <li className="list-group-item">React</li>
                  <li className="list-group-item">MongoDB</li>
                  <li className="list-group-item">JavaScript</li>
                  <li className="list-group-item">Reactstrap</li>
                  <li className="list-group-item">Axios</li>
                </ul>
              </Col>
              <Col md="6">
                <h2>Preview Image</h2>
                <hr></hr>
                <img src={this.state.selectedImage} alt="Preview Image" />
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <button className="btn btn-dark">View the Code</button>
              </Col>
              <Col md="6">
                <button className="btn btn-dark">View the Site</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;
