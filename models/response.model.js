module.exports = (sequelize, Sequelize) => {
    const Response = sequelize.define("response", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      subject: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.STRING,
    },
    });
    return Response;
  };
  