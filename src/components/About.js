import React from "react"

import { Container, Title, Button } from "./common"

import profile from "../assets/image/profile.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
              Hi, I’m MD Imran Hosen, a dedicated and self-motivated software
              engineer with a strong focus on competitive programming and
              problem-solving. I graduated with a B.Sc. in Computer Science and
              Engineering from Bangabandhu Sheikh Mujibur Rahman Science and
              Technology University. I’ve tackled over 2,000 problems on
              platforms like Codeforces, InterviewBit, and LeetCode, achieving
              notable ratings and rankings. I’ve also competed in prestigious
              contests such as ICPC and NCPC, where my teams secured impressive
              positions. Passionate about coding challenges and continuous
              learning, I’m always eager to embrace new technologies and expand
              my expertise.
            </p>
            <div className="about-action">
              <Button
                link="https://docs.google.com/document/d/1qCJJ6SO4_I4SkH2mhCjSfj0Ggx-c6Gy7C7QqB5uc3Lk/edit?usp=sharing"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profile} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
