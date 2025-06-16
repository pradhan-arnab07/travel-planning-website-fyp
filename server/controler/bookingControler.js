const Booking = require('../DBModel/bookingModel');
const Toure = require('../DBModel/toureModel');
const User = require('../DBModel/userModel');
const factory  = require('../controler/handelFactory')


exports.createBooking = factory.createOne(Booking)
// exports.createBooking = async (req, res) => {
//     console.log('Booking route hit');
//     console.log(req.body);
  
//     try {
//       const newBooking = await Booking.create(req.body);
//       res.status(201).json({
//         status: 'success',
//         data: {
//           booking: newBooking
//         }
//       });
//     } catch (err) {
//       console.error('Booking creation error:', err);
//       res.status(400).json({
//         status: 'fail',
//         message: err.message
//       });
//     }
//   };
  
exports.getAllBooking = factory.getAll(Booking)
exports.getBooking = factory.getOne(Booking)
exports.getUpdate = factory.updateOne(Booking)
exports.getDelete = factory.deleteOne(Booking)