import { mutationField, nullable, stringArg } from '@nexus/schema'

export const createPlayer = mutationField('createPlayer', {
  type: 'Player',
  args: {
    teamId: stringArg(),
    name: stringArg(),
    email: stringArg(),
    phoneNumber: nullable(stringArg()),
  },
  description: 'Creates a player',
  resolve: async (root, args, context) => {
    return context.prisma.player.create({
      data: {
        teamId: args.teamId,
        name: args.name || '',
        email: args.email || '',
        phoneNumber: args.phoneNumber,
      },
    })
  },
})
