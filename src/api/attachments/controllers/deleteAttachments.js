const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const attachments = await prisma.attachment.delete({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
};
