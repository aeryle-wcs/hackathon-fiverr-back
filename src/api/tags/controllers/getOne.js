const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const tags = await prisma.tag.findUnique({
      where: { id },
    });

    res.status(200).json(tags);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
