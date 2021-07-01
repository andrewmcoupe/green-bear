import { objectType, queryType, mutationType, makeSchema } from "@nexus/schema";
import path from "path";

const Query = queryType({
  definition(t) {
    t.list.field("allUsers", {
      type: "User",
      resolve(_parent, _args, ctx) {
        return ctx.prisma.user.findMany({});
      },
    });
  },
});

const Mutation = mutationType({
  definition(t) {
    t.field("bigRedButton", {
      type: "String",
      async resolve(_parent, _args, ctx) {
        const { count } = await ctx.prisma.user.deleteMany({});
        return `${count} user(s) destroyed. Thanos will be proud.`;
      },
    });
  },
});

const User = objectType({
  name: "User",
  definition(t) {
    t.string('id');
    t.string('name');
  },
});

export const schema = makeSchema({
  types: [Query, User, Mutation],
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.graphql"),
  },
  typegenAutoConfig: {
    contextType: "Context.Context",
    sources: [
      {
        source: "@prisma/client",
        alias: "prisma",
      },
      {
        source: path.join(process.cwd(), "graphql", "context.ts"),
        alias: "Context",
      },
    ],
  },
});
