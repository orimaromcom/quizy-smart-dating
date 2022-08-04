function ErrorIfNaN(id) {
  if (isNaN(id)) {
    const error = Error()
    error.statusCode = 400;
    error.message = 'Id should be a number';
    throw error;
  }
}

function ErrorIfNotFound(item) {
  if (!item) {
    const error = Error()
    error.statusCode = 404;
    error.message = 'Not found';
    throw error;
  }
}

module.exports = {
  ErrorIfNaN,
  ErrorIfNotFound
};
