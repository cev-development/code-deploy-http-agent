const handlingErrors = (error, _, response, next) => {
    console.log(error);
    if (error.isAppError) {
        return response.status(error.statusCode).json({
            message: error.message,
        });
    }

    return response.status(500).json({
        message: `Internal server error: \n${error.message}`,
    });

    next();
}

module.exports = {
    handlingErrors
}