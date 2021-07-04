import { list, objectType } from '@nexus/schema'

export const Team = objectType({
  name: 'Team',
  definition(t) {
    t.string('id')
    t.string('name')
    t.field('players', {
      type: list('Player'),
      resolve: async (root, args, context) => {
        return context.prisma.player.findMany({
          where: {
            teamId: root.id,
          },
        })
      },
    })
  },
})
