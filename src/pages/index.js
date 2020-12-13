import React from "react"
import { graphql } from "gatsby"
import {
  Layout,
  Hero,
  About,
  Survey,
  Slider,
  SEO,
  GridProjects,
} from "../components"

const HomePage = ({ data }) => {
  const {
    allAirtable: { nodes: projects },
  } = data
  //   console.log(projects)

  return (
    <Layout>
      <SEO title="Home" description="This is our home page" />
      <Hero />
      <About />
      <GridProjects projects={projects} title="latest projects" />
      <Survey />
      <Slider />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      totalCount
    }
  }
`

export default HomePage
