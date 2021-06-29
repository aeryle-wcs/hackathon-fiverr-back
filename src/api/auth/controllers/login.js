const prisma = require('../../../prismaClient');
const generateJWT = require('../../../utils/JWT');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        email,
        password
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
    res.status(201).json({ message: 'Logged in.' });
  } catch (error) {
    next(error);
  }
};
