import mysql from 'mysql2';

const coon = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'mapyeugau110418',
    database: 'document'
})

coon.connect((err, coon) => {
    if (err) return console.log(err);
    return console.log('Connection mysql')
})

export default coon;