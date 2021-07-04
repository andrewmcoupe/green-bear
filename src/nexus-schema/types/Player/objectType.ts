import { objectType } from '@nexus/schema'

export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.string('id')
    t.string('name')
    t.string('email')
    t.string('phoneNumber')
    t.string('teamId')
  },
})
