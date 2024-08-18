import React from "react"
import { Container, Title } from "./common"
import { educationData } from "../data/education"
import "./education.css"

const Education = () => {
  return (
    <Container>
      <div id="education" className="education-area">
        <div className="education-section">
          {educationData.map((item, index) => (
            <div key={index} className="education-item">
              {/* <img alt={item.level} src={item.icon.default} /> */}
              <h4 style={{ marginBottom: "10px", color: "#00cf5d" }}>
                {item.level}
              </h4>
              <p>{item.institution}</p>
              <p>{item.period}</p>
              <p>{item.cgpa || item.gpa}</p>
            </div>
          ))}
        </div>
        <Title side="left" title="Education" />
      </div>
    </Container>
  )
}

export { Education }
