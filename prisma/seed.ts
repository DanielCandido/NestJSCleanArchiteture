import { PrismaClient, Role } from '@prisma/client';
import { fakerPT_BR as faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function main() {
  await prisma.companyGroup.create({
    data: {
      cnpj: '4312331000190',
      name: faker.company.name(),
      status: faker.datatype.boolean(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      state: faker.location.state(),
      companies: {
        create: [
          {
            cnpj: '4312331000190',
            name: faker.company.name(),
            status: faker.datatype.boolean(),
            address: faker.location.streetAddress(),
            city: faker.location.city(),
            state: faker.location.state(),
            industries: {
              create: [
                {
                  code: faker.number.int({ min: 200, max: 999 }).toString(),
                  name: faker.company.name(),
                  status: faker.datatype.boolean(),
                },
              ],
            },
            units: {
              create: [
                {
                  code: faker.number.int({ min: 200, max: 999 }).toString(),
                  name: faker.company.name(),
                  status: faker.datatype.boolean(),
                  employees: {
                    create: [
                      {
                        code: faker.number
                          .int({ min: 200, max: 999 })
                          .toString(),
                        login: faker.internet.userName(),
                        name: faker.person.fullName(),
                        password: '123456',
                        role: Role.ANALITICA,
                        status: true,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
