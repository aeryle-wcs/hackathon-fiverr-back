const prisma = require("../../../prismaClient");

async function search(req, res, next) {
  try {
    const { type, text } = req.query;

    const searchObject = {
      mode: "insensitive",
      contains: text,
    };

    let results;

    if (type === "tags") {
      results = await prisma.tag.findMany({
        where: {
          name: searchObject,
        },
      });
    }

    if (type === "users") {
      results = await prisma.user.findMany({
        where: {
          OR: [
            { pseudo: searchObject },
            { email: searchObject },
            { city: searchObject },
            { job: searchObject },
            { description: searchObject },
          ],
        },
      });
    }

    if (type === "description") {
      results = await prisma.user.findMany({
        where: {
          OR: {
            pseudo: searchObject,
            description: searchObject,
          },
        },
      });
    }

    return res.status(200).json(results);
  } catch (e) {
    next(e);
  }
}

module.exports = search;
