"use client";
import React, { useRef } from "react";
import Section from "../_comps/section";
import wallpaper from "@/public/wallpaper.jpg";
import Image from "next/image";

const img = "https://m.media-amazon.com/images/I/71yEVu1OiKL._AC_SL1500_.jpg";

export default function Page() {
  const sections = useRef(null);
  return (
    <div>
      <div className="w-full relative min-h-[70vh] from-transparent bg-gradient-to-b to-white flex items-center justify-center">
        <Image
          alt="wallpaper watch"
          src={wallpaper}
          className="min-h-[70vh] object-cover w-screen h-full absolute z-[-1]"
        />
        <div className="relative left-16 flex flex-col gap-4 max-w-7xl w-full ">
          <h1 className="text-black text-6xl font-bold">watch collection</h1>
          <a
            onClick={() =>
              sections.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-black bg-[#52f24c] w-fit h-fit py-2 px-4 text-3xl cursor-pointer"
          >
            shop now
          </a>
        </div>
      </div>
      <div ref={sections} id="sections">
        <Section
          label="Watches"
          data={[
            { id: 1, title: "watch3", img: "https://cdn.discordapp.com/attachments/964264540076404766/1226267744752636005/e1bd8c80-9b80-4545-b15b-8d27e1c1225a.png?ex=662425d5&is=6611b0d5&hm=2c7d58067fbb0eac4198172d438be1eb3bb0e1a5724dd3a137fd688595dc4740&", price: 30 },
            { id: 2, title: "watch2", img: "https://cdn.discordapp.com/attachments/964264540076404766/1226267744207503520/30a86cf1-418d-4c86-a1df-ae41465549e9.png?ex=662425d5&is=6611b0d5&hm=47f8c2bad86f6ce90b9605f70ecd0310348183cecb75ad5b01d0a1957effc785&", price: 30 },
            { id: 3, title: "watch4", img: "https://cdn.discordapp.com/attachments/964264540076404766/1226267743733678230/cffec0ff-93d4-4800-853a-5854e4804466.png?ex=662425d5&is=6611b0d5&hm=9d63dc7ca313b2e43bfb621ec3d8727d2482765f3236951ea53e1bacb383708e&", price: 10 },
            { id: 3, title: "watch5", img: "https://cdn.discordapp.com/attachments/964264540076404766/1226267743150411896/0daf7f87-99e4-4867-a579-f38dfa182294.png?ex=662425d4&is=6611b0d4&hm=775c7c1d257c91746fcc413fe24cd63bb9acbd1b292c06d5ed388af11eafc5d6&", price: 10 },
          ]}
        />
      </div>
    </div>
  );
}
