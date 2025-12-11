const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5433,
    user: process.env.DB_USER || 'shop_user',
    password: process.env.DB_PASSWORD || 'shop_user',
    database: process.env.DB_NAME || 'shop_db',
});

module.exports = { pool };