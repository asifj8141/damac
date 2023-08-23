import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"

import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"




const IndexPage = ({data}) => {
  const {nodes: propertiesList} = data.propertiesList;

  return(
    <Layout>
      <div className='max-w-screen-xl mx-auto p-4'>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-4">
          {propertiesList.map((el,i)=>
              <div key={el.id}
                  className="mx-1 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
                  <Link to={`/property/${el.slug}`}>
                          <div className="w-full h-48 bg-cover rounded-t-lg" style={{backgroundPosition:'center', backgroundImage:`url(${el.image})`}}></div>
                  </Link>
                  <div className="p-3">
                      <h5 className="mb-2 text-xs leading-tight text-neutral-800 ">
                        {el.title}
                      </h5>
                      <p className="mb-1 font-medium leading-tight text-neutral-800 ">
                        AED {el.price}
                      </p>
                      <p className="text-xs text-neutral-600">
                        {el.location}
                      </p>
                  </div>

                  <div className="p-3 py-0 grid grid-cols-2 gap-4 text-xs">
                    <div><i class="fa fa-car"></i> 1 </div>
                    <div><i class="fa fa-car"></i> 10,000 sq. ft</div>
                    <div><i class="fa fa-car"></i> Unfurnished</div>
                    <div><i class="fa fa-car"></i> 12/31/24</div>
                  </div>

                  <div className="p-3 mt-3 flex flex-row justify-between text-xs gap-2">
                    {
                      el?.phone &&
                      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-damac rounded shadow flex-1">
                        <span className="fa fa-phone mr-1 text-damac"></span>
                        Call
                      </button>
                    }
                    {
                      el?.email && 
                      <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-damac rounded shadow  inline-flex items-center flex-1">
                      <svg class="w-3 h-3 text-damac mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                          <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                          <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                      </svg>
                          Email
                      </button>
                    }
                    {
                      el?.whatsApp &&
                      <button class="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded shadow flex-1">
                        Whatapp
                      </button>
                    }
                    
                  </div>
                  <div className="p-3 pt-0 flex flex-row justify-between text-xs gap-2">
                      <button class="bg-damac hover:bg-stone-500 text-white font-semibold py-2 px-2 rounded shadow flex-1">
                        
                        Pay Online
                      </button>  
                  </div>
              </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
query {
  propertiesList: allPropertiesJson(sort: {price: ASC}) {
    nodes {
      location
       image
       price
       slug
       title
       id
       phone
       whatsApp
       email
   } 
  }
}
`

export default IndexPage

