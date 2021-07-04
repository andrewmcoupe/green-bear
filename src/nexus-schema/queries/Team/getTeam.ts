import { queryField, stringArg, nonNull } from '@nexus/schema'

export const getTeam = queryField('getTeam', {
  type: 'Team',
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (root, args, context) => {
    return context.prisma.team.findUnique({
      where: {
        id: args.id,
      },
      rejectOnNotFound: true,
    })
  },
})
