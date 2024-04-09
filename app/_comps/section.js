import React from "react";
import Product from "./product";

export default function Section({ label, data }) {
  return (
    <div className="w-full p-4 flex flex-col gap-6 items-center justify-center">
      <label className="max-w-6xl w-full">{label}</label>
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-24">
        {data?.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
