import React from "react"

import { Container, Title } from "./common"

import chessGame from "../assets/image/chessGame.svg"
import travelling from "../assets/image/travelling.svg"
import footballGame from "../assets/image/footballGame.svg"
import swimming from "../assets/image/swimming.svg"

import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={chessGame} />
            <h4>Chess</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={travelling} />
            <h4>Travelling</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={footballGame} />
            <h4>Football</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={swimming} />
            <h4>Swimming</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
