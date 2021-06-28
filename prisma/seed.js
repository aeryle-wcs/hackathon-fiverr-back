const { PrismaClient, NetworkName } = require("@prisma/client");
const faker = require("faker");

const prisma = new PrismaClient();

async function main() {
  const networkNames = [
    "INSTAGRAM",
    "TWITTER",
    "FACEBOOK",
    "REDDIT",
    "BEHANCE",
    "DEVTO",
    "YOUTUBE",
    "PORTFOLIO",
    "DRIBBLE",
    "GITHUB",
  ];

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
      url: faker.image.imageUrl(),
      user: {
        connect: {
          id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        },
      },
      type: "PHOTO",
    },
    {
      url: faker.image.imageUrl(),
      user: {
        connect: {
          id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        },
      },
      type: "VIDEO",
    },
  ];

  const createdAttachments = await Promise.all(
    attachments.map((attachment) =>
      prisma.attachment.create({ data: attachment })
    )
  );
  const tag = [
    {
      name: faker.lorem.word(1),
      users: {
        connect: {
          id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        },
      },
    },
    {
      name: faker.lorem.word(1),
      users: {
        connect: {
          id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
        },
      },
    },
  ];

  const createdTag = await Promise.all(
    tag.map((tag) => prisma.tag.create({ data: tag }))
  );

  const network = [
    {
      name: networkNames[Math.floor(Math.random() * networkNames.length)],
      connect: {
        id: createdUsers[Math.floor(Math.random() * createdUsers.length)].id,
      },
    },
  ];

  const createdNetwork = await Promise.all(
    network.map((network) => prisma.network.create({data: network}))
  );

}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
