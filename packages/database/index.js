import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const lasagnaChefs = await prisma.lasagnaChef.findMany({
    include: {
      lasagnas: true,
    },
  });

  console.log(JSON.stringify(lasagnaChefs, null, 2));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

// Path: packages/database/prisma/schema.prisma
