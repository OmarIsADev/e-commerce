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
    <Table isStriped aria-label="Example static collection table">
      <TableHeader>
        <TableColumn className="w-full">NAME</TableColumn>
        <TableColumn className="w-fit">ACTION</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Products</TableCell>
          <TableCell>
            <Link href="/admin/products" className="underline">manage</Link>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

function Section({ href, action, label }) {
  return (
    <>
      <TableCell>{label}</TableCell>
      <TableCell>
        <Link href={href}>{action}</Link>
      </TableCell>
    </>
  );
}
