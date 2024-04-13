import { NextResponse } from "next/server"
import { db } from "@/app/_libs/firebase"
import { getDocs, collection } from "firebase/firestore"

export async function GET() {
    const snapshot = await getDocs(collection(db, "products"))
    const data = []
    snapshot.forEach(doc => {
        data.push({id: doc.id, ...doc.data()})
    })

    console.log(process.env.FIREBASE_API_KEY)
    
    return NextResponse.json(data)
}