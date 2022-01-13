import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./team.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/ceo.jpg"
import Person02 from "../../assets/about/p1.jpg"
import Person03 from '../../assets/about/p2.jpg'
import Person04 from '../../assets/about/p3.png'
import Person05 from '../../assets/about/p4.png'

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="Professional Team" />
      <p className="font12">
      </p>
      <Row>
        <Col md={12} lg={2}>
        </Col>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person01} name="George" job="CEO" />
        </Col>
        <Col md={12} lg={5}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              George A.Brown is the co-founder and CEO of Cannvalue. Prior to Cannvalue, George was CEO of Biotech Nas, a biotech research organzation in BC. George
              holds an MBA from Stanford Graduate School of Business. 
             </p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={2}>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person02} name="Steven" job="Sales director" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Steven has been in the sales profession for over 20 years, mainly in cannabis, nicotine, and tobacco industries. Companies he has served ranging from startups to internationally well known corporations which has given him tremendous resources and connections in the industry.
             </p>
            </div>
          </div> 
        </Col>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person03} name="Sam" job="VP of Sales & Marketing" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Sam graduated from university of Toronto with a degree in Bachelor of Science, Sam has over 20 years of sales & marketing professional experience for both the pharmaceutical and cannabis industry. In Canadian legalized cannabis market, Sam has demonstrated his capabilities of deep connection with both top tier LPs and small sized brands.
             </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person04} name="Matten" job="legal advisor" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Mahin holds two master degrees with in Law Schools from both UK and Canadian’ top universities. He has been working in legal consultation field for nearly a decade.
             </p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={3}>
          <TeamBox avatar={Person05} name="David" job="IT director" />
        </Col>
        <Col md={12} lg={3}>
          <div className="team__info flex-center">
            <div>
              <p className="font12 weight500">
              Graduated from University of British Columbia with specialist in computer science and software engineering, David has been working as a senior software developer for top Canadian IT companies during the past 5 years. 
             </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
