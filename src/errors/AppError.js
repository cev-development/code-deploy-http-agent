module.exports = (errorCode) => {
    const error = new Error();

    error.message = `${errorCode} - Request Invalid`;
    error.statusCode = 400;
    error.isAppError = true;

    return error;
}
