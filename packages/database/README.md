# Database Ricotta

This project consists of a local MySQL development setup using Prisma and includes a server-api and web-client.

## Directory Structure

```
project-ricotta
│   ...
└───packages
    ├───database
    ├───server-api
    └───web-client
```

### packages/database

This folder contains the local MySQL development setup using Prisma.

#### Setting up the local MySQL database

1. Install the required dependencies:

```sh
cd packages/database
yarn install
```

2. Configure the MySQL database connection in `prisma/schema.prisma`. Update the `DATABASE_URL` with your MySQL database connection details:

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

3. Create a `.env` file inside the `packages/database` folder and add your MySQL database connection URL:

```
DATABASE_URL="mysql://user:password@localhost:3306/mydatabase"
```

4. Apply the Prisma migrations to create the database schema:

```sh
yarn prisma migrate dev --name init
```

5. Generate Prisma Client:

```sh
yarn prisma generate
```

#### Running example queries

To run example queries, you can use the `index.js` file inside the `packages/database` folder. Update this file with your queries and run:

```sh
node index.js
```

## packages/server-api

This folder contains the server API for the project. Follow the README.md instructions inside this folder for setup and usage.

## packages/web-client

This folder contains the web client for the project. Follow the README.md instructions inside this folder for setup and usage.

```

```
