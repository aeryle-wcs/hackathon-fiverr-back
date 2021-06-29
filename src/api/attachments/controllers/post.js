const { attachment } = require("../../../prismaClient");
const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { url, type, userId } = req.body;

  try {
    const attachments = await prisma.attachment.create({
      data: {
        url,
        type,
        userId,
      },
    });

    res.status(201).json(attachments);
  } catch (error) {
    res.status(404);
    next(error);
  }
};
