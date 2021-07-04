import { mutationField, nonNull, stringArg } from '@nexus/schema'

export const createTeam = mutationField('createTeam', {
  type: 'Team',
  args: {
    name: nonNull(stringArg()),
  },
  description: 'Creates a team',
  resolve: async (root, args, context) => {
    return context.prisma.team.create({
      data: {
        name: args.name,
      },
    })
  },
})
