import React, { useEffect, useState } from 'react'
import Layouts from '../components/layouts/Layouts'
import { Link, useNavigate } from 'react-router-dom'

import img_1 from '../asset/mg1.jpg'
import img_2 from '../asset/mg2.jpg'
import img_3 from '../asset/mg3.jpg'
import img_4 from '../asset/mg3.jpg'
import g1 from '../asset/g1.jpg'
import g2 from '../asset/g2.jpg'
import g3 from '../asset/g3.jpg'
import g4 from '../asset/g4.jpg'
import g5 from '../asset/g5.jpg'
import g6 from '../asset/g6.jpg'
import g7 from '../asset/g7.jpg'
import g8 from '../asset/g8.jpg'
import g9 from '../asset/g9.jpg'
import g10 from '../asset/g10.jpg'
import g11 from '../asset/g11.jpg'
import g12 from '../asset/g12.jpg'
import g13 from '../asset/g13.jpg'
import profile from '../asset/ex.png'
import '../App.css'
const Home = () => {
  const [fTour, setfTour] = useState([])
  const navigate = useNavigate()
  useEffect(()=>{
    FeatureTour()

  },[])
//Fetech Feature Tour data from API 
  const FeatureTour = async()=>{
    try{
      const res = await fetch('http://127.0.0.1:8080/api/vi/featuretours', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
      if(res.ok){
        const data = await res.json()
        if(data){
          console.log(data.data.data)
          setfTour(data.data.data)
        }else{
          console.log("Error During Fetech Data")
        }
      }
    }catch(error){
      console.log("Error in fetch data")
    }
  }
  const detailsPage = (id)=>{
    navigate(`/dft/${id}`)
  }
  return (
<Layouts>
 <div className='flex flex-wrap'>
  <div className='basis-1/12'>
  </div>
<div className='basis-10/12 content-center'>
<section className="text-gray-600 body-font">
  <div className="mx-auto flex px-1 py-24 md:flex-row flex-col">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0  text-center">
    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">World Traveling Open the Door
    <br className="hidden lg:inline-block"></br> to  Creating New Memory</h1>
      <p className="mb-8 leading-relaxed">Traveling with loved ones, friends, or even fellow adventurers fosters a bond through shared experiences. The memories created during these journeys become the foundation of lifelong relationships, as you reminisce about the adventures, laughter, and challenges faced together</p>
<div className="flex max-w-screen-md">
  <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <h2 className="text-stone-700 text-xl font-bold">Apply filters</h2>
    <p className="mt-1 text-sm">Use filters to further refine search</p>
    <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-stone-600 text-sm font-medium">Location</label>
        <input type="text" id="name" placeholder="where to you go" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="manufacturer" className="text-stone-600 text-sm font-medium">Distance</label>
        <input type="manufacturer" id="manufacturer" placeholder="cadbery" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="date" className="text-stone-600 text-sm font-medium">Date of Entry</label>
        <input type="date" id="date" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
      </div>

      <div className="flex flex-col">
        <label htmlFor="status" className="text-stone-600 text-sm font-medium">Status</label>

        <select id="status" className="mt-2 block w-full rounded-md border border-gray-200 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
          <option>Dispached Out</option>
          <option>In Warehouse</option>
          <option>Being Brought In</option>
        </select>
      </div>
    </div>

    <div className="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
      <button className="active:scale-95 rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-600 outline-none focus:ring hover:opacity-90">Reset</button>
      <button className="active:scale-95 rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none focus:ring hover:opacity-90">Search</button>
    </div>
  </div>
</div>
    </div>
    <div className="flex flex-wrap w-1/2 pt-20 space-x-6 rounded-lg">
      <div className='h-96 w-64'>
      <img alt="gallery" className=" w-full h-full shadow-lg rounded-3xl max-w-full align-middle border-none" src={img_3}/>
      </div>
      <div className='h-96 w-64 mt-12 '>
        <iframe className='w-full h-full rounded-3xl' src="https://www.youtube.com/embed/JoyKXJdWKOE" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className='h-96 w-64 mt-24'>
      <img alt="gallery" className="w-full h-full object-cover object-center block rounded-3xl" src={img_1}/>
      </div>
      </div>
  </div>
</section>

<section className='text-gray-600 body-font'>
<h1 className='font-serif text-5xl font-bold text-black'>Our Feature Toure</h1>
<div className='grid gap-0 grid-cols-5'> 
{fTour.map((data,index)=>{
  return( 
<div className="bg-white rounded-lg overflow-hidden mt-5 ml-6" key={index}>
<div className='relative' >
                    <img  className=" h-96 w-96"
                        src= {`http://127.0.0.1:8080/img/tours/${data.imageCover}`}
                        alt="Sunset in the mountains"
                        />
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
    
</div> 
<div className="bg-blue-50 p-6">
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">Group</span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
           {data.roome} &bull; Roome / {data.beds} &bull; Beds
          </div>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{data.name}</h4>

        <div className="mt-1">
          <span>${data.price}</span>
          <span className="text-gray-600 text-sm">/ {data.duration}  Days</span>
        </div>
        <div className="mt-2 flex items-end">
            <span className="ml-2 text-gray-600 text-sm">  {data.maxGroupSize} Person</span>
        </div>
        <div className="mt-2 flex items-center">
        <span className="ml-2 text-gray-600 text-sm">{data.description.length > 250 ?  `${data.description.substring(0, 250)}...` : data.description }</span>
        </div>
        <div className='bg-blue-50'>
            <div className='sm:flex sm:justify-between'>
                  <div>
                        <div className="text-lg text-gray-700">
                           <span className="text-gray-900 font-bold">Price Discount {data.price} </span> $ 
                        </div>
                        <div className="flex items-center">
                            <div className="flex">
                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                                <svg className="w-4 h-4 mx-px fill-current text-green-600"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path
                                        d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z">
                                    </path>
                                </svg>
                            </div>
                            <div className="text-gray-600 ml-2 text-sm md:text-base mt-1">
                                16 reviews
                            </div>
                        </div>
                    </div>
              <button  onClick={()=> detailsPage(data._id)}  className="items-end rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
              Details
            </button>
            </div>
        </div>
      </div>
    </div>
       )
})} 
    
    </div>  
  
</section>

<section className="text-gray-600 body-font">
<h1 className='font-serif text-5xl font-bold text-black mt-10'>Experince</h1>
  <div className=" px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div className="w-full sm:p-4 px-4 mb-6">
        <h1 className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
        <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed">Users</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
        <p className="leading-relaxed">Subscribes</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
        <p className="leading-relaxed">Downloads</p>
      </div>
      <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
        <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
        <p className="leading-relaxed">Products</p>
      </div>
    </div>
    <div className="ml-72 rounded-ful"> 
       <img className='w-auto h-auto' src={profile} alt="stats" />
</div>
  </div>
</section>

{/* <section className='text-gray-600 body-font'>
<h1 className='font-serif text-5xl font-bold text-black mb-10'>Vist Our Customer Toure Gallary</h1>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-6">
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g3} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g4} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt=""/>
        </div>
        <div className='transform transition duration-500 hover:scale-105'>
            <img className="h-auto max-w-full rounded-lg" src={g2} alt="" />
        </div>
    </div>
</div>

</section> */}

<section>
  
</section>
<div className='basis-1/12 mt-14'>

  </div> 
</div> 
</div> 
    </Layouts>
  )
}

export default Home
