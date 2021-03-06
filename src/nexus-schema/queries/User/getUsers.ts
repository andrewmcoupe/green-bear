import { queryField, stringArg, nonNull } from '@nexus/schema'

export const getUser = queryField('user', {
  type: 'User',
  args: {
    id: nonNull(stringArg()),
  },
  resolve: async (root, args, context) => {
    return context.prisma.user.findUnique({
      where: {
        id: args.id,
      },
      rejectOnNotFound: true,
    })
  },
})
