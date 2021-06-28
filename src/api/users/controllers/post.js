const { attachment } = require("../../../prismaClient");
const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { pseudo, email, status, city, tags, attachments } = req.body;

  console.log(attachments);
  try {
    const users = await prisma.user.create({
      data: {
        pseudo,
        email,
        status,
        city,
        tags: {
          connect: tags.map((tag) => ({ id: tag })),
        },
        attachments: {
          connect: attachments.map((attachment) => ({ id: attachment })),
        },
      },
    });

    res.status(201).json(users);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
