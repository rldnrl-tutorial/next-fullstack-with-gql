import { gql } from 'apollo-server-micro'
import { makeSchema } from 'nexus'
import { join } from 'path'

import * as types from './types'

export const typeDefs = gql`
  type Link {
    category: String!
    description: String!
    id: String!
    imageUrl: String!
    title: String!
    url: String!
    users: [User]!
  }

  type Query {
    links: [Link]!
  }
`

export const schema = makeSchema({
  types,
  outputs: {
    typegen: join(
      process.cwd(),
      'node_modules',
      '@types',
      'nexus-typegen',
      'index.d.ts'
    ),
    schema: join(`${process.cwd()}/src/libs`, 'graphql', 'schema.graphql'),
  },
  contextType: {
    export: 'Context',
    module: join(`${process.cwd()}/src/libs`, 'graphql', 'context.ts'),
  },
})
