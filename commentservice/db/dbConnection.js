const { Sequelize } = require('sequelize');
const fs = require('fs');
require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.PORT,
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: true,
      ca: fs.readFileSync('./db/ca.pem').toString(), // Path to the CA certificate
    },
  },
  logging: console.log, // Enable SQL query logs for debugging
});

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('✅ Database connected successfully!');
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err.message);
  });

// Optional: Sync models and create tables
// sequelize.sync({ force: false })
//   .then(() => {
//     console.log('✅ Tables synced successfully!');
//   })
//   .catch((err) => {
//     console.error('❌ Error syncing tables:', err.message);
//   });

module.exports = sequelize;
