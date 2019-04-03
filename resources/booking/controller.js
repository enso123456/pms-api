const dateFns = require('date-fns');

const models = require('../../models');

const Booking = function () {
  // get booking details
  const getBookingDetails = async (req, res, next, id) => {
    const { roomId, checkin } = req.body;
    const room = await models.Booking.findAll({
      where: {
        roomId,
        checkin
      }
    });
  };

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

  const checkRoomAvailability = async (req, res, next) => {
    try {
      const { roomId, checkin } = req.body;
      const room = await models.Booking.findAll({
        where: {
          roomId,
          checkin
        }
      });

      if (room.length > 0) {
        return res.json({ code: 500, message: "The room is already booked" });
      } else {
        res.booking = req.body;
        next();
      }
    } catch (e) {
      console.log(e);
    }
  }

  return {
    addBooking,
    checkRoomAvailability,
    getBookingDetails
  };

};

module.exports = Booking;