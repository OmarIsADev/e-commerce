"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export default function Page() {
  const [products, setProducts] = useState();
  const [img, setImg] = useState();

  useEffect(() => {
    fetch("/api/products/all")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const newProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
        price: e.target.price.value,
      })
    );
    // for (let i = 0; i < imgs.length; i++) {
    //   formData.append("imgs[]", imgs[i]);
    // }
    formData.append("img", e.target.img.files[0]);
    fetch("/api/products/add", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());
  };

  return (
    <div className="flex flex-col p-4">
      <label>Products</label>
      <h1>Add product</h1>
      <form onSubmit={newProduct} className="grid grid-cols-2 gap-2">
        <input
          className="w-full border-b-2 border-b-black"
          placeholder="title"
          type="text"
          name="title"
          required
        />
        <input
          className="w-full border-b-2 border-b-black"
          placeholder="price"
          type="number"
          min="0"
          name="price"
          required
        />
        <textarea
          className="w-full border-2 border-black col-span-2"
          placeholder="description"
          type="text"
          name="description"
          required
        />
        <button className="relative h-auto flex items-center justify-center">
          <input
            type="file"
            accept="image/*"
            name="img"
            className="w-full h-full opacity-0 absolute top-0 left-0"
            onChange={(e) => setImg(e.target.files[0])}
          />
          <span className="bg-black text-white text-center py-2 px-4 rounded-md">
          upload img
          </span>
        </button>
        {img && <img className="h-24" src={URL.createObjectURL(img)} />}
        <div className="col-span-2 flex justify-center">
        <input type="submit" value="submit" className="bg-black text-white w-full max-w-96 py-2 px-4 rounded-md" />
        </div>
      </form>
      <h1>Manage products</h1>
      <div className="flex flex-col">
        {products?.map((product) => (
          <div
            className="bg-zinc-100 p-2 rounded-md flex flex-row gap-2 justify-between"
            key={product.id}
          >
            <img src={product.img} className="w-24" />
            <div className="flex flex-col w-full">
              <h1>{product.id}</h1>
              <h1>{product.title}</h1>
              <h1>{product.description}</h1>
            </div>
            <div className="flex flex-col gap-4 justify-center">
              <Button color="success">Edit</Button>
              <Button
                color="danger"
                onClick={async () =>
                  await fetch(`/api/products/delete/${product.id}`, {
                    method: "DELETE",
                  })
                }
              >
                delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
