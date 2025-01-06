const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnection');
// sequelize.sync({ force: false })  // Use { force: true } to drop and recreate tables (for testing only)
//   .then(() => {
//     console.log('Tables synced successfully!');
//   })
//   .catch((err) => {
//     console.error('Error syncing tables:', err.message);
//   });
const Comment = sequelize.define('Comment', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'Comments',
  timestamps: true,
});

module.exports = Comment;
