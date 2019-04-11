const models = require('../../models');

const Guest = function () {
  const addGuest = async (req, res) => {
    try {
      const isValidated = isValid(req.body);

      if (isValidated) {
        const guest = await models.Guest.create(req.body);
        return res.json({
          code: 200,
          data: guest
        });
      } else {
        res.status(500).send('Missing guest details');
        // return res.json({
        //   code: 500,
        //   message: "Missing guest details",
        // });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const findGuest = async (req, res, next, id) => {
    try {
      const guest = await models.Guest.findAll({
        where: {
          id
        },
      });

      if (guest.length === 0) {
        return res.json({ code: 404, message: "Cannot be found." })
      }
      res.guest = guest;
      next();
    } catch (e) {
      throw new Error(e);
    }
  }

  const getGuestDetails = async (req, res) => {
    try {
      const guest = res.guest;
      return res.json(guest[0]);
    } catch (e) {
      throw new Error(e);
    }
  }

  const updateGuestDetails = async (req, res) => {
    try {
      const id = res.guest[0].id;
      const guest = await models.Guest.update({
        ...req.body,
      }, {
          where: {
            id
          }
        });

      res.json({ status: 200, guest });
    } catch (e) {
      throw new Error(e);
    }
  }

  const isValid = (args) => {
    return (typeof (args.firstName) !== "undefined") &&
      (typeof (args.lastName) !== "undefined") &&
      (typeof (args.gender) !== "undefined") &&
      (typeof (args.contactNumber) !== "undefined") &&
      (typeof (args.email) !== "undefined");
  };

  const getAllGuests = async (req, res) => {
    try {
      const guests = await models.Guest.findAll({});
      res.json({ status: 200, data: guests })
    } catch (e) {
      throw new Error(e);
    }
  }

  return {
    addGuest,
    getGuestDetails,
    updateGuestDetails,
    findGuest,
    getAllGuests
  };
};

module.exports = Guest();