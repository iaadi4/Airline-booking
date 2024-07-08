const { StatusCode } = require('http-status-codes');

class ValidationError extends Error {
    constructor(error) {
        super();
        let explanation = [];
        error.errors.forEach(err => {
            explanation.push(err.message)
        });
        this.name = 'ValidationError';
        this.explanation = explanation;
        this.message = 'Not able to validate the data send in request';
        this.statusCode = StatusCode.BAD_REQUEST;
    }
}

module.exports = ValidationError;