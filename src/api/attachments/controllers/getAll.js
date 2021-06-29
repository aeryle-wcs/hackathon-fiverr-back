const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const { userId } = req.query;

    const attachments = await prisma.attachment.findMany({
      where: {
        userId,
      },
    });

    res.status(200).json(attachments);
  } catch (error) {
    next(error);
  }
};
