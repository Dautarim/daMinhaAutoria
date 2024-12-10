import mysql from 'mysql'
import 'dotenv/config'

const pw = process.env.PW
const conexao = mysql.createConnection({
    host:'localhost',
    port: '3306',
    user: 'root',
    password: pw,
    database: 'america do sol app',
})

export default conexao