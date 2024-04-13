"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

export default function Page() {
  const [products, setProducts] = useState();
//   const [imgs, setImgs] = useState([]);

  useEffect(() => {
    fetch("/api/products/all")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const newProduct = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("data", JSON.stringify({
      title: e.target.title.value,
      description: e.target.description.value,
      price: e.target.price.value,
    }));
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
    <div>
      <label>Products</label>
      <h1>Add product</h1>
      <form onSubmit={newProduct}>
        <input type="text" name="title" required/>
        <input type="text" name="description" required/>
        <input type="number" min="0" name="price" required/>
        <input type="file" accept="image/*" name="img" />
        <input type="submit" value="submit" />
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
