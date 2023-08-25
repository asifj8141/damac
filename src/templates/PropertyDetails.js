import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

function PropertyDetails({data}) {
    const {propertiesJson: property} = data;
  return (
    <Layout>
        <div className='max-w-screen-xl mx-auto p-4'>
            <h2>{property.title}</h2>
            <h3>{property.slug}</h3>
        </div>
    </Layout>
  )
}

export const query = graphql `query 
    Property($slug: String){
        propertiesJson(slug: {eq: $slug}) {
            area
            bedRooms
            condition
            email
            goldenVisa
            handoverDt
            featuredImage
            location
            phone
            price
            slug
            title
            whatsApp
        }
  }
`;


export default PropertyDetails