const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "yashika",
    port: 5432,
    password: "demo",
    database: "userdb"
})

module.exports = client;

