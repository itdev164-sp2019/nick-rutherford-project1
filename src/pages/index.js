import React from 'react'
import Layout from "../components/layout"
import SEO from '../components/seo'
import MainPage from '../components/MainPage'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainPage>
    </MainPage>
  </Layout>
)

export default IndexPage
