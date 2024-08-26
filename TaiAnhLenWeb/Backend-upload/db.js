// db.js
import { Sequelize } from "sequelize";

const sequelize = new Sequelize("dbupload", "root", "mapyeugau110418", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

export default sequelize;
