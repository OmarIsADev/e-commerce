"use client";
import React, { useEffect, useState } from "react";
import {Spinner} from "@nextui-org/react";
import Link from "next/link";

export default function Page({ params }) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (params.slug) {
      fetch(`/api/products/${params.slug}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        });
    }
  }, [params]);

  if (loading) return <div className="flex justify-center"><Spinner color="success"/></div>

  if (!data)
    return (
      <div className="flex items-center justify-center flex-col">
        product not found{" "}
        <Link
          href="/"
          className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#43d93d] transition-all flex-1 text-center"
        >
          back
        </Link>
      </div>
    );

  return (
    <div className="p-12 flex justify-center">
      <div className="flex justify-between items-center gap-8 max-h-80 max-w-5xl h-full md:flex-row flex-col">
        <div className="flex flex-col gap-6 h-full max-w-xl">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <div className="flex flex-col gap-2">
            <p>{data?.description}</p>
            <p className="text-xl font-bold">{data?.price} جنيه</p>
          </div>
          <div className="flex flex-row gap-4">
            <a
              href=""
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#43d93d] transition-all flex-1 text-center"
            >
              أطلب
            </a>
          </div>
          <i className="font-semibold text-right text-red-600">
            طريقة الطلب عن طريق الانستا الخاص بنا
          </i>
        </div>
        <img
          src={data?.img}
          className="w-96 h-96 object-cover rounded-md shadow-md p-0"
        />
      </div>
    </div>
  );
}1