module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    stock: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    discountPrice: {
      type: Sequelize.STRING,
    },
  });
  return Product;
};
