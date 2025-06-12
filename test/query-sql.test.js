import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to query SQL", async () => {
    const id = 1;

    const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const sample of samples) {
      console.info(`Result sample id: ${sample.id} name: ${sample.name}`);
    }
  });
});
