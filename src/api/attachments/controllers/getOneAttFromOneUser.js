const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const { userId } = req.query;
  try {
    const attachments = await prisma.attachment.findUnique({
      where: { id, userId },
    });

    res.status(200).json(attachments);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
