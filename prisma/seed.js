const { PrismaClient } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

async function seed() {
  const users = [
    {
      pseudo: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      city: faker.address.city(),
      job: faker.name.jobTitle(),
      status: "OFFLINE",
    },
    {
      pseudo: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      city: faker.address.city(),
      job: faker.name.jobTitle(),
      status: "ONLINE",
    },
    {
      pseudo: faker.internet.userName(),
      password: faker.internet.password(),
      email: faker.internet.email(),
      city: faker.address.city(),
      job: faker.name.jobTitle(),
      status: "BUSY",
    },
  ];

  const createdUsers = await Promise.all(
    users.map((user) => prisma.user.create({ data: user }))
  );

  const attachments = [
    {
      url: faker.image.url(),
      user: {
        connect: {
          id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        },
      },
    },
    {
      url: faker.image.url(),
      user: {
        connect: {
          id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        },
      },
    },
  ];

  const createdAttachments = await Promise.all(
    attachments.map((attachment) =>
      prisma.attachment.create({ data: attachment })
    )
  );
}

module.exports = {
  seed,
};
