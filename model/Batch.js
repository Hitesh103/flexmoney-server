const Query = require('../utililties/queryHelper');

class Batch {
    async getBatches() {
        const query = `SELECT * FROM batches`;
        const res = await Query(query);
        return res;
    }
}

module.exports = new Batch();