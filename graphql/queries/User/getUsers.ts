import { queryField, stringArg } from '@nexus/schema'

export const getUser = queryField('user', {
  type: 'User',
  args: {
    id: stringArg(),
  },
  resolve: async (root, args, context) => {
    return context.prisma.user.findUnique({
      where: {
        id: args.id || undefined,
      },
      rejectOnNotFound: true,
    })
  },
})
