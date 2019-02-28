const models = require('../../models');

exports.getAmenities = async (req, res) => {
  try {
    const amenties = await models.amenities.findAll({ attributes: { exclude: ['amenityId'] } });
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
    const amenitie = await models.amenities.create({ name });
    res.json(amenitie);
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
};

exports.getAmenity = async (req, res) => {
  try {
    const id = req.params.id;
    const amenties = await models.amenities.findAll({
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

    const amentie = await models.amenities.update({
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
    await models.amenities.destroy({ where: { id } });
    res.json({ status: 200 });
  } catch (e) {
    throw new Error(e);
  }
}