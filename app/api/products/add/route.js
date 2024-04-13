import { NextResponse } from "next/server";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { app, db } from "@/app/_libs/firebase";

const storage = getStorage(app);

export async function POST(request) {
  const formData = await request.formData();
  const data = JSON.parse(formData.get("data"));
  const img = formData.get("img");

  let imgUrl;

  const storageRef = ref(storage, `products/${crypto.randomUUID()}`);
  await uploadBytes(storageRef, img);
  await getDownloadURL(storageRef).then((url) => {
    imgUrl = url;
    });
  let success;
  await addDoc(collection(db, "products"), {
    ...data,
    img: imgUrl
  })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      success = true;
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      success = false;
    });

  return NextResponse.json({ success });
}
