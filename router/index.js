const { Router } = require("express");
const { RegisterController, UserController, BatchesController, PaymentController } = require("../controller");

const router = Router();

// Register user
router.post('/users/register', RegisterController.create);

// Get user details
router.get('/users/:user_id', UserController.get);

// Get user details by email
router.get('/users', UserController.getByEmail);

// Available batches
router.get('/batches', BatchesController.get);

// Payment processing
router.post('/payments', PaymentController.processPayment);

// Get user payments
router.get('/users/:user_id/payments', PaymentController.getUserPayments);

module.exports = router;
