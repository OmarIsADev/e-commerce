"use client";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [data, setData] = useState();
  useEffect(() => {
    if (params.slug) {
      fetch(`/api/${params.slug}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [params]);

  return (
    <div className="p-12 flex justify-center">
      <div className="flex justify-center items-center gap-8 max-h-80 max-w-6xl h-full">
        <img
          src="https://m.media-amazon.com/images/I/71yEVu1OiKL._AC_SL1500_.jpg"
          className="w-full max-w-96 max-h-96 object-contain border-2 rounded-md border-zinc-600 shadow-md p-2"
        />
        <div className="flex flex-col gap-4 h-full">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <div>
            <p>{data?.description}</p>
            <p>{data?.price} egp</p>
          </div>
          <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#43d93d] transition-all">Order</button>
        </div>
      </div>
    </div>
  );
}
