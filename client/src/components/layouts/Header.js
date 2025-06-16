import { useState, useEffect } from 'react'; 
import logo from '../../asset/logo.png'
import logo1 from '../../asset/logo1.png'
import * as React from 'react';
import { useCookies } from 'react-cookie'
import {Link, useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
const token = localStorage.getItem('token')

const Header = () => {
  const [isLogedIn , setIsLogrdIn] = useState(false)
  const [userprofile , setUserProfile] = useState([])
  const [refreshPage, setRefreshPage] = useState(false);
  const navigate = useNavigate()

  const logout = async()=>{
    try{
      const res = await  fetch('https://travel-planning-website-fyp-server.onrender.com/api/vi/users/logout',{
        method:"GET",
        headers:{
          "Content-Type": "application/json",
        },
      })
      if(res.ok){
        localStorage.removeItem('token')
        setIsLogrdIn(false);
        toast.success("logout seccuesfully")
        navigate('/')
      }else{
        toast.error("logout failed")
      }
    }catch(error){
      console.error('Error:', error);
            toast.error('Error: ' + error.message);
    }
  }
  //user data
  const curent_user = async()=>{
    try{
      const res  = await fetch('https://travel-planning-website-fyp-server.onrender.com/api/vi/users/me',{
      method:"GET",
      headers:{
        'Authorization': `Bearer ${token}`
      },
      body:JSON.stringify()

    })
    if(res.ok){
      const info_user =  await res.json()
      setUserProfile(info_user.data.data)
      //console.log(info_user) 
    }else{
      setIsLogrdIn(false);
      toast.error("Failed to fetch user data");
    }
    }catch(eror){
      setIsLogrdIn(false);
      console.error('Error:', eror);
      toast.error('Error: ' + eror.message);
    }
  }
  useEffect(()=>{
    setRefreshPage(false)
    if(token){
      setIsLogrdIn(true)
      curent_user()
    }else{
      setIsLogrdIn(false)
    }
  },[])

  const Sign_Up_page = ()=>{
    setRefreshPage(true)
    navigate('/login')
  } 
  return (
    <>
<header className='flex flex-wrap shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50'>
  <div className='flex flex-wrap items-center justify-between gap-5 w-full'>
    <a href="/"><img  src={logo1} alt="logo" className="h-20 w-32 max-w-full align-middle border-none"/> </a>
    <div id="collapseMenu"
      className='max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50'>
      <button id="toggleClose" className='lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3'>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"></path>
        </svg>
      </button>  


      <ul
        className='lg:flex gap-x-5 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
        <li className='mb-6 hidden max-lg:block'>
          <a href="/"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-36' />
          </a>
        </li>
        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
          <Link  to='/' className='hover:text-[#007bff] text-[#007bff] block font-semibold text-[15px]'>Home</Link>
        </li>
        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
          <Link to='/about' className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>About</Link>
        </li>
        <li className='max-lg:border-b border-gray-300 max-lg:py-3 px-3'>
          <Link to="/tour"
            className='hover:text-[#007bff] text-gray-500 block font-semibold text-[15px]'>Toure</Link>
        </li>
      </ul>
    </div>

    <div className='flex max-lg:ml-auto space-x-3'>
    {isLogedIn &&(
      <>
      <div className="flex items-center mr-4">
          <img src={`https://travel-planning-website-fyp-server.onrender.com/${userprofile.phote}`} alt="User Avatar" className="w-8 h-8 rounded-full mr-2" />
          <span className="font-semibold">{userprofile.name}</span>
      </div>

      <button onClick={logout} className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff]
       bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>
        Logout 
        </button>
      </>
    )}
      {!isLogedIn &&(
        <>
        <button  onClick={Sign_Up_page} className='px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#007bff]
       bg-[#007bff] transition-all ease-in-out duration-300 hover:bg-transparent hover:text-[#007bff]'>
        Register 
        </button>
        </>
      )}


    </div>
  </div>
</header>
    </>
  )
}

export default Header
