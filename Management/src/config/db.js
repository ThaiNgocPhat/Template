import { Sequelize } from "sequelize";

const sequelize = new Sequelize('buoi6', 'root', 'mapyeugau110418',
{
    host: 'localhost',
    dialect:'mysql',
    logging: false,
})

export default sequelize;