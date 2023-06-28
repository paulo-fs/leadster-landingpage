import type { NextApiRequest, NextApiResponse } from 'next'
import fsPromises from 'fs/promises'
import path from 'path'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {

  const filePath = path.join(
    process.cwd(),
    '/src/store/data/videos.JSON'
  )
  const jsonData = await fsPromises.readFile(filePath, { encoding: 'utf8' })
  const data = JSON.parse(jsonData)

  if (req.method === 'GET') {
    res.status(200).json(data)
  }
}
