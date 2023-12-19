const Batch = require('../model/Batch');

class BatchesController {
    constructor() {
      this.name = 'BatchesController';
      this.batches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
    }
  
    async get(req, res) {
      try {
        const results = await Batch.getBatches();
        res.status(200).json(results);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
      }
    }
    
  }
  
  module.exports = BatchesController;
  