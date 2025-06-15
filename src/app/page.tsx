import { data } from "@/mock/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center gap-6 lg:gap-8 items-center px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-10 lg:py-12 ">
        <span className="font-armBoloragir text-sm sm:text-xl text-center">
          {data.invitationText}
        </span>
        <span className="font-armBoloragir text-sm sm:text-xl">
          Սպասում ենք Ձեզ մեր դստեր
        </span>
        <h1 className="font-allegro text-4xl leading-12 -mt-3 text-[#c1880e] sm:text-5xl sm:leading-16 md:text-6xl md:leading-24">
          {data.daughterName}
        </h1>
        <h1 className="font-armBoloragir text-sm font-bold sm:text-xl">
          Սուրբ մկրտությանը
        </h1>
        <h1 className="font-allegro text-4xl leading-12 -mt-3 text-[#c1880e] sm:text-5xl sm:leading-16 md:text-6xl">
          {data.baptismDate}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 pt-10 sm:py-6 md:py-10 lg:py-12">
        <span className="text-2xl leading-9 font-armBoloragir font-medium sm:text-3xl md:text-4xl md:leading-10">
          Սպասում ենք Ձեզ
        </span>
        <div className=" w-full max-w-[400px] md:max-w-[450px]">
          <div className="flex items-center justify-center">
            <Image
              src="/icons/church.svg"
              alt="church"
              width={60}
              height={60}
              className="sm:w-[100px] md:w-[120px]"
            />
            <div className="flex flex-col ml-4 w-[200px] sm:w-[300px]">
              <span className="text-sm font-armBoloragir sm:text-xl">
                {data.churchTime}
              </span>
              <span className="text-sm font-armBoloragir sm:text-xl text-nowrap">
                {data.church}
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/icons/xnjujq.svg"
              alt="restaurant"
              width={60}
              height={60}
              className="sm:w-[100px] md:w-[120px]"
            />
            <div className="flex flex-col items-start ml-4 w-[200px] sm:w-[300px]">
              <span className="text-sm font-armBoloragir sm:text-xl">
                {data.restaurantTime}
              </span>
              <span className="text-sm font-armBoloragir sm:text-xl text-nowrap">
                {data.restaurant}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-3 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 pt-10 sm:py-6 md:py-10 lg:py-12">
        <span className="text-2xl text-center font-armBoloragir">
          {data.church}
        </span>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={data.churchImage}
            alt="church"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        <Link
          target="_blank"
          href="https://yandex.com/maps/-/CHWUrP7-"
          className="flex justify-center items-center font-armBoloragir border rounded-2xl px-4 py-2"
        >
          Ինչպես հասնել
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center gap-3 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 pt-10 sm:py-6 md:py-10 lg:py-12">
        <span className="text-2xl text-center font-armBoloragir">
          {data.restaurant}
        </span>

        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={data.restaurantImage}
            alt="church"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>

        <Link
          target="_blank"
          href="https://yandex.com/maps/-/CHWUrP7-"
          className="flex justify-center items-center font-armBoloragir border rounded-2xl px-4 py-2"
        >
          Ինչպես հասնել
        </Link>
      </div>

      <div className=" flex flex-col justify-center items-center gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-10 lg:py-12">
        <span className="text-2xl leading-14 font-armBoloragir font-medium sm:text-3xl md:text-4xl md:leading-10">
          Սիրով՝
        </span>
        <h1 className="font-allegro text-4xl leading-[160%] text-[#c1880e] sm:text-5xl md:text-6xl">
          {data.clientName}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-8 pt-4 sm:pt-6 md:pt-10 lg:pt-12">
        {data.images.map((item) => {
          return (
            <Image
              key={item.id}
              src={item.imageUrl}
              width={500}
              height={200}
              alt="image"
              className={`w-full`}
            />
          );
        })}
      </div>
    </div>
  );
}
