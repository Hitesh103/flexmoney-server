const RegisterController = require('./RegisterController');
const UserController = require('./UserController.js');
const BatchesController = require('./BatchesController');
const PaymentController = require('./PaymentController');

module.exports = {
  RegisterController: new RegisterController(),
  UserController: new UserController(),
  BatchesController: new BatchesController(),
  PaymentController: new PaymentController(),
};
