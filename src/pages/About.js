import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import Headshot from "../images/Headshot.jpg";

const AboutWrapper = styled.section`
  text-align: center;
  h2 {
    margin-top: 1rem;
  }
  img {
    margin-top: 1rem;
    max-height: 300px;
    border: 1px solid grey;
    border-radius: 0.15rem;
  }
  ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .sidebar {
    border-right: 1px solid grey;
    border-bottom: 1px solid grey;
    border-radius: 0.15rem;
  }
  .github,
  .linkedIn,
  .email {
    :hover {
      cursor: pointer;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <Row>
        <Col md="3" className="sidebar">
          <img src={Headshot} alt="profile picture" />
          <ul className="list-group">
            <li className="list-group-item email">dpowel11@kent.edu</li>
            <li className="list-group-item github">Github</li>
            <li className="list-group-item linkedIn">LinkedIn</li>
          </ul>
        </Col>
        <Col md="9">
          <h2>About Devin</h2>
          <hr></hr>
          <p>
            After graduating from college with his Lighting Design degree, he
            got accepted for an internship with Walt Disney Imagineering in
            Orlando, Florida. He moved to Orlando and worked throughout the
            parks for 12 months and then the internship ended and it was time to
            return home. He wanted to return to theatrical lighting so he got a
            job at a public theatre in Cleveland, Ohio. After working there for
            8 months, he realized he wanted to finally see Colorado. He moved
            and decided to pursue his passion for technology and programming in
            order to be a part of the future.
          </p>
        </Col>
      </Row>
    </AboutWrapper>

    // <div className="container">
    //   <h2>About</h2>
    //   <p>
    //     Doggo ipsum aqua doggo boof smol borking doggo with a long snoot for
    //     pats blep, length boy most angery pupper I have ever seen. Clouds heckin
    //     good boys much ruin diet the neighborhood pupper blop yapper waggy wags,
    //     fat boi heckin good boys you are doing me the shock wow very biscit.
    //     Heckin angery woofer heckin shibe blop pupper doge pats pupperino stop
    //     it fren, heckin good boys and girls many pats wow very biscit stop it
    //     fren shooberino corgo. fat boi. Shibe waggy wags boofers big ol, heck.
    //   </p>
    //   <p>
    //     Extremely cuuuuuute such treat long woofer very jealous pupper heck
    //     extremely cuuuuuute shoob many pats, he made many woofs blep very
    //     jealous pupper long doggo shoob puggo. Wrinkler such treat boofers wow
    //     such tempt heckin good boys and girls bork, blep heckin ruff thicc doing
    //     me a frighten, puggo doge smol borking doggo with a long snoot for pats
    //     boof. pats fat boi heck. Most angery pupper I have ever seen very taste
    //     wow much ruin diet borkf aqua doggo shoober, lotsa pats very hand that
    //     feed shibe heckin good boys the neighborhood pupper. Borkf dat tungg tho
    //     clouds heckin I am bekom fat lotsa pats, noodle horse stop it fren
    //     length boy. Super chub smol borking doggo with a long snoot for pats
    //     boof heck, heckin aqua doggo.
    //   </p>
    //   <p>
    //     you are doing me a frighten. Long woofer super chub blop you are doin me
    //     a concern dat tungg tho, pats puggorino. You are doin me a concern ruff
    //     he made many woofs yapper, pupperino. Pats length boy such treat doggo
    //     boofers, sub woofer wow very biscit. Ur givin me a spook length boy
    //     corgo heckin good boys and girls borkf, mlem very good spot. Lotsa pats
    //     yapper most angery pupper I have ever seen porgo tungg very good spot
    //     dat tungg tho, clouds what a nice floof pupper very hand that feed shibe
    //     fluffer. Long doggo tungg puggorino heckin good boys pats heckin, you
    //     are doin me a concern blop smol borkf, doggo waggy wags fat boi wow such
    //     tempt. Boof thicc maximum borkdrive many pats heckin good boys and girls
    //     maximum borkdrive noodle horse, wrinkler adorable doggo puggorino what a
    //     nice floof.
    //   </p>
    // </div>
  );
};

export default About;
