const {validationResult, checkSchema} = require('express-validator');

function validateCreateUserSchema() {
  return validateSchema(createUserSchema);
}

function validateSchema(schema) {
  const validationMiddleware = checkSchema(schema);
  return async (req, res, next) => {
    await validationMiddleware.run(req);
    const result = validationResult(req);
    if (result.isEmpty()) {
      next();
      return;
    }
    const error = Error(result.array().map(value => value.msg).join());
    error.statusCode = 400;
    next(error);
  };
}

const createUserSchema = {
  text: {
    isString: {
      errorMessage: "User text should be a string"
    },
    isLength: {
      errorMessage: 'User text should be at least 1 characters long',
      options: { min: 1 },
    },
    in: ['body']
  }
};

module.exports = {
  validateCreateUserSchema
};
