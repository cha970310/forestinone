'use client'
import React from "react"
import Typed from "react-typed"
export default function Hero(){

    return(
        <div className="text-black h-[600px]">
            <div className="max-w-[800px] sm:mt-[5px] md:mt-[20px] w-full h-full mx-auto text-center flex flex-col justify-center">
                <p className=" text-xl text-forest font-bold p-2">내 손안의 모든 숲</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">숲인원에서 경험해보세요</h1>
                <div className="flex justify-center items-center">
                <Typed className="md:text-5xl sm-text-4xl text-xl font-bold pl-3 py-3" strings={['귀산촌 정보도','직거래 장터도','최신 정부보조금도']} typeSpeed={100} backSpeed={0} startDelay={1000} backDelay={500} loop/>
                    <p className="md:text-5xl sm:text-4xl text-xl font-bold text-[#396653]"> 
                        숲인원</p> 
                        
                </div>
                <p className="md:text-2xl  text-xl font-bold text-gray-500">숲인원에서는 모든 것을 경험할 수 있습니다.</p>
                <button className="border-2 border-[#396653] bg-white w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-[#396653] mt-10">시작하기</button>
            </div>
        </div>
    )
}