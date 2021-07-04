Make sure you have Docker installed.

## ⚙️ Install

Run `yarn setup` to prepare and install dependencies.

## 💿 DB setup

Run `yarn db:up` This will download the Postgres docker image and run the docker container, exposing the DB server.
Run `yarn db:down` to drop the database.

## △ Prisma setup

Run `npx prisma db push` to generate the DB based off the Prisma schema.

Run `npx prisma generate` to generate the Prisma client which is an auto generated and type-safe query builder for our data.

## 🏗 Develop

Run `yarn dev` to spin up the development server at `localhost:3000`.

The GraphQL API is at `localhost:3000/api/graphql`
