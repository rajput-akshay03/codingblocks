const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');
// sequelize.sync({ force: false })  // Use { force: true } to drop and recreate tables (for testing only)
//   .then(() => {
//     console.log('Tables synced successfully!');
//   })
//   .catch((err) => {
//     console.error('Error syncing tables:', err.message);
//   });
const Blog = sequelize.define('Blog', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false },
}, { timestamps: true });

module.exports = Blog;
