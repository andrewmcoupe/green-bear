import { mutationField, nullable, stringArg } from '@nexus/schema'

export const createUser = mutationField('createUser', {
  type: 'User',
  args: {
    name: stringArg(),
    email: stringArg(),
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
