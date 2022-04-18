const { Sequelize } = require("sequelize");
const database = require("../connection");

const Song = database.define("song", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  user_id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: false
  },
  song: {
    type: Sequelize.STRING,
    allowNull: true
  },
  album: {
    type: Sequelize.STRING,
    allowNull: true
  },
  artist: {
    type: Sequelize.STRING,
    allowNull: true
  },
  genre: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

module.exports = Song;
