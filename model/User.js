const Query = require('../utililties/queryHelper');

class User {
    async registerUser(user,flag) {
        const { name, age, phone, email, current_batch, start_date, password } = user;
        const query = `
            INSERT INTO users (name, age, phone, email, current_batch, start_date) 
            VALUES ('${name}', ${age}, '${phone}', '${email}', ${current_batch}, '${start_date}')
        `;
        const res = await Query(query,  function(err, results, fields) {
            console.log(results); 
            console.log(fields);
          });
        return res;
    }

    async getUserById(user_id) {
        const query = `SELECT * FROM users WHERE user_id = ${user_id}`;
        const res = await Query(query);
        return res;
    }

    async getUserByEmail(email) {
        const query = `SELECT * FROM users WHERE email = '${email}'`;
        const res = await Query(query);
        return res;
    }
}

module.exports = new User();
