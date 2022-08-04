function errorHandler(err, req, res, next) {
  console.log("Received error", err.message);
  console.log("Stacktrace", err.stack);
  if(res.headersSent){
      return next(err)
  }
  const status = err.statusCode || 500;
  return res.status(status).json({
      "status": status,
      "error": `${err.message || "Something went wrong"}`
  });
};

module.exports = errorHandler;
