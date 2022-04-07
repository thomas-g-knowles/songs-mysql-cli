const { Sequelize } = require("sequelize");

module.exports = new Sequelize(process.env.MYSQL_DB_URI);
