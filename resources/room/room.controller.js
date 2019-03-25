const models = require('../../models');

exports.getRooms = async (req, res) => {
  try {
    const rooms = await models.Room.findAll({
      include: [{
        model: models.RoomFeature,
        where: {
          roomId: 1,
        },
        attributes: {
          exclude: ['']
        },
        include: [{
          model: models.Feature,
        }],
      }],
    });

    return res.json(rooms);
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

    const newRoom = await models.Room.create({
      name,
      available_qty,
      description,
      size,
      bed_qty,
      price,
    });

    return res.json({ code: 200, newRoom });
  } catch (e) {
    console.log(e);
  }
}

exports.getRoom = async (req, res) => {
  try {
    const id = req.params.id;
    const rooms = await models.Room.findAll({
      where: {
        id
      },
      attributes: {
        exclude: ['roomId']
      },
    });
    if (rooms.length === 0) {
      return res.json({ code: 404, message: "Cannot be found." })
    }
    return res.json(rooms[0]);
  } catch (e) {
    throw new Error(e);
  }
}

exports.updateRoom = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      name,
      available_qty,
      description,
      size,
      bed_qty,
      price,
    } = req.body;

    const room = await models.Room.update({
      name,
      available_qty,
      description,
      size,
      bed_qty,
      price,
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

exports.deleteRoom = async (req, res) => {
  try {
    const id = req.params.id;
    await models.Room.destroy({ where: { id } });
    res.json({ status: 200 });
  } catch (e) {
    throw new Error(e);
  }
}
