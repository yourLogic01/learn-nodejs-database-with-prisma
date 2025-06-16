import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can execute sequential transaction", async () => {
    const [asyifa, maulana] = await prismaClient.$transaction(
      [
        prismaClient.customer.create({
          data: {
            id: "asyifa",
            name: "Asyifa",
            email: "asyifa@go.id",
            phone: "08199999999",
          },
        }),
        prismaClient.customer.create({
          data: {
            id: "maulana",
            name: "Maulana",
            email: "maulana@go.id",
            phone: "08123456789",
          },
        }),
      ],
      {
        timeout: 5,
      }
    );

    expect(asyifa.name).toBe("Asyifa");
    expect(maulana.name).toBe("Maulana");
  });
  it("should can execute interactive transaction", async () => {
    const [asyifa, maulana] = await prismaClient.$transaction(
      async (prisma) => {
        const asyifa = await prisma.customer.create({
          data: {
            id: "asyifa1",
            name: "Asyifa",
            email: "asyifa1@go.id",
            phone: "081999999998",
          },
        });
        const maulana = await prisma.customer.create({
          data: {
            id: "maulana1",
            name: "Maulana",
            email: "maulana1@go.id",
            phone: "081234567898",
          },
        });

        return [asyifa, maulana];
      },
      {
        timeout: 5,
      }
    );

    expect(asyifa.name).toBe("Asyifa");
    expect(maulana.name).toBe("Maulana");
  });
});
