import Image from "next/image"
export default function Ssection(){
    return(
        <div>
             <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-center">
                    <p className="text-[#396653] font-bold">정보 비대칭을 해소하는 맞춤 정부 보조금 알림 서비스</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">최신화된 정부보조금</h1>
                    <p className="text-[#396653]">
                    사용자의 지역, 작물, 직업군등의 개인화된 특징을 바탕으로 최신화된 정부 보조금 및 사업화 지원혜택 등을 앱 내 푸시 알림을 제공하여 숲인원에서 간편하게 확인할 수 있습니다.
                    </p>
                </div>
                <Image src='/alert.png' alt="laptop" width={400} height={400} className="w-[400px] mx-auto my-4 image-container"/>
            </div>
        </div>
        </div>
    )
}