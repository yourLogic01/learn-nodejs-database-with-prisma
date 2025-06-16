import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able create with select field", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "kevin",
        name: "Kevin",
        email: "kevin@go.id",
        phone: "08188888888",
      },
      select: {
        id: true,
        name: true,
      },
    });

    expect(customer.id).toBe("kevin");
    expect(customer.name).toBe("Kevin");
    expect(customer.email).toBeUndefined();
    expect(customer.phone).toBeUndefined();
  });

  it("should be able find many with select field", async () => {
    const customers = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    for (const customer of customers) {
      expect(customer.id).toBeDefined();
      expect(customer.name).toBeDefined();
      expect(customer.email).toBeUndefined();
      expect(customer.phone).toBeUndefined();
    }
  });
});
