module.exports = (sequelize, Sequelize) => {
  const Billing = sequelize.define("billing", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    country: {
        type: Sequelize.STRING,
    },
    state: {
        type: Sequelize.STRING,
    },
    district: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
  });
  return Billing;
};

