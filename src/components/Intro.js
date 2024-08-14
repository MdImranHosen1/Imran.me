import React from "react"

import { Container, Title, Button } from "./common"

import "./intro.css"

const Intro = () => {
  return (
    <div className="intro-area">
      <Title title="Follow Me" social height="320px" />
      <Container>
        <div className="intro">
          <div className="intro-text">
            <p>Hello! I am</p>
            <h1>Imran Hosen</h1>
            <h3>Competetive Programmer</h3>
            <ul>
              <li>Full Stack Developer</li>
              <li>Junior Software Engineer</li>
              <li>Web Developer</li>
            </ul>
            <div className="action">
              <Button
                link="https://docs.google.com/document/d/1qCJJ6SO4_I4SkH2mhCjSfj0Ggx-c6Gy7C7QqB5uc3Lk/edit?usp=sharing"
                target="__blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#about" ml="15px" title="About Me" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Intro }
