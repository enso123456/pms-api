const models = require('../../models');

exports.getRoomFeatures = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await models.RoomFeature.findAll({
      where: { 'roomId': id },
      attributes: [],
      include: [{
        model: models.Feature,
      }],
    });

    res.json(room);
  } catch (e) {
    console.log(e);
  }
}

exports.addRoomFeature = async (req, res) => {
  try {
    const {
      roomId,
      featureId,
    } = req.body;

    const roomFeature = await models.RoomFeature.create({
      roomId,
      featureId,
    });

    return res.json({ code: 200, roomFeature });
  } catch (e) {
    console.log(e);
  }
}

/**
 * update room feature
 * @param
 * featureId: ${id}
 */

exports.updateRoomFeature = async (req, res) => {
  try {
    const { id } = req.params;
    const { featureId } = req.body;

    await models.RoomFeature.update({
      featureId
    }, { where: { id } });

    res.json({ code: 200, message: 'Successfully Updated' });
  } catch (e) {
    console.log(e);
  }
}



exports.deleteRoomFeature = async (req, res) => {
  try {
    const { id } = req.params;
    await models.RoomFeature.destroy({ where: { id } });

    res.json({
      code: 200, message: 'Deleted'
    });
  } catch (e) {
    console.log(e);
  }
}