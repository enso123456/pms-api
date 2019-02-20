const models = require('../../models');

exports.addBed = async (req, res) => {
  try {
    const name = req.body.name;
    if (!name) {
      throw new Error("Please provide a name");
    }
    const newBed = await models.bed.create({ name });
    res.json(newBed);
  } catch (e) {
    throw new Error(e);
  }
};