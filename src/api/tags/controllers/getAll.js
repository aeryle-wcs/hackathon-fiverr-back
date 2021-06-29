const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const tags = await prisma.tag.findMany();

    res.status(200).json(tags);
  } catch (error) {
    next(error);
  }
};
