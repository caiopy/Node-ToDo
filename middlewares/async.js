const asyncWrapper = (fn) => {
  return async (req, res,next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error) // pass the error to another middleware
    }
  }
}

module.exports = asyncWrapper