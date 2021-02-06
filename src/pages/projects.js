import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { Layout, Projects, SEO } from "../components"

const ProjectsPage = ({ data }) => {
  //   console.log(data)
  const {
    allAirtable: { nodes: projects },
  } = data
  return (
    <Wrapper>
      <SEO title="Projects" description="This is the projects page" />
      <Layout>
        <Projects projects={projects} page title="our projects" />
        {/* <Algolia /> */}
      </Layout>
    </Wrapper>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "Projects" } }) {
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

const Wrapper = styled.main`
  min-height: 100vh;
  background: var(--clr-grey-10);
  nav {
    background: var(--clr-primary-7);
  }
`

export default ProjectsPage
