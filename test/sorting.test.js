import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able read many with sorting", async () => {
    const customers = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc",
        },
        {
          email: "asc",
        },
      ],
    });
    console.info(customers);
  });
});
