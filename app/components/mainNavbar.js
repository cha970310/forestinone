'use client'
import React,{useState,useEffect} from "react"
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"
export default function Navbar(){
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    

    const [nav,setNav] =useState(true)
    const handleNav = ()=>{
        setNav(!nav)
    }
    
    return( mounted && ( 
        //  mb-16 bg-auto bg-no-repeat
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-forest border-b-2 border-[#396653]">

        <h1 className="w-[30%] text-2xl font-bold text-[#396653]">숲인원</h1>
        <ul className="hidden md:flex">
            <li className="p-4">홈</li>
            <li className="p-4">다운로드</li>
            <li className="p-4">커뮤니티</li>
            <li className="p-4">블로그</li>
            <li className="p-4">문의하기</li>
        </ul>
        <div onClick={handleNav} className="block md:hidden ">
            {
             !nav?<AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>
            }
        
        </div>

        <div className={ !nav? 'fixed left-0 top-0 w-[80%] h-[100%] border-r border-r-[#396653] bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className="w-full text-2xl font-bold text-[#396653] m-4">숲인원</h1>
        <ul className="uppercase p-4">
            <li className="p-4 border-b border-[#396653]">홈</li>
            <li className="p-4 border-b border-[#396653]">다운로드</li>
            <li className="p-4 border-b border-[#396653]">커뮤니티</li>
            <li className="p-4 border-b border-[#396653]">블로그</li>
            <li className="p-4 ">문의하기</li>
        </ul>

        </div>
        
        </div>
    ))
}