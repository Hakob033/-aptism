import { data } from "@/mock/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="flex flex-col justify-center gap-6 lg:gap-8 items-center px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-10 lg:py-12 ">
        <span className="font-armBoloragir  text-sm text-center">
          {data.invitationText}
        </span>
        <span className="font-armBoloragir text-sm">
          Սպասում ենք Ձեզ մեր դստեր
        </span>
        <h1 className="font-allegro text-3xl leading-12 -mt-3 text-[#ffdc64]">
          {data.daughterName}
        </h1>
        <h1 className="font-armBoloragir text-sm font-bold">
          Սուրբ մկրտությանը
        </h1>
        <h1 className="font-allegro text-3xl leading-12 -mt-3 text-[#ffdc64]">
          {data.baptismDate}
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 pt-10 sm:py-6 md:py-10 lg:py-12">
        <span>Սպասում ենք Ձեզ</span>
        <div className="flex items-center w-full max-w-[400px]">
          <Image
            src="/icons/church.svg"
            alt="church"
            width={100}
            height={100}
          />
          <div className="flex flex-col items-start ml-4">
            <span>{data.churchTime}</span>
            <span>{data.church}</span>
          </div>
        </div>
        <div className="flex items-center w-full max-w-[400px]">
          <Image
            src="/icons/xnjujq.svg"
            alt="restaurant"
            width={100}
            height={100}
          />
          <div className="flex flex-col ml-4 justify-center">
            <span>{data.restaurantTime}</span>
            <span>{data.restaurant}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 pt-10 sm:py-6 md:py-10 lg:py-12">
        <span className="text-2xl text-center font-armBoloragir">
          {data.church}
        </span>
        <Image
          src={data.churchImage}
          alt="church"
          width={100}
          height={400}
          className="w-full rounded-2xl"
        />
        <Link
          href="https://yandex.com/maps/-/CHWUrP7-"
          className="flex justify-center items-center font-armBoloragir border rounded-2xl px-4 py-2"
        >
          Ինչպես հասնել
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center gap-5 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 pt-10 sm:py-6 md:py-10 lg:py-12">
        <span className="text-2xl text-center font-armBoloragir">
          {data.restaurant}
        </span>
        <Image
          src={data.restaurantImage}
          alt="church"
          width={100}
          height={400}
          className="w-full rounded-2xl"
        />
        <Link
          href="https://yandex.com/maps/-/CHWUnEj~"
          className="flex justify-center items-center font-armBoloragir border rounded-2xl px-4 py-2"
        >
          Ինչպես հասնել
        </Link>
      </div>
      <div className=" flex flex-col justify-center items-center gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 py-4 sm:py-6 md:py-10 lg:py-12">
        <span className="font-armBoloragir text-sm font-bold">Սիրով՝</span>
        <h1 className="font-allegro text-3xl leading-12 -mt-3 text-[#ffdc64]">
          {data.clientName}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:gap-8 py-4 sm:py-6 md:py-10 lg:py-12">
        {data.images.map((item, i) => {
          return (
            <Image
              key={item.id}
              src={item.imageUrl}
              width={500}
              height={200}
              alt="image"
              className={`w-full ${
                item.id === 3 ? "col-start-1 col-end-3" : ""
              }`}
            />
          );
        })}
      </div>
    </div>
  );
}
