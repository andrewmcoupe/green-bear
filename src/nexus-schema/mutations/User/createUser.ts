import { mutationField, nonNull, nullable, stringArg } from '@nexus/schema'

export const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    name: nonNull(stringArg()),
    email: nonNull(stringArg()),
    phoneNumber: nullable(stringArg()),
  },
  description: 'Creates a user',
  resolve: async (root, args, context) => {
    return context.prisma.user.create({
      data: {
        name: args.name,
        email: args.email,
        phoneNumber: args.phoneNumber,
      },
    })
  },
})
