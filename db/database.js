const { Pool } = require('pg')
const pool = new Pool({
    user: 'postgres',
    password: '123456',
    database: 'aditya',
    host: 'localhost',
    port: '5432',
})

pool.connect(()=>{
    console.log(" connection done")
})
module.exports=pool;