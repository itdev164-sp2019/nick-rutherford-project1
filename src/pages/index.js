import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from '../components/seo'
import { Button, IconButton, Section } from '../components/Element'
import { Search } from 'styled-icons/feather'
import { Footer } from '../components/Element/Footer'

import MainPage from '../components/MainPage';

const IndexPage = () => (
  <Layout>
   
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MainPage>
    </MainPage>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Footer>
</Footer>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
