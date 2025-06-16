import { prismaClient } from "../src/prisma-client";

describe("Prisma Client", () => {
  it("should be able to create customers", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "maulana",
        name: "Asyifa Maulana",
        email: "maulana@go.id",
        phone: "08123456789",
      },
    });

    expect(customer.id).toBe("maulana");
    expect(customer.name).toBe("Asyifa Maulana");
    expect(customer.email).toBe("maulana@go.id");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to update customers", async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: "Maulana",
      },
      where: {
        id: "maulana",
      },
    });

    expect(customer.id).toBe("maulana");
    expect(customer.name).toBe("Maulana");
    expect(customer.email).toBe("maulana@go.id");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to read customers", async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: "maulana",
      },
    });

    expect(customer.id).toBe("maulana");
    expect(customer.name).toBe("Maulana");
    expect(customer.email).toBe("maulana@go.id");
    expect(customer.phone).toBe("08123456789");
  });

  it("should be able to delete customers", async () => {
    const customer = await prismaClient.customer.delete({
      where: {
        id: "maulana",
      },
    });

    expect(customer.id).toBe("maulana");
    expect(customer.name).toBe("Maulana");
    expect(customer.email).toBe("maulana@go.id");
    expect(customer.phone).toBe("08123456789");
  });
});
