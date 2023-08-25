import React, {useState, useEffect} from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import PropertyCard from "../components/PropertyCard/PropertyCard"
import { queryData } from "../utils/utils"


const intialFilters = {
  condition: null,
  bedRooms: null,
  area: null, 
  price: null,
  sortKey: 'dateAdded',
  sortOrder: 'DESC'
}
const IndexPage = ({data}) => {
  const {nodes: propertiesListRaw} = data.propertiesList;
  const [filters, setFilters] = useState(intialFilters);

  const [propertiesList, setPropertiesList] = useState(propertiesListRaw);

 
  const updateFilters = (key, value)=>{
    console.log(key);
    if(! `${key}` in filters){
      return;
    }
    setFilters(prev => {
      const obj = {...prev}
      obj[key] = value;
      return obj;
    })
  }
  useEffect(() => {

    const appliedFilters = Object.keys(filters).filter(key=> !['sortKey', 'sortOrder'].includes(key)).map(key => {if(filters[key]){ return {'key':key, 'operator': '=', 'value': filters[key]} }}).filter( Boolean );
 
    const filtered = queryData(propertiesListRaw, [appliedFilters], filters.sortKey, filters.sortOrder);
    setPropertiesList(filtered);

    return () => {
      
    }
  }, [filters])
  
  return(
    <Layout>
      <div className='max-w-screen-xl mx-auto p-4'>
      <div class="p-6 my-2 bg-white border border-gray-200 rounded-sm shadow flex flex-col lg:flex-row gap-4">
        <select  onChange={(e)=>updateFilters('condition', e.target.value)} name="condition" class="bg-gray-50 border lg:w-full border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 ">
          <option selected  value="">Property Type</option>
          <option value="Furnished">Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
        <select  onChange={(e)=>updateFilters('bedRooms', e.target.value)} name="bedRooms" class="bg-gray-50 border  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option selected  value="">Bedroom</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <select  onChange={(e)=>updateFilters('area', e.target.value)} name="area" class="bg-gray-50 border  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option selected  value="">Floor Area</option>
          <option value="1000">1000</option>
          <option value="2000">2000</option>
          <option value="3000">3000</option>
          <option value="4000">4000</option>
        </select>
        <select  onChange={(e)=>updateFilters('price', e.target.value)} name="price" class="bg-gray-50 border  border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
          <option selected  value="">Price</option>
          <option value="1000000">10,000 - 100,000</option>
          <option value="1000000">100,000-1,000,000</option>
          <option value="5000000">1,000,000 - 5,000,000</option>
        </select>
        <button className="bg-damac hover:bg-stone-500 text-white font-semibold py-2 px-2 rounded shadow">
            Search
        </button>  
      </div>

        <div className="flex justify-end">
          <div className="right-0 border border-gray-200 rounded p-3 w-[170px]">
            <span className="mr-1">Sort By: </span>
            <select onChange={(e)=>updateFilters('sortKey', e.target.value)}>
              <option value="dateAdded">Recent</option>
              <option value="price">Pice</option>
            </select>
          </div>
        </div>
      <div className="grid-cols-1 sm:grid md:grid-cols-3 lg:grid-cols-4">
          {propertiesList.map((el,i)=>
            <PropertyCard el={el} key={i}/>
          )}
        </div>
      </div>
      
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export const query = graphql`
query {
  propertiesList: allPropertiesJson(sort: {dateAdded: DESC}) {
    nodes {
      location
      featuredImage
       price
       slug
       title
       id
       phone
       whatsApp
       email
       bedRooms
       area
       condition
       handoverDt
       goldenVisa
   } 
  }
}
`

export default IndexPage

