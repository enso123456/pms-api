const models = require('../../models');

exports.getBeds = async (req, res) => {
  try {
    const beds = await models.bed.findAll({ attributes: { exclude: ['bedId'] } });
    res.json(beds);
  } catch (e) {
    throw new Error(e);
  }
}

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

exports.getBed = async (req, res) => {
  try {
    const id = req.params.id;
    const bed = await models.bed.findAll({
      where: {
        id
      },
      attributes: {
        exclude: ['bedId']
      }
    });
    if (bed.length === 0) {
      return res.json({ code: 404, message: "Cannot be found." })
    }
    return res.json(bed[0]);
  } catch (e) {
    throw new Error(e);
  }
}

exports.updateBed = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const updateBed = await models.bed.update({
      name
    }, {
        where: {
          id
        }
      });

    res.json({ status: 200 });

  } catch (e) {
    throw new Error(e);
  }
}

exports.deleteBed = async (req, res) => {
  try {
    const id = req.params.id;
    await models.bed.destroy({ where: { id } });
    res.json({ status: 200 });
  } catch (e) {
    throw new Error(e);
  }
}