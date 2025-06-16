import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import Layouts from '../components/layouts/Layouts'
import img_4 from '../asset/mg3.jpg'
import {Link, useNavigate} from 'react-router-dom'
import {useData} from '../components/layouts/DataContext'
const token = localStorage.getItem('token')
const Tour = () => {
    const [tourData , setToureData] = useState([])
    const navigate = useNavigate()
    const {Update_Total_Tour} = useData()
    useEffect(()=>{
        const ToureData = async()=>{
            try{
                const res = await fetch('http://127.0.0.1:8080/api/vi/tours',{
                    method:"GET",
                    headers:{
                        'Authorization': `Bearer ${token}`
                    },
                    body: JSON.stringify()
                })
                if(res.ok){
                    const data = await res.json()
                    setToureData(data.data.tours)
                    Update_Total_Tour(data)
                    //console.log(data.data.tours)
                }else{
                    console.log("res is not ok status")
                }
            }catch(eror){
                console.log("The error is fatch this api")
            }
        }
        ToureData()
    },[Update_Total_Tour])
    const BookingPage = (id)=>{
        if(!token){
        toast.error("Please Login Book Tour!",{
                position:"top-right"
            })
        }else{
            navigate(`/booking/${id}`)
        }
    }
  return (
    <Layouts>
<div className='basis-full'>
<section className="text-gray-600 body-font">
    <div className="basis-full mx-auto">
      <div className="rounded-lg h-64 overflow-hidden"  style={{backgroundImage: `url(${img_4})`}}>
      <h2 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white m-24 text-center"> ALL TOURE </h2>
      </div>
    </div>
<div className='grid gap-0 grid-cols-5 mt-6 ml-8 mr-8 mb-8'>  
    {tourData.map(data=>{
        return(
<div className="bg-white rounded-lg overflow-hidden mt-5 ml-6">
<div className='relative'>
    <Link  to= {`/booking/${data.id}`}>
                    <img className="w-full h-96"
                        src= {`http://127.0.0.1:8080/uploads/toure/${data.imageCover}`}
                        alt="Sunset in the mountains"
                        />
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
    </Link>
    
           <Link to= {`/booking/${data.id}`}>
                    <div
                        className="text-xs absolute top-0 right-0 bg-indigo-600 px-4 py-2 text-white mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        {data.difficulty}
                    </div>
            </Link>
</div> 
<div className="bg-blue-50 p-6">
        <div className="flex items-baseline">
          <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">Group</span>
          <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
            {data.maxGroupSize}  &bull; Person
          </div>
        </div>
        <h4 className="mt-2 font-semibold text-lg leading-tight truncate">{data.name}</h4>

        <div className="mt-1">
          <span>${data.price}</span>
          <span className="text-gray-600 text-sm">/ {data.duration} Days</span>
        </div>
        <div className="mt-2 flex items-end">
            <span className="ml-2 text-gray-600 text-sm">{data.ratingsQuantity} Ratings</span>
        </div>
        <div className="mt-2 flex items-center">
        <span className="ml-2 text-gray-600 text-sm">{data.summary}</span>
        </div>
        <div className='bg-blue-50'>
            <div className='sm:flex sm:justify-between'>
                  <div>
                        <div className="text-lg text-gray-700">
                           <span className="text-gray-900 font-bold">Price Discount </span> $ {data.priceDiscount} 
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
              <button  onClick={()=> BookingPage(data.id)} className="items-end rounded-full bg-blue-600 dark:bg-blue-800 text-white dark:text-white antialiased font-bold hover:bg-blue-800 dark:hover:bg-blue-900 px-4 py-2">
              Book Ticket
            </button>
            </div>
        </div>
      </div>
    </div>
        )
    })}
    <ToastContainer />
    </div>  

</section>
        </div>      
    </Layouts>
  )
}

export default Tour
