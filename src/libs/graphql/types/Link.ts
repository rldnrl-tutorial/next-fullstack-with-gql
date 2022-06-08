// /graphql/types/Link.ts
import { extendType, objectType } from 'nexus'
import { User } from './User'

export const Link = objectType({
  name: 'Link',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.string('title')
    t.nonNull.string('url')
    t.nonNull.string('description')
    t.nonNull.string('imageUrl')
    t.nonNull.string('category')
    t.nonNull.list.field('users', {
      type: User,
      async resolve(_parent, _args, ctx) {
        return await ctx.prisma.link
          .findUnique({
            where: {
              id: _parent.id,
            },
          })
          .users()
      },
    })
  },
})

export const LinksQuery = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.field('links', {
      type: 'Link',
      resolve(_parent, _args, ctx) {
        return ctx.prisma.link.findMany()
      },
    })
  },
})
