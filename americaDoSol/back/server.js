


import app from "./src/app.js"
import conexao from "./infraestrutura/conexao.js"
const port = process.env.PORT

conexao.connect((error)=>{
    if(error){console.log("❌ FALHA AO CONECTAR: "+ error)}
    else { console.log('✅ Conectado ')
        app.listen(port,()=>{console.log('✅ Online')}) } })
