require("dotenv").config();
const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres1",
    password: process.env.DB_PASSWORD,
    host: "dpg-ce40bkha6gdkr7rutou0-a",
    port: 5432,
    database: "the_vault",
    ssl: {
        rejectUnauthorized: false,
        // ca: fs.readFileSync('/path/to/server-certificates/root.crt').toString(),
        // key: fs.readFileSync('/path/to/client-key/postgresql.key').toString(),
        // cert: fs.readFileSync('/path/to/client-certificates/postgresql.crt').toString(),
      },
});

module.exports = pool;
