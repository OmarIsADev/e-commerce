import { NextResponse } from "next/server"
import { db } from "@/app/_libs/firebase"
import { getDocs, collection } from "firebase/firestore"

export async function GET() {
    const snapshot = await getDocs(collection(db, "products"))
    const data = []
    snapshot.forEach(doc => {
        data.push({id: doc.id, ...doc.data()})
    })
    
    return NextResponse.json(data)
}