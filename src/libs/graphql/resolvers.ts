import { PrismaClient } from '@prisma/client'

export const resolvers = {
  Query: {
    links: (
      _parent: unknown,
      _args: unknown,
      ctx: { prisma: PrismaClient }
    ) => {
      return ctx.prisma.link.findMany()
    },
  },
}
