import { NextResponse } from 'next/server'
import fsPromises from 'fs/promises'
import path from 'path'

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    '/src/app/api/videos/data/videos.JSON'
  )
  const jsonData = await fsPromises.readFile(filePath, { encoding: 'utf8' })
  const data = JSON.parse(jsonData)
  return NextResponse.json({ data })
}
