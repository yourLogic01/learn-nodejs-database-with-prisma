import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to execute SQL", async () => {
    const id = 1;
    const name = "Asyifa Maulana";

    const impacted = await prismaClient.$executeRaw`INSERT INTO sample (id, name) VALUES (${id}, ${name})`;

    expect(impacted).toBe(1);
  });
});
