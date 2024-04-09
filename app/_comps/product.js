import React from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";

export default function Product({ item }) {
  return (
    <Link
      key={item.id}
      href={`/product/${item.id}`}
      className="w-full min-w-48 h-96 flex-auto"
    >
      <Card className="shadow-zinc-600 shadow-lg hover:shadow-zinc-950 hover:-translate-y-2 transition-all">
        <CardBody>
          <img
            alt="watch rolex luxery high-class"
            src={item.img}
            className="w-full h-80 object-cover rounded-xl"
          />
        </CardBody>
        <CardHeader className="flex flex-col justify-between">
          <p>{item.title}</p>
          <small>{item.price} egp</small>
        </CardHeader>
      </Card>
    </Link>
  );
}
