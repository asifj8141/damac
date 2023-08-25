/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {

  const result = await graphql(`query {propertiesList: allPropertiesJson {
      nodes { slug } 
    }
  }`);

  if(result.errors){
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const {nodes: pagesList} = result.data.propertiesList;

  const { createPage } = actions;

  console.log(pagesList);

  const DetailsPageTemplate = path.resolve(`src/templates/PropertyDetails.js`)

  pagesList.forEach(element => {
    createPage({
      path:  `/property/${element.slug}`,
      component: DetailsPageTemplate,
      context: {slug: element.slug},
      // defer: true,
    })
  });
  
}
