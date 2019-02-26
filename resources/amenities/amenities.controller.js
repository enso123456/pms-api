const models = require('../../models');

exports.getAmenities = async (req, res) => {
  try {
    const amenties = await models.amentie.findAll({ attributes: { exclude: ['amenityId'] } });
    res.json(amenties);
  } catch (e) {
    throw new Error(e);
  }
}

exports.createAmenities = async (req, res) => {
  try {
    const name = req.body.name;
    if (!name) {
      throw new Error("Please provide a name");
    }
    const newBed = await models.amentie.create({ name });
    res.json(newBed);
  } catch (e) {
    throw new Error(e);
  }
};

exports.getAmenity = async (req, res) => {
  try {
    const id = req.params.id;
    const amenties = await models.amentie.findAll({
      where: {
        id
      },
      attributes: {
        exclude: ['amenityId']
      }
    });
    if (amenties.length === 0) {
      return res.json({ code: 404, message: "Cannot be found." })
    }
    return res.json(amenties[0]);
  } catch (e) {
    throw new Error(e);
  }
}

exports.updateAmenities = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const amentie = await models.amentie.update({
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

exports.deleteAmenities = async (req, res) => {
  try {
    const id = req.params.id;
    await models.amentie.destroy({ where: { id } });
    res.json({ status: 200 });
  } catch (e) {
    throw new Error(e);
  }
}