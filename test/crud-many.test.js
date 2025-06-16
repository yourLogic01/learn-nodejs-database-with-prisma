import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to create many customers", async () => {
    const { count } = await prismaClient.customer.createMany({
      data: [
        {
          id: "joko",
          name: "Joko",
          email: "joko@go.id",
          phone: "081999999997",
        },
        {
          id: "leonardo",
          name: "Leonardo",
          email: "leonardo@go.id",
          phone: "081234567897",
        },
      ],
    });

    expect(count).toBe(2);
  });

  it("should be able to update many records", async () => {
    const { count } = await prismaClient.customer.updateMany({
      data: {
        email: "jokolagi@go.id",
      },
      where: {
        name: "Joko",
      },
    });

    expect(count).toBe(1);
  });

  it("should be able to delete many records", async () => {
    const { count } = await prismaClient.customer.deleteMany({
      where: {
        name: "Tidak ada",
      },
    });

    expect(count).toBe(0);
  });

  it("should can read many records", async () => {
    const customers = await prismaClient.customer.findMany({});
    console.info(customers);
    expect(customers.length).toBe(6);
  });
});
