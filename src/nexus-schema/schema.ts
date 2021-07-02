import { makeSchema } from '@nexus/schema'
import path from 'path'
import * as types from './types'

export const schema = makeSchema({
  types,
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), 'src/nexus-schema/generated', 'apiSchemaTypings.ts'),
    schema: path.join(process.cwd(), 'src/nexus-schema/generated', 'apiSchema.graphql'),
  },
  shouldGenerateArtifacts: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prisma',
      },
      {
        source: path.join(process.cwd(), 'src/nexus-schema', 'context.ts'),
        alias: 'Context',
      },
    ],
  },
})
