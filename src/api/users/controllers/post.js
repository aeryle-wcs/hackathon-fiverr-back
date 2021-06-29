const { attachment } = require("../../../prismaClient");
const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { pseudo, email, password, status, city, tags, attachments, job } =
    req.body;

  try {
    const users = await prisma.user.create({
      data: {
        pseudo,
        password,
        email,
        status,
        city,
        job,
        tags: {
          connect: (tags || []).map((tag) => ({ id: tag })),
        },
        attachments: {
          connect: (attachments || []).map((attachment) => ({
            id: attachment,
          })),
        },
      },
    });

    res.status(201).json(users);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
