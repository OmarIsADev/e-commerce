"use client";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (params.slug) {
      fetch(`/api/${params.slug}`)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [params]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (cart && cart[0]) {
      // id = cart.length + 1;
      console.log(JSON.stringify(cart))
      cart = [cart[0], { product_id: params?.slug, quantity }];
    }
    else {
      cart = [{ product_id: params?.slug, quantity }];
    }

    localStorage.setItem("cart", JSON.stringify({...cart}));
  };

  return (
    <div className="p-12 flex justify-center">
      <div className="flex justify-between items-center gap-8 max-h-80 max-w-5xl h-full md:flex-row flex-col">
        <img
          src="https://cdn.discordapp.com/attachments/964264540076404766/1226267744752636005/e1bd8c80-9b80-4545-b15b-8d27e1c1225a.png?ex=662425d5&is=6611b0d5&hm=2c7d58067fbb0eac4198172d438be1eb3bb0e1a5724dd3a137fd688595dc4740&"
          className="w-96 h-96 object-cover rounded-md shadow-md p-0"
        />
        <div className="flex flex-col gap-6 h-full max-w-xl">
          <h1 className="text-3xl font-bold">{data?.title}</h1>
          <div className="flex flex-col gap-2">
            <p>{data?.description}</p>
            <p className="text-xl font-bold">{data?.price} egp</p>
          </div>
          <div className="flex flex-row gap-4">
            <button
              onClick={addToCart}
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-[#43d93d] transition-all flex-1"
            >
              Add to cart
            </button>
            <div className="grid grid-cols-3 items-center gap-0">
              <button className="bg-black text-white w-6 h-full border border-black rounded-s hover:bg-[#43d93d] transition-all" onClick={() => quantity > 1 && setQuantity(parseInt(quantity) - 1)}>-</button>
              <span className="text-center text-lg border border-y-black h-full w-6 py-1">{quantity}</span>
              <button className="bg-black text-white w-6 h-full border border-black rounded-e hover:bg-[#43d93d] transition-all" onClick={() => setQuantity(parseInt(quantity) + 1)}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
