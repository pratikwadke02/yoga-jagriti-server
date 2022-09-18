module.exports = (sequelize, Sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    country: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    middleName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    gender: {
      type: Sequelize.STRING,
    },
    dob: {
      type: Sequelize.STRING,
    },
    nationality: {
      type: Sequelize.STRING,
    },
    fatherName: {
      type: Sequelize.STRING,
    },
    motherName: {
      type: Sequelize.STRING,
    },
    spouseName: {
      type: Sequelize.STRING,
    },
    courseName: {
      type: Sequelize.STRING,
    },
    category: {
      type: Sequelize.STRING,
    },
    pwdCertificate: {
      type: Sequelize.STRING,
    },
    idType: {
      type: Sequelize.STRING,
    },
    idNumber: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    district: {
      type: Sequelize.STRING,
    },
    pincode: {
      type: Sequelize.STRING,
    },
    permanentAddress: {
      type: Sequelize.STRING,
    },
    permanentState: {
      type: Sequelize.STRING,
    },
    permanentDistrict: {
      type: Sequelize.STRING,
    },
    permanentPincode: {
      type: Sequelize.STRING,
    },
    permanentCountry: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  });
  return Student;
};
