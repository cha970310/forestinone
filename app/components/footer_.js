'use client'
import React from "react"
import {FaDribbbleSquare, FaFacebookSquare,FaGithubSquare,FaInstagram,FaTwitterSquare} from 'react-icons/fa'
export default function Footer(){
    return(
        <div className="max-w-[1240px] bg-white mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8  text-[#396653]" >
            <div>
            <h1 className="w-full text-3xl font-bold text-[#396653]">숲인원</h1>
            <p className="py-4">숲인원에서 모든 것을 경험해보세요.</p>
            <div className="flex justify-between my-6 md:w-[75%]">
                
            <FaDribbbleSquare size={30}/>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            </div>
            </div>
            <div className="lg:col-span-2 flex justify-between">
                <div>
                    <h6 className="font-medium text-[#396653]">홈</h6>
                    <ul>
                        <li className="py-2 text-sm">홈</li>
                        <li className="py-2 text-sm">홈</li>
                        <li className="py-2 text-sm">홈</li>
                        <li className="py-2 text-sm">홈</li>
                        <li className="py-2 text-sm">홈</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-medium text-[#396653]">다운로드</h6>
                    {/* <ul>
                        <li className="py-2 text-sm">다운로드</li>
                        <li className="py-2 text-sm">다운로드</li>
                        <li className="py-2 text-sm">다운로드</li>
                        <li className="py-2 text-sm">다운로드</li>
                        <li className="py-2 text-sm">다운로드</li>
                    </ul> */}
                </div>
                <div>
                    <h6 className="font-medium text-[#396653]">커뮤니티</h6>
                    {/* <ul>
                        <li className="py-2 text-sm">커뮤니티</li>
                        <li className="py-2 text-sm">커뮤니티</li>
                        <li className="py-2 text-sm">커뮤니티</li>
                        <li className="py-2 text-sm">커뮤니티</li>
                        <li className="py-2 text-sm">커뮤니티</li>
                    </ul> */}
                </div>
                <div>
                    <h6 className="font-medium text-[#396653]">블로그</h6>
                    {/* <ul>
                        <li className="py-2 text-sm">블로그</li>
                        <li className="py-2 text-sm">블로그</li>
                        <li className="py-2 text-sm">블로그</li>
                        <li className="py-2 text-sm">블로그</li>
                        <li className="py-2 text-sm">블로그</li>
                    </ul> */}
                </div>
            </div>
        </div>
    )
}