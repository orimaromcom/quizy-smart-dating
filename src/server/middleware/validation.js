const { validationResult, checkSchema } = require('express-validator');

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
  email: {
    isString: {
      errorMessage: "Email should be a string"
    },
    isLength: {
      errorMessage: 'Email should be at least 10 characters long',
      options: { min: 10 },
    },
    in: ['body']
  },
  age: {
    isInt: {
      options: {
        gte: 18,
        lte: 55
      },
      errorMessage: "Age should be between 18 and 55"
    },
    optional: {
      options: {
        nullable: true
      }
    },
    in: ['body']
  },
  minAge: {
    isInt: {
      options: {
        gte: 18,
        lte: 55
      },
      errorMessage: "Minimum age should be between 18 and 55"
    },
    optional: {
      options: {
        nullable: true
      }
    },
    in: ['body.preferences'],
  },
  maxAge: {
    isInt: {
      options: {
        gte: 18,
        lte: 55
      },
      errorMessage: "Maximum age should be between 18 and 55"
    },
    optional: {
      options: {
        nullable: true
      }
    },
    in: ['body.preferences'],
  },
  phone: {
    isString: {
      errorMessage: "Phone should be a string"
    },
    isLength: {
      errorMessage: 'Phone should be at least 10 characters long',
      options: { min: 10 },
    },
    optional: {
      options: {
        nullable: true
      }
    },
    in: ['body']
  },
  gender: {
    isString: {
      errorMessage: "Gender should be a string",
    },
    isIn: {
      options: [['male', 'female', 'other']],
      errorMessage: "Gender should be 'male', 'female' or 'other'",
    },
    optional: {
      options: {
        nullable: true
      }
    },
    in: ['body']
  },
  gender: {
    isString: {
      errorMessage: "Gender should be a string",
    },
    isIn: {
      options: [['male', 'female', 'any']],
      errorMessage: "Mate of gender should be 'male', 'female' or 'any'",
    },
    optional: {
      options: {
        nullable: true
      }
    },
    in: ['body.preferences']
  },
};

module.exports = {
  validateCreateUserSchema
};
