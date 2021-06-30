const prisma = require('../../../prismaClient');

module.exports = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
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
    next(error);
  }
};
