import { prismaClient } from "../src/prisma-client";
describe("prisma client", () => {
  it("should be able to auto increment", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });
    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
