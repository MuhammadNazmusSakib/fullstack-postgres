import { NextResponse } from "next/server"

export async function POST(request) {
    const res = await request.json()
    //console.log({res})

    const result = await prisma.post.create({data: res})

    return NextResponse.json(result)
}