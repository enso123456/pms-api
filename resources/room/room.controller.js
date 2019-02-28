const models = require('../../models');

exports.getRooms = async (req, res) => {
  try {
    const rooms = await models.room.findAll({
      attributes: { exclude: ['roomId'] },
    });
    res.json(rooms);
  } catch (e) {
    console.log(e);
  }
};

exports.addRoom = async (req, res) => {
  try {
    const {
      name,
      available_qty,
      description,
      size,
      bed_qty,
      price,
    } = req.body;

    if (!name) {
      return res.json({ code: 500, message: "Please provide a room name." })
    }

    const newRoom = await models.room.create({
      name,
      available_qty,
      description,
      size,
      bed_qty,
      price,
    });

    res.json({ code: 200, newRoom });
  } catch (e) {
    console.log(e);
  }
}

exports.getRoomType = async (req, res) => {
  try {
    const types = await models.RoomType.findAll({
      raw: true,
      attributes: [],
      include: [
        {
          model: models.room,
          attributes: [['name', 'room']],
        },
        {
          model: models.amenities,
          attributes: [['name', 'amenities']],
        },
        {
          model: models.bed,
          attributes: [['name', 'bed']],
        },
        {
          model: models.feature,
          attributes: [['name', 'feature']],
        },
      ]
    })
    res.json(types);
  } catch (e) {
    console.log(e);
  }
}

exports.addRoomType = async (req, res) => {
  try {
    const {
      roomId,
      bedId,
      featureId,
      amenitiesId,
    } = req.body;

    const newRoomType = await models.RoomType.create({
      roomId,
      bedId,
      featureId,
      amenitiesId,
    });

    res.json({ code: 200, newRoomType });
  } catch (e) {
    console.log(e);
  }
}