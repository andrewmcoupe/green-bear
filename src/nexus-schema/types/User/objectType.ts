import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'User',
  definition(t) {
    t.string('id')
    t.nonNull.string('name')
    t.nonNull.string('email')
    t.nullable.string('phoneNumber')
  },
})
