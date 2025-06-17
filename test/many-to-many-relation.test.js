import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should be able to insert many to many relation", async () => {
    const like = await prismaClient.like.create({
      data: {
        customer_id: "leo",
        product_id: "P0001",
      },
      include: {
        customer: true,
        product: true,
      },
    });

    console.info(like);
  });

  it("should can find one with many to many relation", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "maulana",
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(JSON.stringify(customer));
  });

  it("should can find many with many to many relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        likes: {
          some: {
            product: {
              name: {
                contains: "A",
              },
            },
          },
        },
      },
      include: {
        likes: {
          include: {
            product: true,
          },
        },
      },
    });

    console.info(JSON.stringify(customers));
  });

  //implicit relation
  it("should can create implicit relation", async () => {
    const customer = await prismaClient.customer.update({
      where: {
        id: "maulana",
      },
      data: {
        loves: {
          connect: [{ id: "P0001" }, { id: "P0002" }],
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(customer);
  });
  it("should can find many implicit relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });

    console.info(JSON.stringify(customer));
  });
});
