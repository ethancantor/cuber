import prisma from "@/prisma"
import { TitleFont } from "./fonts";
import Image from "next/image";

export default async function Home(){

  const cards = await prisma.cards.findMany({ distinct: 'oracle_id', orderBy: [{ cmc: 'desc'}], take: 500 })

  return(
    <div className="w-full h-screen flex justify-center items-center text-2xl flex-col gap-1">
      <span className={`motion-preset-confetti text-6xl ${TitleFont.className}`}>Hey</span> 
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full h-full">
        { cards.map((card, idx) => {
          return <Image src={card.image_uris?.border_crop || ''} key={idx} alt={card.name} width={100} height={100} className="w-full h-full"/>
          }
        )}
      </div>
    </div>
  )
}