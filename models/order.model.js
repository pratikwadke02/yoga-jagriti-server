module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("order", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      products: {
        type: Sequelize.JSON,
      },
      total: {
        type: Sequelize.INTEGER,
      },
      orderStatus: {
        type: Sequelize.STRING,
        defaultValue: "pending",
      },
    });
    return Order;
  };
  
  