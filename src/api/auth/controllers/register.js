const prisma = require('../../../prismaClient');
const generateJWT = require('../../../utils/JWT');

module.exports = async (req, res, next) => {
  try {
    const {
      pseudo,
      email,
      password,
      status,
      city,
      job
    } = req.body;

    const user = await prisma.user.create({
      data: {
        pseudo,
        email,
        password,
        status,
        city,
        job
      },
      select: {
        id: true,
        pseudo: true,
        email: true,
        status: true,
        city: true,
        job: true
      }
    });

    res.user = user;

    const token = generateJWT(user);
    res.cookie('token', token);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};
