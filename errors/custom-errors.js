class CustomAPIError extends Error {
  constructor(message,statusCode){
    super(message,statusCode)
    this.statusCode = statusCode
  }
}

const createCustomError = () => {
  return new CustomAPIError(msg, statusCode)
}

module.exports = {
  createCustomError,CustomAPIError
}