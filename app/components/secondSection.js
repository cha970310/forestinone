import Image from "next/image"
export default function Ssection(){
    return(
        <div>
             <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="text-[#396653] font-bold">숲인원에서 경험할 수 있습니다.</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">최신 정부보조금</h1>
                    <p className="text-[#396653]"> 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다. 숲인원에서 경험할 수 있습니다.</p>
                </div>
                <Image src='/alert.jpeg' alt="laptop" width={500} height={500} className="w-[500px] mx-auto my-4"/>
            </div>
        </div>
        </div>
    )
}