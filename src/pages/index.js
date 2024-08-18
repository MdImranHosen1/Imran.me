import React from "react"

import {
  Intro,
  LoveToDo,
  Portfolio,
  About,
  Skill,
  Contact,
} from "../components"
import { Layout, SEO } from "../components/common"
import { Education } from "../components/Education"
import { Achievement } from "../components/Achievement"

const IndexPage = () => (
  <>
    <Layout>
      <SEO title="Md Imran Hosen" />
      <Intro />
      <About />
      <Education />
      <Skill />
      <Achievement />
      <LoveToDo />
      <Portfolio />
      <Contact />
    </Layout>
  </>
)

export default IndexPage
