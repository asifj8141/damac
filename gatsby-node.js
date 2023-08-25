/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ graphql, actions }) => {
  const {data} = await graphql(`query {propertiesList: allPropertiesJson {
      nodes { slug } 
    }
  }`);

  const {nodes: pagesList} = data.propertiesList;

  const { createPage } = actions;

  pagesList.forEach(element => {
    createPage({
      path:  `/property/${element.slug}`,
      component: require.resolve("./src/templates/propertyDetails.js"),
      context: {slug: element.slug},
      defer: true,
    })
  });
  
}
