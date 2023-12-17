class BatchesController {
    constructor() {
      this.name = 'BatchesController';
      // Assuming batches are stored in an array
      this.batches = ['6-7AM', '7-8AM', '8-9AM', '5-6PM'];
    }
  
    get(req, res) {
      res.status(200).json(this.batches);
    }
  }
  
  module.exports = BatchesController;
  