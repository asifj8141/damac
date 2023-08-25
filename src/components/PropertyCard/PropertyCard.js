import React from 'react'
import { Link } from "gatsby"
import { cuurencyFormatter } from '../../utils/utils'
function PropertyCard({el}) {
  return (
    <div key={el.id}
    className="mx-1 mt-6 relative overflow-hidden flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0">
        
        {
            el?.goldenVisa &&
            <div className="absolute right-0 top-0 h-16 w-16">
        
                <div className="absolute left-[-10px] top-[15px] w-[100px] transform rotate-45 bg-damac text-center text-white py-1 text-xs">Golden Visa</div>
        
            </div>
        }
    <Link to={`/property/${el.slug}`}>
            <div className="w-full h-48 bg-cover rounded-t-lg" style={{backgroundPosition:'center', backgroundImage:`url(${el.featuredImage})`}}></div>
    </Link>
    <div className="p-3">
        <h5 className="mb-2 text-xs leading-tight text-neutral-800 ">
          {el.title}
        </h5>
        <p className="mb-1 font-bold leading-tight text-neutral-800 ">
        {cuurencyFormatter(el.price)}
        </p>
        <p className="text-xs text-neutral-600">
          {el.location}
        </p>
    </div>

    <div className="p-3 py-0 grid grid-cols-2 gap-4 text-sm">
      <div><i className="las la-bed font-bold"></i> {el.bedRooms} </div>
      <div><i className="las la-home"></i> {el.area} sq. ft</div>
      <div><i className="las la-toolbox"></i> {el.condition}</div>
      <div><i className="las la-people-carry"></i> {el.handoverDt}</div>
    </div>

    <div className="p-3 mt-3 flex flex-row justify-between text-xs gap-2">
      {
        el?.phone &&
        <a href={`tel:${el.phone}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-damac rounded shadow flex-1">
          <span className="las la-phone mr-1 text-damac"></span>
          Call
        </a>
      }
      {
        el?.email && 
        <a href={`mailto://${el.email}`} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-damac rounded shadow  inline-flex items-center flex-1">
          <span className="las la-envelope mr-1 text-damac"></span>
            Email
        </a>
      }
      {
        el?.whatsApp &&
        <a href={`https://wa.me/${el.whatsApp}?text=I'm%20interested%20in%20your%20property`} className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded shadow inline-flex items-center flex-1">
          <span className="lab la-whatsapp mr-1 "></span> Whatapp
        </a>
      }
      
    </div>
    <div className="p-3 pt-0 flex flex-row justify-between text-xs gap-2">
        <button className="bg-damac hover:bg-stone-500 text-white font-semibold py-2 px-2 rounded shadow flex-1">
            <span className="las la-money-bill mr-1 "></span>
            Pay Online
        </button>  
    </div>
</div>
  )
}

export default PropertyCard