const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
