import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Postivism from "../images/postivism.jpg";
import API from "../utils/API";

const PortfolioWrapper = styled.section`
  margin-left: 15px;
  margin-right: 15px;
  text-align: center;

  img {
    height: 250px;
    border: 1px solid grey;
  }

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
    border-radius: 0.15rem;
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

  // May need to create api for projects to get this to work
  // Create new State Object
  handleProjectClick = event => {
    event.preventDefault();
    const project = event.target;
    const title = project.title;
    console.log("title:", title);

    // What I want returned:
    const response = {
      projectTitle: "Clicking Bad",
      image: "",
      code: "https://www.github.com/Djpowell23/clickingBad",
      site: "https://djpowell23.github.io/clickingBad/",
      description:
        "Memory game where you try to click all images without making any duplicates.",
      techUsed: ["React", "ReactStrap", "react-router-dom"]
    };

    // New State
    let newState = { ...this.state };

    // How I handle the response
    newState = response;

    this.setState(newState);
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
              >
                Clicking Bad
              </li>
              <li
                className="list-group-item"
                onClick={this.handleProjectClick}
                title="Postivism"
              >
                Postivism
              </li>
              <li
                className="list-group-item"
                onClick={this.handleProjectClick}
                title="Tunedea"
              >
                Tunedea
              </li>
            </ul>
          </Col>
          <Col md="9">
            {/* If a project is selected, show the title */}
            {this.state.projectTitle ? (
              <h2>{this.state.projectTitle}</h2>
            ) : (
              <h2>Project Title</h2>
            )}
            <hr></hr>
            {/* If a project is selected, show the description */}
            {this.state.description ? (
              <p>{this.state.description}</p>
            ) : (
              <p>Project Description</p>
            )}
            <hr></hr>
            <Row>
              <Col md="6" className="tech-used">
                <h2>Technologies Used</h2>
                <hr></hr>
                <ul className="list-group">
                  {/* Will need to map through the array in state */}
                  {this.state.techUsed.map(tech => (
                    <li className="list-group-item" key={tech}>
                      {tech}
                    </li>
                  ))}
                  {/* End Map */}
                </ul>
              </Col>
              <Col md="6">
                <h2>Preview Image</h2>
                <hr></hr>
                {/* Hide image until project is selected */}
                {this.state.image ? (
                  <img src={this.state.image} alt="Preview Image" />
                ) : (
                  <span></span>
                )}
              </Col>
            </Row>
            <Row>
              {/* Hide Buttons if no project is selected */}
              <Col md="6">
                {this.state.projectTitle ? (
                  <button className="btn btn-dark" value={this.state.code}>
                    View the Code
                  </button>
                ) : (
                  <p>Select a project to see details </p>
                )}
              </Col>
              <Col md="6">
                {this.state.projectTitle ? (
                  <button className="btn btn-dark" value={this.state.site}>
                    View the Site
                  </button>
                ) : (
                  <p>Select a project to see details</p>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </PortfolioWrapper>
    );
  }
}

export default Portfolio;
