function requestLoggerMiddleware(req, res, next) {
  console.log(`Request [${new Date()}]: \n  ${req.method} ${req.path} \n  Body ${JSON.stringify(req.body)}`);
  next();
}

module.exports = requestLoggerMiddleware;
