import Image from "next/image"
export default function Fsection(){
    return (
        <div className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <Image src='/memo.png' alt="laptop" width={400} height={400} className="w-[400px] mx-auto my-4 image-container"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#396653] font-bold">효율적인 작물 재배를 위한 개인화된 영농일지 서비스</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">영림일지(영농일지)</h1>
                    <p className="text-[#396653]">
                    
                    영농일지 작성 시 재배작물을 검색할 수 있으며 농작업일정정보, 품종정보등의 공공데이터를 활용하여 농작업에 대한 정보를 제공하며 농작업, 메모, 영농장부 및 사진을 업로드하여 작성할 수 있습니다.

                    </p>
                    <button className="border-2 border-[#396653] bg-white w-[200px] rounded-md font-medium my-4 md:mx-0 mx-auto py-3 text-[#396653] mt-10">시작하기</button>
                </div>
            </div>
        </div>
    )
}