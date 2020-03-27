module.exports = (sequelize, DataTypes) => {
    const Car = sequelize.define('Car', {
        registration_no: {
            type: DataTypes.STRING,
            allowNull: false
        },
        color: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customer: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Car
}