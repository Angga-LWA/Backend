import { Sequelize } from "sequelize";

// upload_db adalah nama database
const db = new Sequelize('upload_db', 'root', '',{
    host: 'localhost',
    dialect: "mysql"
});

export default db;