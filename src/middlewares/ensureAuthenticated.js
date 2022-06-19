const { verify } = require('jsonwebtoken');

const { request: requestErrors } = require('../enums/errorsEnum');
const AppError = require('../errors/AppError');
const { secret_token } = require('../config/auth')

const ensureAuthenticated = (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw AppError(requestErrors.TOKEN_MISSING);

    const [, token] = authHeader.split(' ');

    try {
        verify(token, secret_token);
    } catch {
        throw AppError(`${requestErrors.INVALID_TOKEN} - Request Invalid`);
    }

    next();
}

module.exports = {
    ensureAuthenticated
}