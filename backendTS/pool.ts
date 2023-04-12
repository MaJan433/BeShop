import mysql2 from 'mysql2/promise'
export const pool =  mysql2.createPool({
    host: 'host',
    user: 'user',
    database: 'database',
    password: 'password',
    port: port,
    namedPlaceholders: true
});


