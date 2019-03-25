const models = require('../../models');

exports.getRoomAmenities = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await models.RoomAmenities.findAll({
      where: { 'roomId': id },
      attributes: [],
      include: [{
        model: models.Amenities,
      }],
    });

    res.json(room);
  } catch (e) {
    console.log(e);
  }
}

exports.addRoomAmenities = async (req, res) => {
  try {
    const {
      roomId,
      amenitieId,
    } = req.body;

    const amenities = await models.RoomAmenities.create({
      roomId,
      amenitieId,
    });

    return res.json({ code: 200, amenities });
  } catch (e) {
    console.log(e);
  }
}

/**
 * update room amenities
 * @param
 * amenitieId: ${id}
 */

exports.updateRoomAmenities = async (req, res) => {
  try {
    const { id } = req.params;
    const { amenitieId } = req.body;

    await models.RoomAmenities.update({
      amenitieId
    }, { where: { id } });

    res.json({ code: 200, message: 'Successfully Updated' });
  } catch (e) {
    console.log(e);
  }
}

exports.deleteRoomAmenities = async (req, res) => {
  try {
    const { id } = req.params;
    await models.RoomAmenities.destroy({ where: { id } });

    res.json({
      code: 200, message: 'Deleted'
    });
  } catch (e) {
    console.log(e);
  }
}