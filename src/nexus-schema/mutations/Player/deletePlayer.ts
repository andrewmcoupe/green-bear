import { mutationField, stringArg } from '@nexus/schema'

export const deletePlayer = mutationField('deletePlayer', {
  type: 'Player',
  args: {
    id: stringArg(),
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
