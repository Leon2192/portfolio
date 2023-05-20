import { Col } from "react-bootstrap";
import { BsFillRocketTakeoffFill } from 'react-icons/bs'
import { Link } from "react-router-dom";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
         <a href={link}>
         <span className="link-to-projects"> <BsFillRocketTakeoffFill size={'2em'} /></span>
         </a>
        
         
        </div>
      </div>
    </Col>
  )
}
