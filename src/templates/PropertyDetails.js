import React from 'react'
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

function PropertyDetails({data}) {
    const {propertiesJson: property} = data;
   
  return (
    <Layout>
    <div className='max-w-screen-xl mx-auto p-4'>
        <Link href="/" className='flex mt-3 mb-2 items-center'>
            <i class="las la-angle-left font-sm"></i> <span className='mr-5'>Back to property Listing</span>
        </Link>
      
        <div className='container my-2'>
          <div class="grid grid-cols-2 gap-2">
              <div>
                  <img class="h-half max-w-full rounded-lg" src={property.images[0]} alt="" />
              </div>
              <div class="grid grid-cols-2 gap-4">
                { 
                  property.images.filter((_, i) => i > 0 && i < 3).map( (el, i) =>
                    <div key={i} className='flex'>
                        <img class="h-auto max-w-full rounded-lg" src={el} alt="" />
                    </div>
                  )
                } 
              </div>
          </div>
        </div>
        <br/>
        <p>{property.shortDescription}</p>
        
        <h1 className='text-2xl font-bold' style={{fontSize:'24px'}}>{property.title}</h1>
        <h3 className='text-2xl font-bold text-gray-300' style={{fontSize:'22px'}}>{property.siteId}</h3>

        
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
            images
            location
            phone
            price
            slug
            title
            whatsApp
            shortDescription
            siteId
        }
  }
`;


export default PropertyDetails