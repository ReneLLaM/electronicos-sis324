const { Sequelize } = require('sequelize');

// Configuración de SQLite con Sequelize
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite',  // La base de datos se guardará en este archivo
});

module.exports = sequelize;
