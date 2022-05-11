const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    password: 'password',
    database: 'aditya',
    host: 'localhost',
    port: '5432',
})

pool.connect(()=>{
    console.log(" connection done")
})
module.exports=pool;