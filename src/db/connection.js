import sql from 'mssql'

const dbSettings ={
    user:process.env.USER_DB,
    password:process.env.PASSWORD_DB,
    server:process.env.SERVER,
    database:process.env.webstore,
    options:{
        encrypt: true, 
        trustServerCertificate: true 
    },
}
async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings)
        return pool;
    } catch (error) {
        console.log(error);
    }
}

getConnection();