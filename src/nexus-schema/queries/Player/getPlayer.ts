import { queryField, stringArg, nonNull } from '@nexus/schema'

export const getPlayer = queryField('getPlayer', {
  type: 'Player',
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (root, args, context) => {
    return context.prisma.player.findUnique({
      where: {
        id: args.id,
      },
      rejectOnNotFound: true,
    })
  },
})
