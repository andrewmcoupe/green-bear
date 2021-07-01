Make sure you have Docker installed.

## Install
Run `yarn setup` to prepare and install dependencies.

## DB setup
Run `docker compose up -d` This will download the Postgres docker image and run the docker container, exposing the DB server.

## Prisma setup
Run `npx prisma db push` to generate the DB based off the Prisma schema.

Run `npx prisma generate` to generate the Prisma client which is an auto generated and type-safe query builder for our data.


