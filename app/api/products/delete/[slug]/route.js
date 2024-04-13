import { db } from "@/app/_libs/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  const { slug } = params;
  const docRef = doc(db, "products", slug);
  let success;
  await deleteDoc(docRef)
    .then(() => {
      success = true;
    })
    .catch((error) => {
      console.log(error);
    });
  if (success) return NextResponse.json({ success: true });
  else return NextResponse.json({ success: false });
}
