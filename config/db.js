const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "mysql-295a232c-hp5741609-63ed.a.aivencloud.com",
  user: "avnadmin",
  password: "AVNS_hTU7BULxhrRInJKCjCd",
  database: "yoga_classes",
  port : 27103
});

function connectDb() {
  connection.connect(function (err, res) {
    if (err) {
      console.log("ERROR", err);
    } else {
        console.log("DB Connected");
    }
  });
}

module.exports = { connection, connectDb };