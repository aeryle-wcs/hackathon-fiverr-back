const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const users = await prisma.user.findUnique({
      where: { id },
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
