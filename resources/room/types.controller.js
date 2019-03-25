const models = require('../../models');

exports.getTypes = async (req, res) => {
  try {
    const { id } = req.params;

    const room = await models.RoomTypes.findAll({
      where: { 'roomId': id },
      attributes: [],
      include: [{
        model: models.Category,
      }],
    });

    res.json(room);
  } catch (e) {
    console.log(e);
  }
}

exports.addRoomTypes = async (req, res) => {
  try {
    const {
      roomId,
      roomTypeId,
    } = req.body;

    const types = await models.RoomTypes.create({
      roomId,
      roomTypeId,
    });

    return res.json({ code: 200, types });
  } catch (e) {
    console.log(e);
  }
}

/**
 * update room types
 * @param
 * amenitieId: ${id}
 */

exports.updateRoomTypes = async (req, res) => {
  try {
    const { id } = req.params;
    const { roomTypeId } = req.body;

    await models.RoomTypes.update({
      roomTypeId
    }, { where: { id } });

    res.json({ code: 200, message: 'Successfully Updated' });
  } catch (e) {
    console.log(e);
  }
}

exports.deleteRoomTypes = async (req, res) => {
  try {
    const { id } = req.params;
    await models.RoomTypes.destroy({ where: { id } });

    res.json({
      code: 200, message: 'Deleted'
    });
  } catch (e) {
    console.log(e);
  }
}