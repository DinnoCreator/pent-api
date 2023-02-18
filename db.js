require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres1",
    password: process.env.DB_PASSWORD,
    host: "dpg-ce40bkha6gdkr7rutou0-a.oregon-postgres.render.com",
    port: 5432,
    database: "the_vault",
    ssl: true
});

module.exports = pool;
