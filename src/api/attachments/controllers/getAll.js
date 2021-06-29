const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const attachments = await prisma.attachment.findMany();

    res.status(200).json(attachments);
  } catch (error) {
    next(error);
  }
};
