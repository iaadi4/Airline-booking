const { StatusCodes } = require('http-status-codes');
const { Booking } = require('../models/index');
const { ValidationError, AppError } = require('../utils/errors/index');

class BookingRepository {
    async create(data) {
        try {  
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name == 'SequelizeValidationError') {
                throw new ValidationError(error);
            }
            throw new AppError(
                'RepositoryError',
                'Cannot create the booking',
                'There was some issue creating the booking, please try again later.',
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    }
}

module.export = BookingRepository;