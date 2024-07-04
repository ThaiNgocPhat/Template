import { Sequelize } from "sequelize";

const sequelize = new Sequelize('website_sql', 'root', 'mapyeugau110418',
{
    host: 'localhost',
    dialect:'mysql',
    logging: false,
})

export default sequelize;