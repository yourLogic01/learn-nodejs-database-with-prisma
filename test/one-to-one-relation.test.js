import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to create one to one relation", async () => {
    const wallet = await prismaClient.wallet.create({
      data: {
        id: "maulana",
        customer_id: "maulana",
        balance: 100000,
      },
      include: {
        customer: true,
      },
    });

    console.info(wallet);
  });
  it("should be able to create one to one with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "leo",
        name: "Leo",
        email: "leo@go.id",
        phone: "0812345678985",
        wallet: {
          create: {
            id: "leo",
            balance: 100000,
          },
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });

  it("should be able find one to one with relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "leo",
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });
  it("should be able find one to one with relation filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });

    console.info(customer);
  });
});
