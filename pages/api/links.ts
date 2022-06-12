import { NextApiHandler } from 'next'
import prisma from '@/libs/config/prisma'

const linksHandler: NextApiHandler = async (req, res) => {
  const links = await prisma.link.findMany()

  return res.json(links)
}

export default linksHandler
