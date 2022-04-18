const { Sequelize } = require("sequelize");
require("dotenv").config();
module.exports = new Sequelize(process.env.MYSQL_DB_URI, {logging: false});
