import { db } from "@/app/_libs/firebase"
import { doc, getDoc } from "firebase/firestore"
import { NextResponse } from "next/server"

export async function GET(request, { params }) {
    const { slug } = params
    const docRef = doc(db, "products", slug)
    const docSnap = await getDoc(docRef)
    
    if (docSnap.exists()) {
        return NextResponse.json({ id: docSnap.id, ...docSnap.data() })
    }
    else {
        return NextResponse.json({ data: null })
    }
}