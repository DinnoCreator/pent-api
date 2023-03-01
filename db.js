require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "the_vault_bvgm_user",
    password: process.env.DB_PASSWORD,
    host: "dpg-cfvih25269v0ptleuvjg-a",
    port: 5432,
    database: "the_vault_bvgm"
});

module.exports = pool;
