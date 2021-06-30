const prisma = require("../../../prismaClient");

module.exports = async (req, res, next) => {
  const { id } = req.params;
  try {
    const users = await prisma.user.findUnique({
      where: {
        id
      },
      select: {
        id: true,
        pseudo: true,
        email: true,
        status: true,
        city: true,
        job: true,
        description: true,
      }
    });

    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    next(error);
  }
};
