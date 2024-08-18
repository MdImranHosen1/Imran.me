import React, { useState } from "react"

import { Container, Title } from "./common"
import { FaExternalLinkAlt } from "react-icons/fa"
import { skills } from "../data"

import "./skill.css"

const Skill = () => {
  const skillsName = Object.keys(skills)
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0])
  const selectedSkills = skills[selectedSkill]
  return (
    <div id="skill" className="skill-area">
      <Container>
        <Title side="right" title="My Skills" />
        <div className="skills">
          <ul className="skill-nav">
            {skillsName.map(name => (
              <li
                onClick={() => setSelectedSkill(name)}
                className={name === selectedSkill ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className="skill">
            {selectedSkills.map(({ name, percent, Solved, link, Rating }) => (
              <div key={name} className="card">
                <h4>
                  {name}{" "}
                  {link && (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={link}
                      style={{ color: "white" }}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </h4>

                {percent ? <p>{percent}%</p> : <p>Solved: {Solved}</p>}

                <div style={{ width: percent + "%" }} className="progress-ar" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Skill }
