const { StatusCode } = require('http-status-codes');

class AppError extends Error {
    constructor(
        name,
        explanation,
        message,
        statusCode
    ) {
        this.name = name;
        this.message = message;
        this.explanation = explanation;
        this.statusCode = StatusCode;
    }
}

module.exports = AppError;