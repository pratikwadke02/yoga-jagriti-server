const dbConfig = require('../config/db.config.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.student = require('./student.model.js')(sequelize, Sequelize);
db.response = require('./response.model.js')(sequelize, Sequelize);
db.enquiry = require('./enquiry.model.js')(sequelize, Sequelize);
db.user = require('./user.model.js')(sequelize, Sequelize);
db.product = require('./product.model.js')(sequelize, Sequelize);
db.billing = require('./billing.model.js')(sequelize, Sequelize);
db.order = require('./order.model.js')(sequelize, Sequelize);

db.user.hasMany(db.billing, { as: "billings" });
db.billing.belongsTo(db.user, { foreignKey: "userId", as: "user" });

db.user.hasMany(db.order, { as: "orders" });
db.order.belongsTo(db.user, { foreignKey: "userId", as: "user" });

module.exports = db;