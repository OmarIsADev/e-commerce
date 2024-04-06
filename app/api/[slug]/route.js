import { NextResponse } from "next/server"

export async function GET(req, {params}) {
    const slug = params.slug
    console.log(slug)
    return NextResponse.json({title: "watch pretty expensive", price: 399, description: "pretty expensive watch this watch is pretty cool and expensive thats you cant even afford cuz you are broke" ,slug})
}

export async function POST(req, res) {
    const data = await req.body
    console.log(JSON.stringify(data))

    return NextResponse.json(data)
}