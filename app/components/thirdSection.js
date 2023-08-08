import Image from "next/image"
export default function Tsection(){
    return(
        <div className="w-full bg-gray-100 py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <Image src='/market.png' alt="laptop" width={400} height={400} className="w-[400px] mx-auto my-4 image-container"/>
            <div className="flex flex-col justify-center">
                <p className="text-[#396653] font-bold">중간 유통마진이 빠진 직거래 장터 서비스</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">직거래 장터</h1>
                <p className="text-[#396653]">
                임산물 뿐만 아니라 농기계, 종자, 캠핑, 등산용품 등 다양한 물품들을 거래할 수 있으며 이웃 기능을 통해 판매자와 구매자의 지속적인 거래가 가능하도록 하였습니다.
                </p>
                <button className="border-2 border-[#396653] bg-white w-[200px] rounded-md font-medium my-4 md:mx-0 mx-auto py-3 text-[#396653] mt-10">시작하기</button>
            </div>
        </div>
    </div>)
}