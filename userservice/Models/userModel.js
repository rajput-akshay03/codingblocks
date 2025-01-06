const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');

// sequelize.sync({ force: false })  // Use { force: true } to drop and recreate tables (for testing only)
//   .then(() => {
//     console.log('Tables synced successfully!');
//   })
//   .catch((err) => {
//     console.error('Error syncing tables:', err.message);
//   });
const User = sequelize.define('User', {
  firstName: { type: DataTypes.STRING, allowNull: false},
  lastName: { type: DataTypes.STRING, allowNull: false},
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: true });

module.exports = User;
