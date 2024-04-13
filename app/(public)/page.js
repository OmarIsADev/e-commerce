"use client";
import React, { useEffect, useRef, useState } from "react";
import Section from "../_comps/section";
import wallpaper from "@/public/wallpaper.jpg";
import Image from "next/image";

export default function Page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/api/products/all")
      .then((res) => res.json())
      .then((data) => setData(data));
    }, []);

  const sections = useRef(null);
  return (
    <div>
      <div className="w-full relative min-h-[70vh] from-transparent bg-gradient-to-b to-white flex items-center justify-center">
        <Image
          alt="wallpaper watch"
          src={wallpaper}
          className="min-h-[70vh] object-cover w-screen h-full absolute z-[-1]"
        />
        <div className="relative right-10 flex flex-col gap-4 max-w-7xl w-full ">
          <h1 className="text-black text-6xl font-bold">مجموعة اكسسوارات</h1>
          <a
            onClick={() =>
              sections.current.scrollIntoView({ behavior: "smooth" })
            }
            className="text-black bg-[#52f24c] w-fit h-fit py-2 px-4 text-3xl cursor-pointer"
          >
            اشتري الآن
          </a>
        </div>
      </div>
      <div ref={sections} id="sections">
        <Section label="ساعات" data={data} />
      </div>
    </div>
  );
}
