const Sequelize = require('sequelize')
const sequelize = new Sequelize('QueryCriaTabela.sql', 'esnoite', 'seeknhire', {
    host: "localhost",
    dialect: "mssql"
})

sequelize.authenticate().then(() => {
    console.log("ta funfando")
}).catch((erro) =>{
    console.log("faio " + erro)
})