import { mutationField, stringArg, nonNull } from '@nexus/schema'

export const deletePlayer = mutationField('deletePlayer', {
  type: 'Player',
  args: {
    id: nonNull(stringArg()),
  },
  description: 'Deletes a player',
  resolve: async (root, args, context) => {
    return context.prisma.player.delete({
      where: {
        id: args.id,
      },
    })
  },
})
