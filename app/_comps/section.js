import { Card, CardBody, CardHeader } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function Section({ label, data }) {
  return (
    <div className="w-full p-4 flex flex-col gap-6 items-center justify-center">
      <label className="max-w-[56rem] w-full">{label}</label>
      <div className="max-w-[56rem] w-full grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12 md:gap-y-24">
        {data?.map((item) => (
          <Link key={item.id} href={`/product/${item.id}`} className="w-full min-w-48 h-96 flex-auto">
            <Card className="shadow-zinc-600 shadow-lg hover:shadow-zinc-950 hover:-translate-y-2 transition-all">
              <CardBody>
                <img
                  alt="watch rolex luxery high-class"
                  src={item.img}
                  className="w-full h-72 p-4 object-contain rounded-xl"
                />
              </CardBody>
              <CardHeader className="flex flex-col justify-between">
                <p>{item.title}</p>
                <small>{item.price} egp</small>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
