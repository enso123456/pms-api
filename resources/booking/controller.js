const dateFns = require('date-fns');

const models = require('../../models');

const Booking = () => {

  const filterQuery = (args) => {
    let query = {};

    if (typeof (args.roomId) !== "undefined") {
      query.roomId = args.roomId;
    }
    if (typeof (args.checkin) !== "undefined") {
      query.checkin = args.checkin;
    }
    if (typeof (args.checkout) !== "undefined") {
      query.checkin = args.checkin;
    }
    if (typeof (args.guestId) !== "undefined") {
      query.guestId = args.guestId;
    }
    return query;
  }
  // get booking details
  const getBookingDetails = async (args) => {
    const queryString = filterQuery(args);
    const room = await models.Booking.findAll({ where: queryString });

    return room;
  };

  const getGuestBookingDetails = async (req, res) => {
    try {
      const room = await getBookingDetails(req.body);
      return res.json({
        code: 200,
        data: room
      });
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Add booking
   * 
   * check room availability
   * check in dates
   */

  const addBooking = async (req, res) => {
    try {
      const isValidated = isValid(res.booking);
      if (isValidated) {
        const guest = await models.Booking.create(res.booking);
        return res.json({
          code: 200,
          data: guest
        });
      } else {
        return res.json({
          code: 500,
          message: "Missing booking details",
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const isValid = (args) => {
    return (typeof (args.roomId) !== "undefined") &&
      (typeof (args.checkin) !== "undefined") &&
      (typeof (args.checkout) !== "undefined") &&
      (typeof (args.guestId) !== "undefined");
  };

  const bookingQueryValidation = (args) => {
    return (typeof (args.roomId) !== "undefined") &&
      (typeof (args.checkin) !== "undefined") &&
      (typeof (args.checkout) !== "undefined");
  };

  const checkRoomAvailability = async (req, res, next) => {
    try {
      const isValidated = bookingQueryValidation(req.body);
      if (isValidated) {
        const queryString = filterQuery(req.body);
        const room = await models.Booking.findAll({
          where: queryString
        });
        if (room.length > 0) {
          return res.json({ code: 500, message: "The room is already booked" });
        } else {
          res.booking = req.body;
          return next();
        }
      }
    } catch (e) {
      console.log(e);
    }
  }

  return {
    addBooking,
    checkRoomAvailability,
    getBookingDetails,
    getGuestBookingDetails
  };

};

module.exports = Booking;