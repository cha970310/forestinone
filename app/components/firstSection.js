import Image from "next/image"
export default function Fsection(){
    return (
        <div className="w-full bg-gray-100 py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <Image src='/memo.jpeg' alt="laptop" width={500} height={500} className="w-[500px] mx-auto my-4"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#396653] font-bold">숲인원에서 경험할 수 있습니다.</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">영림일지(영농일지)</h1>
                    <p className="text-[#396653]"> 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다.</p>
                    <button className="border-2 border-[#396653] bg-white w-[200px] rounded-md font-medium my-4 md:mx-0 mx-auto py-3 text-[#396653] mt-10">시작하기</button>
                </div>
            </div>
        </div>
    )
}