import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "Asyifa",
      },
    });

    expect(total).toBe(2);
  });
});
