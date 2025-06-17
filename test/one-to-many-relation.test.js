import { prismaClient } from "../src/prisma-client";

describe("prisma client", () => {
  it("should can instert and include", async () => {
    const comment = await prismaClient.comment.create({
      data: {
        customer_id: "maulana",
        title: "Instert comment",
        description: "Description comment",
      },
      include: {
        customer: true,
      },
    });

    console.info(comment);
  });

  it("should can insert with relation", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "alex",
        name: "Alex",
        email: "alex@go.id",
        phone: "0812345678922",
        comments: {
          createMany: {
            data: [
              {
                title: "Comment 1",
                description: "description comment 1",
              },
              {
                title: "Comment 2",
                description: "description comment 2",
              },
            ],
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(customer);
  });

  it("should can find many with filter relation", async () => {
    const customers = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });

    console.info(JSON.stringify(customers));
  });
});
