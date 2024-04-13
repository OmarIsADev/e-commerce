"use client";
import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Link from "next/link";
export default function Page() {
  return (
    <div className="w-full h-[95vw] p-4 flex flex-col gap-6 items-center justify-center">
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="w-full">NAME</TableColumn>
        <TableColumn className="w-fit">ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Products</TableCell>
          <TableCell>
            <Link href="/admin/products" className="underline">
              manage
            </Link>
          </TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Orders</TableCell>
          <TableCell>
            <Link href="/admin/orders" className="underline">
              manage
            </Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
    </div>
  );
}
