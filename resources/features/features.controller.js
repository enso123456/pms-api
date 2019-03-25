const models = require('../../models');

exports.getFeatures = async (req, res) => {
  try {
    const features = await models.Feature.findAll({});
    res.json(features);
  } catch (e) {
    throw new Error(e);
  }
}

exports.addFeatures = async (req, res) => {
  try {
    const name = req.body.name;
    if (!name) {
      return res.json({ code: 500, message: "Please provide a name." })
    }
    const newFeature = await models.Feature.create({ name });
    res.json(newFeature);
  } catch (e) {
    throw new Error(e);
  }
};

exports.getFeature = async (req, res) => {
  try {
    const id = req.params.id;
    const features = await models.Feature.findAll({
      where: {
        id
      },
    });
    if (features.length === 0) {
      return res.json({ code: 404, message: "Cannot be found." })
    }
    return res.json(features[0]);
  } catch (e) {
    throw new Error(e);
  }
}

exports.updateFeatures = async (req, res) => {
  try {
    const id = req.params.id;
    const name = req.body.name;

    const feature = await models.Feature.update({
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

exports.deleteFeatures = async (req, res) => {
  try {
    const id = req.params.id;
    await models.Feature.destroy({ where: { id } });
    res.json({ status: 200 });
  } catch (e) {
    throw new Error(e);
  }
}