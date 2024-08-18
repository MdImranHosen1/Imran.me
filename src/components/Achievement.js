import React from "react"
import { Container, Title } from "./common"
import { achievements } from "../data/achievements"
import "./achievement.css"

const Achievement = () => {
  return (
    <Container>
      <div className="achievement-area">
        <Title title="Achievements" />
        <div className="achievements-list">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <div className="achievement-images">
                {achievement.images.map((image, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={image}
                    className="achievement-img"
                    alt={`${achievement.name} image ${imgIndex + 1}`}
                  />
                ))}
              </div>
              <div className="achievement-info">
                <h4 style={{ color: "#00cf5d" }}>{achievement.name}</h4>
                <div style={{ color: "#00cf5d", fontWeight: "bold" }}>
                  {achievement.arranged}
                </div>
                <p>{achievement.description}</p>
                <p>Team: {achievement.team}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}

export { Achievement }
